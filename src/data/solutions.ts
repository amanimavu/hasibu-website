// Solutions data: two axes (industry, role), each templated to /solutions/[slug].
// Points reuse real Hasibu modules and link to their product pages.

export interface SolutionPoint {
    title: string;
    desc: string;
    icon: string;
    href: string;
}

// Small app-style card floated over the hero photo. Wording/icon should suit
// the scene (retail till, warehouse, etc.).
export interface SolutionCallout {
    icon: string;
    line1: string;
    line2: string;
    tone?: "green" | "blue" | "amber";
}

export interface Solution {
    slug: string;
    axis: "industry" | "role";
    name: string;
    icon: string;
    tagline: string;
    intro: string;
    callout?: SolutionCallout;
    points: SolutionPoint[];
}

const P = {
    pos: (desc: string): SolutionPoint => ({ title: "Point of Sale", desc, icon: "hugeicons:shopping-cart-01", href: "/product/pos" }),
    tabs: (desc: string): SolutionPoint => ({ title: "Tabs and tables", desc, icon: "hugeicons:dining-table", href: "/product/pos" }),
    inventory: (desc: string): SolutionPoint => ({ title: "Inventory", desc, icon: "hugeicons:package", href: "/product/inventory" }),
    batch: (desc: string): SolutionPoint => ({ title: "Batch and expiry", desc, icon: "hugeicons:calendar-03", href: "/product/inventory" }),
    production: (desc: string): SolutionPoint => ({ title: "Production", desc, icon: "hugeicons:package-process", href: "/product/inventory" }),
    accounting: (desc: string): SolutionPoint => ({ title: "Accounting", desc, icon: "hugeicons:book-open-01", href: "/product/accounting" }),
    vat: (desc: string): SolutionPoint => ({ title: "VAT and eTIMS", desc, icon: "hugeicons:shield-energy", href: "/product/accounting" }),
    multi: (desc: string): SolutionPoint => ({ title: "Multi-location", desc, icon: "hugeicons:store-01", href: "/product/multi-location" }),
    trade: (desc: string): SolutionPoint => ({ title: "Hasibu Trade", desc, icon: "hugeicons:distribution", href: "/product/trade" }),
    supplier: (desc: string): SolutionPoint => ({ title: "Supplier Portal", desc, icon: "hugeicons:user-group", href: "/product/supplier-portal" }),
    reports: (desc: string): SolutionPoint => ({ title: "Reports", desc, icon: "hugeicons:dashboard-square-02", href: "/product/reports" }),
    money: (desc: string): SolutionPoint => ({ title: "Mobile money", desc, icon: "hugeicons:smart-phone-01", href: "/integrations" }),
    served: (desc: string): SolutionPoint => ({ title: "Served-by", desc, icon: "hugeicons:user-multiple", href: "/product/pos" }),
};

