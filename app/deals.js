// deals.js — the deal data for DealBeacon.
// Every price below was read by the builder on 26–27 Nov 2026 from a deals
// source that names the store (TechSpot, Redmond Pie, DealNews, SoapCentral /
// The Sun, BeeBulletin). Each deal records where its price was read and when.
// Store links are built from the store's own search for the exact product
// name, so every link opens that store showing the matching product.
// Money is in US dollars. `sale` and `usual` are numbers; `unit` is "each"
// or "per month" for streaming subscriptions.

export const CHECKED_NOTE = "Prices checked 26–27 Nov 2026. Prices can change; always confirm on the store page before buying.";

export const DEALS = [
  // ---- TVs & home theater ----
  {
    id: "tcl-65-s4cf",
    name: "TCL 65-inch S4CF 4K HDR Fire TV (2026)",
    category: "TVs & Home Theater",
    store: "Best Buy",
    sale: 229.99, usual: 469.99,
    signal: "new-low",
    evidence: "Best price seen for this model — $40 lower than two weeks ago, and the cheapest 65-inch 4K TV in Best Buy's Black Friday sale.",
    terms: "Doorbuster, ends 28 Nov. Free shipping.",
    source: "DealNews Best Buy TV deals",
    checked: "27 Nov 2026",
    q: "TCL 65 inch S4CF 4K Fire TV"
  },
  {
    id: "hisense-98-qd5",
    name: "Hisense 98-inch QD5 QLED 4K Smart TV",
    category: "TVs & Home Theater",
    store: "Best Buy",
    sale: 799.99, usual: 2499.99,
    signal: "new-low",
    evidence: "68% off list — the deepest cut on any big-screen TV in Best Buy's Black Friday sale, and a doorbuster that ends 28 Nov.",
    terms: "Doorbuster, ends 28 Nov. Free shipping.",
    source: "DealNews Best Buy TV deals",
    checked: "26 Nov 2026",
    q: "Hisense 98 inch QD5 QLED 4K TV"
  },
  {
    id: "samsung-frame-65",
    name: "Samsung 65-inch The Frame Art TV",
    category: "TVs & Home Theater",
    store: "Amazon",
    sale: 997, usual: 1400,
    signal: "strong",
    evidence: "$403 off a premium lifestyle TV that rarely drops below $1,100.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Samsung 65 inch The Frame Art TV"
  },
  {
    id: "roku-65-pro-oled",
    name: "Roku 65-inch Pro Series OLED TV",
    category: "TVs & Home Theater",
    store: "Amazon",
    sale: 799.99, usual: 1199.99,
    signal: "strong",
    evidence: "$400 off — one of the cheapest ways into a 65-inch OLED this Black Friday.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Tom's Guide streaming & TV roundup",
    checked: "26 Nov 2026",
    q: "Roku 65 inch Pro Series OLED TV"
  },
  {
    id: "insignia-50-f50",
    name: "Insignia 50-inch F50 Series LED 4K TV",
    category: "TVs & Home Theater",
    store: "Amazon",
    sale: 149, usual: 300,
    signal: "strong",
    evidence: "Half price for a 50-inch 4K set — the cheapest big-screen 4K TV in this list.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Insignia 50 inch F50 Series LED 4K TV"
  },
  {
    id: "roku-50-select",
    name: "Roku 50-inch Select Series 4K TV (2026)",
    category: "TVs & Home Theater",
    store: "Amazon",
    sale: 199, usual: 300,
    signal: "strong",
    evidence: "$100 off the 2026 model — a solid mid-size 4K TV for a bedroom or second room.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Roku 50 inch Select Series 4K TV 2026"
  },
  {
    id: "roku-32-select",
    name: "Roku 32-inch Select Series Smart TV (2026)",
    category: "TVs & Home Theater",
    store: "Amazon",
    sale: 99, usual: 180,
    signal: "strong",
    evidence: "45% off — a genuinely cheap small TV, not a stripped-down doorbuster model.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Roku 32 inch Select Series Smart TV 2026"
  },
  {
    id: "sonos-beam-gen2",
    name: "Sonos Beam Gen 2 Soundbar",
    category: "TVs & Home Theater",
    store: "Amazon",
    sale: 339, usual: 500,
    signal: "strong",
    evidence: "$161 off Sonos' most popular soundbar — a rare cut on a product that holds its price most of the year.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Sonos Beam Gen 2 soundbar"
  },

  // ---- Laptops ----
  {
    id: "macbook-air-m5-13",
    name: "Apple MacBook Air 13-inch, M5 chip (16GB RAM, 512GB SSD)",
    category: "Laptops",
    store: "Amazon",
    sale: 999, usual: 1299,
    signal: "new-low",
    evidence: "$300 off and the lowest price yet for the new M5 Air — the standout laptop deal of Black Friday 2026.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Apple MacBook Air 13 M5 512GB",
    alsoAt: { store: "Best Buy", price: 1049 }
  },
  {
    id: "macbook-neo-13",
    name: "Apple MacBook Neo 13-inch (8GB RAM, 256GB SSD)",
    category: "Laptops",
    store: "Amazon",
    sale: 599, usual: 699,
    signal: "routine",
    evidence: "Only $100 off Apple's cheapest laptop — a real saving, but small next to the M5 Air's $300 cut.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Apple MacBook Neo 13 inch 256GB"
  },
  {
    id: "macbook-pro-14-m6",
    name: "Apple MacBook Pro 14-inch, M6 chip (16GB RAM, 1TB SSD)",
    category: "Laptops",
    store: "Amazon",
    sale: 1779, usual: 1999,
    signal: "strong",
    evidence: "$220 off the brand-new M6 Pro — Apple flagships almost never drop this soon after launch.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Apple MacBook Pro 14 M6 1TB"
  },
  {
    id: "mac-mini-m6",
    name: "Apple Mac mini, M6 chip (16GB RAM, 256GB SSD)",
    category: "Laptops",
    store: "Amazon",
    sale: 779, usual: 899,
    signal: "strong",
    evidence: "$120 off the new M6 mini — the cheapest way into a current Apple desktop.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Apple Mac mini M6 256GB"
  },
  {
    id: "dell-xps-13",
    name: "Dell XPS 13 Laptop (Core 5 320, 8GB RAM, 256GB SSD)",
    category: "Laptops",
    store: "Dell",
    sale: 549, usual: 750,
    signal: "new-low",
    evidence: "27% off Dell's flagship ultraportable — the lowest XPS 13 price in this season's sale.",
    terms: "Dell Black Friday sale, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Dell XPS 13 Core 5 256GB"
  },
  {
    id: "hp-omnibook-5",
    name: "HP OmniBook 5 14-inch 2K OLED Touch Laptop (Core 5, 8GB, 256GB)",
    category: "Laptops",
    store: "Best Buy",
    sale: 449.99, usual: 799.99,
    signal: "new-low",
    evidence: "44% off — the biggest laptop cut in this list, and an OLED screen at a budget price.",
    terms: "Best Buy Black Friday sale, ends 28 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "HP OmniBook 5 14 inch 2K OLED"
  },

  // ---- Headphones & audio ----
  {
    id: "airpods-pro-3",
    name: "Apple AirPods Pro 3 with Active Noise Cancellation",
    category: "Headphones & Audio",
    store: "Amazon",
    sale: 149, usual: 249,
    signal: "new-low",
    evidence: "$100 off — the lowest price yet for Apple's newest earbuds, $30 under their previous best.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Apple AirPods Pro 3"
  },
  {
    id: "sony-xm6",
    name: "Sony WH-1000XM6 Wireless Noise Cancelling Headphones",
    category: "Headphones & Audio",
    store: "Amazon",
    sale: 348, usual: 460,
    signal: "strong",
    evidence: "$112 off Sony's flagship — the best price on the XM6 since launch.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Sony WH-1000XM6 headphones"
  },
  {
    id: "sony-xm4",
    name: "Sony WH-1000XM4 Wireless Headphones",
    category: "Headphones & Audio",
    store: "Amazon",
    sale: 188, usual: 300,
    signal: "strong",
    evidence: "37% off the older flagship — most of the XM6's sound for about half the price.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Sony WH-1000XM4 headphones"
  },
  {
    id: "sony-wf-xm5",
    name: "Sony WF-1000XM5 True Wireless Earbuds",
    category: "Headphones & Audio",
    store: "Amazon",
    sale: 179, usual: 299,
    signal: "strong",
    evidence: "40% off Sony's top earbuds — a bigger cut than the XM6 over-ears get.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Sony WF-1000XM5 earbuds"
  },
  {
    id: "beats-studio-pro",
    name: "Beats Studio Pro Over-Ear Headphones",
    category: "Headphones & Audio",
    store: "Amazon",
    sale: 149, usual: 299,
    signal: "new-low",
    evidence: "Half price — $150 off, the cheapest these have ever been.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Beats Studio Pro over-ear headphones"
  },
  {
    id: "beats-powerbeats-pro-2",
    name: "Beats Powerbeats Pro 2 Wireless Earbuds",
    category: "Headphones & Audio",
    store: "Amazon",
    sale: 179, usual: 250,
    signal: "strong",
    evidence: "$71 off the workout earbuds with a heart-rate monitor — a solid cut for gym use.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Beats Powerbeats Pro 2 earbuds"
  },
  {
    id: "sennheiser-momentum-4",
    name: "Sennheiser Momentum 4 Noise Cancelling Headphones",
    category: "Headphones & Audio",
    store: "Amazon",
    sale: 189, usual: 299,
    signal: "strong",
    evidence: "$110 off with 60-hour battery life — the long-battery pick among premium headphones.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Sennheiser Momentum 4 headphones"
  },
  {
    id: "sonos-ace",
    name: "Sonos Ace Active Noise Cancelling Headphones",
    category: "Headphones & Audio",
    store: "Amazon",
    sale: 229, usual: 349,
    signal: "strong",
    evidence: "$120 off Sonos' first headphones — a real cut on a premium set that rarely discounts.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Sonos Ace headphones"
  }
];

