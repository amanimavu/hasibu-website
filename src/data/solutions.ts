// Solutions data: two axes (industry, role), each templated to /solutions/[slug].
// Points reuse real Hasibu modules and link to their product pages.

export interface SolutionPoint {
    title: string;
    desc: string;
    icon: string;
    href: string;
}

export interface Solution {
    slug: string;
    axis: "industry" | "role";
    name: string;
    icon: string;
    tagline: string;
    intro: string;
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
        points: [
            P.pos("Fast checkout with barcode scanning and mobile money."),
            P.inventory("Real-time stock with reorder alerts across your shop."),
            P.money("M-Pesa, Airtel, MTN and card at the till."),
            P.reports("See sales and margins by day, product or staff."),
        ],
    },
    {
        slug: "restaurant-cafe", axis: "industry", name: "Restaurant & Café", icon: "hugeicons:restaurant-01",
        tagline: "For cafes, bars and restaurants",
        intro: "Open tabs, run the floor and the kitchen, and settle bills the way your guests pay.",
        points: [
            P.tabs("Open tabs, move tables, and split or merge bills."),
            P.pos("Route orders to the right kitchen and receipt printers."),
            P.inventory("Track ingredients and cut waste with expiry rules."),
            P.money("Take M-Pesa, Airtel, MTN and card at the table."),
        ],
    },
    {
        slug: "wholesale-distribution", axis: "industry", name: "Wholesale & Distribution", icon: "hugeicons:distribution",
        tagline: "For wholesalers and distributors",
        intro: "Supply the retailers you serve, move stock between depots, and keep the books straight.",
        points: [
            P.supplier("Manage your retailers, price lists and incoming orders."),
            P.trade("Connect to the retailers who stock your products."),
            P.multi("Route orders from the right warehouse or depot."),
            P.accounting("Post sales and cost of goods straight to the ledger."),
        ],
    },
    {
        slug: "manufacturing", axis: "industry", name: "Manufacturing", icon: "hugeicons:factory",
        tagline: "For makers and producers",
        intro: "Build finished goods from raw inputs, value your stock correctly, and sell to the trade.",
        points: [
            P.production("Consume raw materials and build finished goods."),
            P.inventory("Track raw, work-in-progress and finished stock."),
            P.accounting("Value stock by WAC, FIFO or last cost."),
            P.trade("Sell to distributors and retailers on the network."),
        ],
    },
    {
        slug: "services", axis: "industry", name: "Services", icon: "hugeicons:user-settings-01",
        tagline: "For salons and service businesses",
        intro: "Book the work, ring up the sale, and keep customer and money records in one place.",
        points: [
            { title: "Appointments", desc: "Book services and pick add-ons at check-out.", icon: "hugeicons:calendar-03", href: "/product" },
            P.pos("Charge for services and products on one screen."),
            P.accounting("Invoice customers and track what they owe."),
            P.reports("See revenue by service, staff and customer."),
        ],
    },
    {
        slug: "supermarket", axis: "industry", name: "Supermarket", icon: "hugeicons:shopping-basket-01",
        tagline: "For supermarkets and minimarts",
        intro: "Run busy lanes, keep shelves stocked, and manage several branches from one business.",
        points: [
            P.pos("High-volume checkout with mobile money and card."),
            P.batch("Move the right stock first with expiry tracking."),
            P.multi("Manage stock and prices across every branch."),
            P.reports("Track sales, shrinkage and margins per store."),
        ],
    },
    {
        slug: "pharmacy", axis: "industry", name: "Pharmacy", icon: "hugeicons:medicine-01",
        tagline: "For pharmacies and chemists",
        intro: "Sell safely with batch and expiry control, and stay compliant as you trade.",
        points: [
            P.batch("Track batches and expiry to dispense safely."),
            P.pos("Quick checkout with mobile money and card."),
            P.vat("Fiscalize to KRA eTIMS as you sell."),
            P.accounting("Keep clean books with automatic cost of goods."),
        ],
    },
];

export const roles: Solution[] = [
    {
        slug: "business-owner", axis: "role", name: "Business owners", icon: "hugeicons:user-star-01",
        tagline: "For owners and directors",
        intro: "See the whole business at a glance and run every branch from one place.",
        points: [
            P.reports("Live dashboards for sales, stock and finance."),
            P.multi("Read each branch or the whole business rolled up."),
            P.accounting("Books that close themselves as you trade."),
            P.money("Every payment method your customers use."),
        ],
    },
    {
        slug: "cashier", axis: "role", name: "Cashiers", icon: "hugeicons:cashier",
        tagline: "For the people at the till",
        intro: "Ring up sales fast, take any payment, and keep the queue moving.",
        points: [
            P.pos("Blazing-fast checkout built for busy counters."),
            P.money("M-Pesa, Airtel, MTN, card and cash on one screen."),
            P.served("Post sales on behalf of staff when permitted."),
            P.tabs("Open tabs and split bills for hospitality."),
        ],
    },
    {
        slug: "accountant", axis: "role", name: "Accountants", icon: "hugeicons:calculator",
        tagline: "For finance teams",
        intro: "Review numbers instead of rebuilding them, with a ledger that posts itself.",
        points: [
            P.accounting("Double-entry general ledger and chart of accounts."),
            P.vat("VAT tracking and KRA eTIMS fiscalization."),
            P.reports("Financial statements and branded exports."),
            { title: "Bank reconciliation", desc: "Match statements to recorded transactions.", icon: "hugeicons:bank", href: "/product/accounting" },
        ],
    },
    {
        slug: "distributor", axis: "role", name: "Distributors", icon: "hugeicons:delivery-truck-01",
        tagline: "For distribution businesses",
        intro: "Serve every retailer you supply and keep stock and books in step.",
        points: [
            P.supplier("Manage retailers, price lists and orders in one portal."),
            P.trade("Connect to the retailers who stock your goods."),
            P.multi("Fulfil from the right depot, branch by branch."),
            P.inventory("Keep on-hand honest as stock moves out."),
        ],
    },
];

export const allSolutions: Solution[] = [...industries, ...roles];