export const industries: Solution[] = [
    {
        slug: "retail", axis: "industry", name: "Retail", icon: "hugeicons:store-01",
        tagline: "For shops and boutiques",
        intro: "Run your counter, stock and books from one screen, and take every payment your customers use.",
        callout: { icon: "material-symbols:check-circle", line1: "Payment received", line2: "M-Pesa · paid", tone: "green" },
        points: [
            P.pos("Ring up sales in seconds with barcode scanning, quick keys and held orders. Every sale updates stock and your books the moment it is paid, so nothing is entered twice."),
            P.inventory("See exactly what is on the shelf in real time, with reorder alerts before you run out. Receive stock, adjust counts and track every movement, so stockouts and shrinkage stop eating your margin."),
            P.money("Accept M-Pesa, Airtel Money, MTN MoMo and card at the till, on the same checkout. Payments confirm against the sale on their own, so nothing sits unmatched at the end of the day."),
            P.reports("Know your numbers without a spreadsheet: sales, margins and best sellers by day, product, category or staff member. Spot what is working and restock or reprice before it costs you."),
        ],
    },
    {
        slug: "restaurant-cafe", axis: "industry", name: "Restaurant & Café", icon: "hugeicons:restaurant-01",
        tagline: "For cafes, bars and restaurants",
        intro: "Open tabs, run the floor and the kitchen, and settle bills the way your guests pay.",
        callout: { icon: "material-symbols:room-service-outline", line1: "Order sent to kitchen", line2: "Table 4 · 3 items", tone: "amber" },
        points: [
            P.tabs("Open a tab per table, add rounds as they come, and move guests between tables without losing the order. Split the bill by guest or item, or merge tabs, so groups settle exactly how they want to."),
            P.pos("Fire each order to the right kitchen or bar printer the moment it is taken, so the line and the counter stay in sync. Waiters send from the floor and the kitchen sees it instantly, cutting missed and mixed-up orders."),
            P.inventory("Track ingredients down to the recipe, so every plate sold draws down what it actually used. Expiry rules flag stock before it turns, helping you cut waste and see your real food cost per dish."),
            P.money("Take M-Pesa, Airtel Money, MTN MoMo and card right at the table, on the same bill. Payments confirm against the tab on their own, so the floor turns faster and nothing goes uncollected at close."),
        ],
    },
    {
        slug: "wholesale-distribution", axis: "industry", name: "Wholesale & Distribution", icon: "hugeicons:distribution",
        callout: { icon: "material-symbols:inventory-2-outline", line1: "Stock received", line2: "240 cartons logged", tone: "blue" },
        tagline: "For wholesalers and distributors",
        intro: "Supply the retailers you serve, move stock between depots, and keep the books straight.",
        points: [
            P.supplier("Give the retailers you serve their own portal to place orders, see your price lists and track what they owe. Orders land straight in Hasibu, so you stop rekeying WhatsApp and phone requests by hand."),
            P.trade("Connect to the shops that stock your products and sell to them business to business, at the prices you set per customer. Every order flows into the same stock and books, so trade and retail never drift apart."),
            P.multi("Hold stock across warehouses and depots and fulfil each order from the right one. Move goods between locations with transfers that keep on-hand counts accurate everywhere, not just at head office."),
            P.accounting("Post every sale and its cost of goods to the ledger as it happens, so margins are right without month-end cleanup. VAT and eTIMS are handled on the same entries, keeping you compliant as you scale."),
        ],
    },
    {
        slug: "manufacturing", axis: "industry", name: "Manufacturing", icon: "hugeicons:factory",
        tagline: "For makers and producers",
        intro: "Build finished goods from raw inputs, value your stock correctly, and sell to the trade.",
        points: [
            P.production("Build finished goods from a recipe of raw inputs, and each production run draws down the exact materials it consumed. Know what it costs to make a unit and how much you can build from the stock on hand."),
            P.inventory("Track stock across every stage, from raw materials to work in progress to finished goods, in one place. See what is tied up on the floor and what is ready to sell, so you plan runs around real numbers."),
            P.accounting("Value your stock the way your business runs, by weighted average, FIFO or last cost, and carry that cost through to every sale. Margins and stock value stay correct on their own, with no month-end guesswork."),
            P.trade("Sell your finished goods to the distributors and retailers on the Hasibu network, at the prices you set per customer. Their orders flow straight into the same stock and books, so production and sales stay in step."),
        ],
    },
    {
        slug: "services", axis: "industry", name: "Services", icon: "hugeicons:user-settings-01",
        tagline: "For salons and service businesses",
        intro: "Book the work, ring up the sale, and keep customer and money records in one place.",
        points: [
            { title: "Appointments", desc: "Book clients into the day and attach the services and add-ons they want up front. The booking carries through to checkout, so the front desk charges exactly what was done without re-entering anything.", icon: "hugeicons:calendar-03", href: "/product" },
            P.pos("Ring up services and retail products on the same screen, and split the bill across mobile money or card. The moment it is paid, the sale posts to your books and any products used come off stock."),
            P.accounting("Invoice customers, take deposits and track what each one still owes, all in one place. Payments reconcile against the invoice automatically, so you always know who has settled and who has not."),
            P.reports("See revenue broken down by service, staff member and customer, so you know your busiest chairs and best sellers. Spot quiet hours and repeat clients, and set commissions or reprice with real numbers behind you."),
        ],
    },
    {
        slug: "supermarket", axis: "industry", name: "Supermarket", icon: "hugeicons:shopping-basket-01",
        tagline: "For supermarkets and minimarts",
        intro: "Run busy lanes, keep shelves stocked, and manage several branches from one business.",
        points: [
            P.pos("Keep busy lanes moving with barcode scanning and quick keys, and take M-Pesa, Airtel, MTN or card at every till. Each sale updates stock and your books instantly, so several cashiers ring up at once without your counts drifting."),
            P.batch("Track batches and expiry across fast-moving shelves, and sell nearest-expiry stock first so fresh goods do not lapse. Get alerts before items expire, so you discount or pull them in time instead of writing off losses."),
            P.multi("Run every branch as one business, with stock and prices managed centrally and transfers between stores. See what each location holds and move goods to where they sell, without juggling separate systems."),
            P.reports("See sales, margins and shrinkage per store, per category and per cashier, so you spot the busy lanes and the leaks. Compare branches side by side and restock or reprice on real numbers, not gut feel."),
        ],
    },
    {
        slug: "pharmacy", axis: "industry", name: "Pharmacy", icon: "hugeicons:medicine-01",
        tagline: "For pharmacies and chemists",
        intro: "Sell safely with batch and expiry control, and stay compliant as you trade.",
        points: [
            P.batch("Track every drug by batch and expiry date, and dispense the nearest-expiry stock first so nothing lapses on the shelf. Get alerts before items expire, so you return or clear them in time instead of writing off losses."),
            P.pos("Serve customers fast with mobile money or card at the counter, on one screen. Each sale draws down the exact batch dispensed, so your stock stays accurate down to the strip you handed over."),
            P.vat("Fiscalize every sale to KRA eTIMS as it happens, with the right VAT applied automatically. Your compliance records build themselves as you trade, so audits and returns stop being a scramble."),
            P.accounting("Post sales and cost of goods to the ledger on every transaction, so margins and stock value stay correct without month-end fixes. See exactly what each line earns you and where the money goes."),
        ],
    },
];