DEALS.push(
  // ---- Phones ----
  {
    id: "pixel-11-pro",
    name: "Google Pixel 11 Pro, Unlocked",
    category: "Phones",
    store: "Amazon",
    sale: 749, usual: 1099,
    signal: "new-low",
    evidence: "32% off — $350 under list for Google's newest flagship phone.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Google Pixel 11 Pro unlocked"
  },
  {
    id: "galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra 256GB, Unlocked",
    category: "Phones",
    store: "Amazon",
    sale: 1049, usual: 1400,
    signal: "strong",
    evidence: "$351 off Samsung's top phone — one of the biggest dollar savings on a handset this week.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Samsung Galaxy S26 Ultra 256GB unlocked"
  },
  {
    id: "galaxy-z-fold-8",
    name: "Samsung Galaxy Z Fold 8 256GB, Unlocked",
    category: "Phones",
    store: "Amazon",
    sale: 1549, usual: 1899,
    signal: "strong",
    evidence: "$350 off the foldable flagship — a serious cut on a $1,900 phone.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Samsung Galaxy Z Fold 8 256GB unlocked"
  },
  {
    id: "galaxy-s26-fe",
    name: "Samsung Galaxy S26 FE, Unlocked",
    category: "Phones",
    store: "Amazon",
    sale: 499, usual: 699,
    signal: "strong",
    evidence: "29% off the fan-edition flagship — flagship features at a mid-range price.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Samsung Galaxy S26 FE unlocked"
  },

  // ---- Tablets & e-readers ----
  {
    id: "ipad-11th-gen",
    name: "Apple iPad 11-inch, 11th generation (128GB, Wi-Fi)",
    category: "Tablets & E-Readers",
    store: "Amazon",
    sale: 379, usual: 450,
    signal: "strong",
    evidence: "$71 off the current base iPad — the cheapest entry to the iPad line this Black Friday.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Apple iPad 11 inch 11th generation 128GB"
  },
  {
    id: "ipad-air-m4",
    name: "Apple iPad Air 11-inch, M4 chip (Wi-Fi)",
    category: "Tablets & E-Readers",
    store: "Amazon",
    sale: 649, usual: 749,
    signal: "routine",
    evidence: "A real $100 cut, but a small one for a $749 tablet — buy it if you need it, not for the discount.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Apple iPad Air 11 inch M4"
  },
  {
    id: "kindle-colorsoft",
    name: "Amazon Kindle Colorsoft 16GB",
    category: "Tablets & E-Readers",
    store: "Amazon",
    sale: 169, usual: 289,
    signal: "new-low",
    evidence: "42% off — the lowest price yet for the color Kindle.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Amazon Kindle Colorsoft 16GB"
  },

  // ---- Gaming ----
  {
    id: "switch-2-mkw-bundle",
    name: "Nintendo Switch 2 + Mario Kart World Bundle",
    category: "Gaming",
    store: "Best Buy",
    sale: 499.99, usual: 549.99,
    signal: "strong",
    evidence: "$50 off — Switch 2 hardware almost never discounts, so any cut on the bundle is a real one.",
    terms: "Best Buy Black Friday sale, 22 Nov–5 Dec.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Nintendo Switch 2 Mario Kart World bundle"
  },
  {
    id: "dualsense",
    name: "PlayStation DualSense Wireless Controller",
    category: "Gaming",
    store: "Amazon",
    sale: 54, usual: 75,
    signal: "strong",
    evidence: "28% off the standard PS5 controller — the go-to spare-controller price of the sale.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "PlayStation DualSense wireless controller"
  },
  {
    id: "xbox-controller",
    name: "Xbox Wireless Controller",
    category: "Gaming",
    store: "Amazon",
    sale: 49, usual: 70,
    signal: "strong",
    evidence: "30% off — the cheapest first-party Xbox controller in this year's sale.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Xbox wireless controller"
  },
  {
    id: "fc-27-ps5",
    name: "EA Sports FC 27, Standard Edition (PlayStation 5)",
    category: "Gaming",
    store: "Amazon",
    sale: 29, usual: 70,
    signal: "new-low",
    evidence: "59% off a game that launched this year — the deepest game discount in this list.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "EA Sports FC 27 PlayStation 5"
  },
  {
    id: "logitech-g502-lightspeed",
    name: "Logitech G502 Lightspeed Wireless Gaming Mouse",
    category: "Gaming",
    store: "Amazon",
    sale: 74, usual: 150,
    signal: "new-low",
    evidence: "51% off — half price on the most popular gaming mouse shape ever made.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Logitech G502 Lightspeed wireless gaming mouse"
  },

  // ---- Smart home ----
  {
    id: "echo-spot",
    name: "Amazon Echo Spot Smart Alarm Clock with Alexa",
    category: "Smart Home",
    store: "Amazon",
    sale: 44, usual: 109,
    signal: "new-low",
    evidence: "60% off — the lowest Echo Spot price of the season.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Amazon Echo Spot"
  },
  {
    id: "fire-tv-stick-4k",
    name: "Amazon Fire TV Stick 4K (newest model)",
    category: "Smart Home",
    store: "Amazon",
    sale: 19, usual: 60,
    signal: "new-low",
    evidence: "68% off — the cheapest 4K streamer you can buy this Black Friday.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Amazon Fire TV Stick 4K"
  },
  {
    id: "echo-show-11",
    name: "Amazon Echo Show 11 Smart Display",
    category: "Smart Home",
    store: "Amazon",
    sale: 154, usual: 250,
    signal: "strong",
    evidence: "$96 off the big kitchen display — a bigger cut than the smaller Echo Shows get.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Amazon Echo Show 11"
  },
  {
    id: "ring-doorbell-2k",
    name: "Ring Battery Doorbell 2K (newest model)",
    category: "Smart Home",
    store: "Amazon",
    sale: 38, usual: 100,
    signal: "new-low",
    evidence: "62% off — a video doorbell for the price of a pizza.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Ring Battery Doorbell 2K"
  },
  {
    id: "eufy-solocam-s340",
    name: "eufy Security SoloCam S340 Solar Security Camera",
    category: "Smart Home",
    store: "Amazon",
    sale: 109, usual: 219,
    signal: "new-low",
    evidence: "Half price on a solar camera with no monthly fee — the best home-security value here.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "eufy SoloCam S340 solar security camera"
  },
  {
    id: "roomba-105",
    name: "iRobot Roomba 105 Robot Vacuum with Charging Base",
    category: "Smart Home",
    store: "Amazon",
    sale: 139, usual: 300,
    signal: "new-low",
    evidence: "54% off — the cheapest robot vacuum from a major brand in this list.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "iRobot Roomba 105 robot vacuum"
  }
);

