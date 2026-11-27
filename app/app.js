// app.js — renders the DealBeacon deal finder and wires up search, filters
// and sorting. No network requests: all data comes from deals.js.
import { DEALS, storeUrl, SIGNAL_LABELS } from "./deals.js";

const grid = document.getElementById("deals");
const emptyMsg = document.getElementById("empty");
const resultCount = document.getElementById("result-count");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const storeSelect = document.getElementById("store");
const minDiscountSelect = document.getElementById("mindiscount");
const signalSelect = document.getElementById("signal");
const resetBtn = document.getElementById("reset");
const chipsBox = document.getElementById("chips");

const state = { query: "", category: "", store: "", minDiscount: 0, signal: "", sort: "discount" };

function money(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function discountPct(d) {
  return Math.round((1 - d.sale / d.usual) * 100);
}

function savedAmount(d) {
  return d.usual - d.sale;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function dealCard(d) {
  const pct = discountPct(d);
  const unit = d.unit ? " <small>" + esc(d.unit) + "</small>" : "";
  const alsoAt = d.alsoAt
    ? `<p class="also-at">Also at ${esc(d.alsoAt.store)}: <strong>${money(d.alsoAt.price)}</strong></p>`
    : "";
  return `<article class="card">
    <div class="card-top"><span class="cat">${esc(d.category)}</span><span class="discount-badge">−${pct}%</span></div>
    <h2>${esc(d.name)}</h2>
    <p class="store-line">at <strong>${esc(d.store)}</strong></p>
    <div class="price-row">
      <span class="sale">${money(d.sale)}${unit}</span>
      <span class="usual">${money(d.usual)}${unit}</span>
      <span class="saved">Save ${money(savedAmount(d))}</span>
    </div>
    <span class="badge badge-${esc(d.signal)}">${esc(SIGNAL_LABELS[d.signal])}</span>
    <p class="evidence">${esc(d.evidence)}</p>
    <p class="terms">${esc(d.terms)}</p>
    ${alsoAt}
    <p class="checked">Price checked ${esc(d.checked)} &middot; via ${esc(d.source)}</p>
    <a class="store-btn" href="${esc(storeUrl(d))}" target="_blank" rel="noopener">View at ${esc(d.store)} &rarr;</a>
  </article>`;
}

function applyFilters() {
  const q = state.query.trim().toLowerCase();
  let list = DEALS.filter((d) => {
    if (state.category && d.category !== state.category) return false;
    if (state.store && d.store !== state.store) return false;
    if (state.signal && d.signal !== state.signal) return false;
    if (discountPct(d) < state.minDiscount) return false;
    if (q) {
      const hay = (d.name + " " + d.store + " " + d.category + " " + d.evidence).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  const byDiscount = (a, b) => discountPct(b) - discountPct(a) || savedAmount(b) - savedAmount(a);
  const bySavings = (a, b) => savedAmount(b) - savedAmount(a);
  const byPriceAsc = (a, b) => a.sale - b.sale;
  const byPriceDesc = (a, b) => b.sale - a.sale;
  const newLowRank = { "new-low": 0, "strong": 1, "routine": 2 };
  const byNewLow = (a, b) => newLowRank[a.signal] - newLowRank[b.signal] || byDiscount(a, b);

  if (state.sort === "savings") list.sort(bySavings);
  else if (state.sort === "price-asc") list.sort(byPriceAsc);
  else if (state.sort === "price-desc") list.sort(byPriceDesc);
  else if (state.sort === "newlow") list.sort(byNewLow);
  else list.sort(byDiscount);

  grid.innerHTML = list.map(dealCard).join("");
  emptyMsg.hidden = list.length > 0;
  resultCount.textContent = list.length === DEALS.length
    ? `Showing all ${DEALS.length} deals — sorted by ${sortLabel()}.`
    : `Showing ${list.length} of ${DEALS.length} deals.`;
}

function sortLabel() {
  return {
    "discount": "biggest discount",
    "savings": "biggest $ saving",
    "price-asc": "lowest price",
    "price-desc": "highest price",
    "newlow": "new lows first"
  }[state.sort];
}

function buildFilters() {
  // Category chips.
  const cats = [...new Set(DEALS.map((d) => d.category))];
  const allChip = document.createElement("button");
  allChip.type = "button";
  allChip.className = "chip";
  allChip.textContent = "All categories";
  allChip.setAttribute("aria-pressed", "true");
  allChip.addEventListener("click", () => {
    state.category = "";
    chipsBox.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
    allChip.setAttribute("aria-pressed", "true");
    applyFilters();
  });
  chipsBox.appendChild(allChip);
  for (const cat of cats) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = cat;
    chip.setAttribute("aria-pressed", "false");
    chip.addEventListener("click", () => {
      state.category = state.category === cat ? "" : cat;
      chipsBox.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
      (state.category ? chip : allChip).setAttribute("aria-pressed", "true");
      applyFilters();
    });
    chipsBox.appendChild(chip);
  }

  // Store dropdown.
  const stores = [...new Set(DEALS.map((d) => d.store))].sort();
  for (const s of stores) {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = `${s} (${DEALS.filter((d) => d.store === s).length})`;
    storeSelect.appendChild(opt);
  }
}

function buildStats() {
  const totalSaved = DEALS.reduce((sum, d) => sum + savedAmount(d), 0);
  const newLows = DEALS.filter((d) => d.signal === "new-low").length;
  const biggest = DEALS.reduce((best, d) => (savedAmount(d) > savedAmount(best) ? d : best), DEALS[0]);
  document.getElementById("stat-deals").textContent = DEALS.length;
  document.getElementById("stat-savings").textContent = "$" + Math.round(totalSaved).toLocaleString("en-US");
  document.getElementById("stat-newlows").textContent = newLows;
  document.getElementById("stat-biggest").textContent = "−" + discountPct(biggest) + "%";
}

function resetFilters() {
  state.query = "";
  state.category = "";
  state.store = "";
  state.minDiscount = 0;
  state.signal = "";
  state.sort = "discount";
  searchInput.value = "";
  sortSelect.value = "discount";
  storeSelect.value = "";
  minDiscountSelect.value = "0";
  signalSelect.value = "";
  chipsBox.querySelectorAll(".chip").forEach((c, i) => c.setAttribute("aria-pressed", i === 0 ? "true" : "false"));
  applyFilters();
}

searchInput.addEventListener("input", () => { state.query = searchInput.value; applyFilters(); });
sortSelect.addEventListener("change", () => { state.sort = sortSelect.value; applyFilters(); });
storeSelect.addEventListener("change", () => { state.store = storeSelect.value; applyFilters(); });
minDiscountSelect.addEventListener("change", () => { state.minDiscount = Number(minDiscountSelect.value); applyFilters(); });
signalSelect.addEventListener("change", () => { state.signal = signalSelect.value; applyFilters(); });
resetBtn.addEventListener("click", resetFilters);

buildFilters();
buildStats();
applyFilters();
