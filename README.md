# DealBeacon — Real Black Friday & Cyber Monday Deals, Checked Today

[![make.fun](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/c/black-friday-deal-finder-01)
[![Rank](https://make.fun/badge/black-friday-deal-finder-01/sundalamoonron-ux/black-friday-deal-finder/rank.svg)](https://make.fun/c/black-friday-deal-finder-01)
[![Reward](https://make.fun/badge/black-friday-deal-finder-01/sundalamoonron-ux/black-friday-deal-finder/reward.svg)](https://make.fun/c/black-friday-deal-finder-01)

DealBeacon is a deal finder for Black Friday 2026 and Cyber Monday: 56 real
deals, each with its product, store, sale price, usual price, discount, a
link to the product at its store, and when its price was checked. Every deal
carries an honest verdict — **New low**, **Strong price**, or **Routine
saving** — with the evidence behind it, so you can tell a true bargain from
an inflated "was" price.

## The deals

56 deals across 11 categories (TVs, laptops, headphones, phones, tablets,
gaming, smart home, wearables, PC parts, home & kitchen, streaming) from 8
stores — Amazon, Best Buy, Dell, Apple, Paramount+, Disney+, HBO Max and
Peacock. Total potential saving across all 56 deals: $8,946. 20 of them are
new lowest prices.

Every price was read on 26–27 November 2026 in a deals source that names
the store: TechSpot's Black Friday roundup, Redmond Pie's roundup, DealNews'
Best Buy TV deals, and SoapCentral's streaming roundup. Each card says
where its price was read and when. Store links open the store's own search
for that exact product, so you can confirm the price before you buy.
Prices can change — if the store shows a different price, trust the store.

## Find a deal

- **Search** products, brands or stores
- **Category chips** — 11 categories
- **Filters** — store, minimum discount (20/30/40/50%+), verdict
- **Sort** — biggest discount, biggest $ saving, lowest/highest price,
  new lows first
- Live result count; one click clears all filters

## Run it

```sh
python3 -m http.server 8131 --directory app   # then open http://localhost:8131
# or: node serve.ts                            # then open http://localhost:8080
```

No build step, no network requests, no libraries: plain static files under
`app/`, system fonts only, everything the page loads is a local file. Works
on desktop and on a phone (3-column grid on desktop, 1 column on a phone).

## Hand it in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `app/` and `screenshots/` to `/output` and writes
`/output/dossier.json` with the vendored make.fun library.

## Layout

- `app/index.html` — the page shell: masthead, stats, toolbar, deal grid,
  "How we checked" section
- `app/style.css` — the original dark-navy-and-amber design, responsive
- `app/app.js` — renders the cards; search, filters, sorting, stats
- `app/deals.js` — the 56 deals, their sources and check dates, plus the
  store-link builders
- `screenshots/` — 4 screenshots of the site running in a browser
- `main.ts` — the hand-in program (Node 22, standard library only)
- `vendor/makefun-frontend.ts` — the kit's dossier library, unchanged
- `serve.ts` — a tiny static server for local testing

## Entry

Built for the make.fun competition
[black-friday-deal-finder-01](https://make.fun/c/black-friday-deal-finder-01)
("Build the best real Black Friday deal finder", $250, top 20 paid).