DEALS.push(
  // ---- Wearables ----
  {
    id: "apple-watch-s12",
    name: "Apple Watch Series 12 (GPS, 42mm)",
    category: "Wearables",
    store: "Amazon",
    sale: 299, usual: 400,
    signal: "strong",
    evidence: "$100 off the newest Apple Watch — a rare cut on a current-generation model.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Apple Watch Series 12 GPS 42mm"
  },
  {
    id: "apple-watch-se3",
    name: "Apple Watch SE 3 GPS 40mm",
    category: "Wearables",
    store: "Amazon",
    sale: 179, usual: 250,
    signal: "strong",
    evidence: "$71 off the entry-level Apple Watch — the cheapest way into the Apple Watch line.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Apple Watch SE 3 GPS 40mm"
  },
  {
    id: "pixel-watch-5",
    name: "Google Pixel Watch 5 (Android smartwatch)",
    category: "Wearables",
    store: "Amazon",
    sale: 299, usual: 400,
    signal: "strong",
    evidence: "$100 off Google's newest watch — matching the Apple Watch Series 12 cut dollar for dollar.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Google Pixel Watch 5"
  },
  {
    id: "galaxy-watch-8",
    name: "Samsung Galaxy Watch 8 40mm",
    category: "Wearables",
    store: "Amazon",
    sale: 199, usual: 350,
    signal: "strong",
    evidence: "43% off — the biggest percentage cut on any smartwatch in this list.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Samsung Galaxy Watch 8 40mm"
  },

  // ---- PC parts & gear ----
  {
    id: "ryzen-9850x3d",
    name: "AMD Ryzen 7 9850X3D Unlocked Processor",
    category: "PC Parts & Gear",
    store: "Amazon",
    sale: 399, usual: 499,
    signal: "strong",
    evidence: "$100 off the gaming CPU to beat this year — CPUs are one of the few PC parts actually discounted.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "AMD Ryzen 7 9850X3D processor"
  },
  {
    id: "samsung-9100-pro-1tb",
    name: "Samsung 9100 Pro 1TB PCIe 5.0 NVMe SSD",
    category: "PC Parts & Gear",
    store: "Amazon",
    sale: 209, usual: 340,
    signal: "new-low",
    evidence: "39% off the fastest consumer SSD Samsung makes — SSD deals are rare this year.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Samsung 9100 Pro 1TB SSD"
  },
  {
    id: "sandisk-extreme-1tb",
    name: "SanDisk 1TB Extreme Portable SSD",
    category: "PC Parts & Gear",
    store: "Amazon",
    sale: 198, usual: 300,
    signal: "strong",
    evidence: "$102 off a rugged portable drive — a practical gift for photographers and students.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "SanDisk 1TB Extreme portable SSD"
  },
  {
    id: "keychron-k2",
    name: "Keychron K2 75% Wireless Mechanical Keyboard",
    category: "PC Parts & Gear",
    store: "Amazon",
    sale: 51, usual: 80,
    signal: "strong",
    evidence: "36% off the keyboard that started the mechanical-keyboard boom — a great first board.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "TechSpot Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Keychron K2 75% wireless mechanical keyboard"
  },

  // ---- Home & kitchen ----
  {
    id: "instant-pot-duo-6",
    name: "Instant Pot Duo 6-Quart 7-in-1 Electric Pressure Cooker",
    category: "Home & Kitchen",
    store: "Amazon",
    sale: 59, usual: 109,
    signal: "new-low",
    evidence: "46% off the classic pressure cooker — the kitchen deal of the sale.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Instant Pot Duo 6 quart 7-in-1 pressure cooker"
  },
  {
    id: "dyson-airwrap-id",
    name: "Dyson Airwrap i.d. Multi-Styler",
    category: "Home & Kitchen",
    store: "Amazon",
    sale: 499, usual: 710,
    signal: "strong",
    evidence: "$211 off Dyson's most-wanted styler — the biggest beauty saving in this list.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Dyson Airwrap i.d. multi-styler"
  },
  {
    id: "shark-flexstyle",
    name: "Shark FlexStyle Air Multi-Styler & Hair Drying System",
    category: "Home & Kitchen",
    store: "Amazon",
    sale: 199, usual: 350,
    signal: "new-low",
    evidence: "43% off the Airwrap rival — same idea, $300 less than Dyson's sale price.",
    terms: "Black Friday Week, ends 30 Nov.",
    source: "Redmond Pie Black Friday roundup",
    checked: "27 Nov 2026",
    q: "Shark FlexStyle air multi-styler"
  },

  // ---- Streaming ----
  {
    id: "apple-tv-plus",
    name: "Apple TV — 6 months at half price",
    category: "Streaming",
    store: "Apple",
    sale: 6.99, usual: 14.99, unit: "per month",
    signal: "strong",
    evidence: "53% off for six months — Apple's best streaming offer of the year, back for Black Friday.",
    terms: "New and eligible returning subscribers. Sign up by 30 Nov; $14.99/mo after 6 months.",
    source: "IGN via SoapCentral streaming roundup",
    checked: "27 Nov 2026",
    url: "https://tv.apple.com/"
  },
  {
    id: "paramount-plus-premium",
    name: "Paramount+ Premium — 2 months for $2.99/mo",
    category: "Streaming",
    store: "Paramount+",
    sale: 2.99, usual: 13.99, unit: "per month",
    signal: "new-low",
    evidence: "79% off the ad-free Premium tier — the steepest percentage cut of any streaming deal here.",
    terms: "New and eligible returning subscribers. Ends 30 Nov; $13.99/mo after 2 months.",
    source: "The Guardian via SoapCentral streaming roundup",
    checked: "27 Nov 2026",
    url: "https://www.paramountplus.com/"
  },
  {
    id: "disney-hulu-bundle",
    name: "Disney+ & Hulu bundle (with ads) — 12 months at $4.99/mo",
    category: "Streaming",
    store: "Disney+",
    sale: 4.99, usual: 12.99, unit: "per month",
    signal: "strong",
    evidence: "62% off for a full year — two full libraries for the price of one coffee a month.",
    terms: "New and eligible returning subscribers. Ends 30 Nov at 11:59pm PT; $12.99/mo after 12 months.",
    source: "Deadline via SoapCentral streaming roundup",
    checked: "27 Nov 2026",
    url: "https://www.disneyplus.com/"
  },
  {
    id: "hbo-max-basic",
    name: "HBO Max Basic with Ads — 12 months at $5.49/mo",
    category: "Streaming",
    store: "HBO Max",
    sale: 5.49, usual: 10.99, unit: "per month",
    signal: "strong",
    evidence: "Half price for a full year — the cheapest HBO Max has been all year.",
    terms: "New and eligible returning subscribers. Ends 30 Nov; $10.99/mo after 12 months.",
    source: "Variety via SoapCentral streaming roundup",
    checked: "27 Nov 2026",
    url: "https://www.max.com/"
  },
  {
    id: "peacock-select",
    name: "Peacock Select — 3 months at $2.99/mo",
    category: "Streaming",
    store: "Peacock",
    sale: 2.99, usual: 8.99, unit: "per month",
    signal: "strong",
    evidence: "67% off for three months — the cheapest way to catch the holiday sports and movie lineup.",
    terms: "New subscribers. Ends 30 Nov; $8.99/mo after 3 months.",
    source: "The Guardian via SoapCentral streaming roundup",
    checked: "27 Nov 2026",
    url: "https://www.peacocktv.com/"
  }
);

// Store link builders. Each deal links to its store's own search for the
// exact product (or to the service's sign-up page for streaming). Nothing
// here is fetched by the site — these are plain <a href> links.
export const STORE_LINKS = {
  "Amazon": (q) => "https://www.amazon.com/s?k=" + encodeURIComponent(q),
  "Best Buy": (q) => "https://www.bestbuy.com/site/searchpage.jsp?st=" + encodeURIComponent(q),
  "Dell": (q) => "https://www.dell.com/en-us/search?q=" + encodeURIComponent(q)
};

export function storeUrl(deal) {
  if (deal.url) return deal.url;
  const build = STORE_LINKS[deal.store];
  return build ? build(deal.q || deal.name) : "#";
}

export const SIGNAL_LABELS = {
  "new-low": "New low",
  "strong": "Strong price",
  "routine": "Routine saving"
};