export const roles: Solution[] = [
    {
        slug: "business-owner", axis: "role", name: "Business owners", icon: "hugeicons:user-star-01",
        tagline: "For owners and directors",
        intro: "See the whole business at a glance and run every branch from one place.",
        points: [
            P.reports("Open one live dashboard for sales, stock and cash, on your phone or laptop wherever you are. See today against last week and spot a slow branch or a runaway cost early, without waiting for anyone to send a report."),
            P.multi("Keep every location under your eye from one login: read a single shop or the whole group rolled up, and compare them side by side to see who is performing. When one store runs low, move stock to where it sells, so you stay in control of the group without having to be on site."),
            P.accounting("Your books build themselves as the business trades, with sales, costs and VAT posted automatically. Month-end stops being a scramble, so the numbers you make decisions on are always current."),
            P.money("Take every payment your customers use, M-Pesa, Airtel, MTN and card, across all your branches. It all reconciles into one set of books, so you see the true cash position of the whole business at a glance."),
        ],
    },
    {
        slug: "cashier", axis: "role", name: "Cashiers", icon: "hugeicons:cashier",
        tagline: "For the people at the till",
        intro: "Ring up sales fast, take any payment, and keep the queue moving.",
        points: [
            P.pos("Ring up items fast with barcode scanning and quick keys, and hold an order to serve the next customer without losing it. The screen stays simple under pressure, so you keep the queue moving even on your busiest days."),
            P.money("Take M-Pesa, Airtel, MTN, card or cash from one screen, and mobile money confirms against the sale on its own. No more reading out till numbers or checking phones, so every payment lands right and the line keeps flowing."),
            P.served("Record who served each sale, so tips, commissions and performance track back to the right person. When allowed, post a sale on behalf of another staff member, keeping busy shifts moving without losing accountability."),
            P.tabs("Open a tab for a table, keep adding to it, and split or merge the bill however the group wants to pay. Hospitality service stays smooth, so you close each table cleanly without holding anyone up."),
        ],
    },
    {
        slug: "accountant", axis: "role", name: "Accountants", icon: "hugeicons:calculator",
        tagline: "For finance teams",
        intro: "Review numbers instead of rebuilding them, with a ledger that posts itself.",
        points: [
            P.accounting("Every sale, purchase and expense posts itself to a proper double-entry ledger against your chart of accounts, so you review entries instead of keying them. The trial balance is always live, which means less chasing and cleaner books to sign off."),
            P.vat("VAT is tracked on every transaction and sales fiscalize to KRA eTIMS as they happen, so your returns are built from real records, not month-end reconstruction. Filing season stops being a scramble and audits have a clean trail behind them."),
            P.reports("Pull the profit and loss, balance sheet and VAT summary in a click, and export branded statements ready for management or the taxman. The numbers come straight from the ledger, so what you present always ties back to source."),
            { title: "Bank reconciliation", desc: "Match your bank statement against recorded transactions and clear items as you go, so your cash position is one you can trust. Discrepancies surface early instead of piling up, making close faster and less painful.", icon: "hugeicons:bank", href: "/product/accounting" },
        ],
    },
    {
        slug: "distributor", axis: "role", name: "Distributors", icon: "hugeicons:delivery-truck-01",
        tagline: "For distribution businesses",
        intro: "Serve every retailer you supply and keep stock and books in step.",
        points: [
            P.supplier("Give every retailer you supply their own portal to place orders, see the price list you set for them, and track what they owe. Orders arrive straight in Hasibu, so you stop rekeying WhatsApp and phone requests and fewer get missed."),
            P.trade("Connect to the shops that stock your goods and sell to them business to business at your agreed prices. Their orders flow into the same stock and books, so the whole supply chain stays in step without double entry."),
            P.multi("Hold stock across your depots and fulfil each order from the location nearest the retailer, moving goods between depots with transfers. It is one business with many locations rolled up, so you dispatch from the right place without losing sight of the group."),
            P.inventory("Every dispatch draws stock down in real time, so on-hand stays honest as goods leave the depot. See what is committed against orders and what is truly available, so you promise only what you can actually deliver."),
        ],
    },
];

export const allSolutions: Solution[] = [...industries, ...roles];
