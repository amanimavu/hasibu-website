// Canonical product-module list. Single source of truth for the Product mega
// menu (Header), the Product overview hub (/product) and the footer. Edit a
// module here and it updates everywhere. Content grounded in the real Hasibu app.

export interface ModuleLink {
    label: string;
    href: string;
    icon: string;
    desc: string;
}

export interface ModuleGroup {
    title: string;
    color: string;
    icon: string;
    items: ModuleLink[];
}

export const moduleGroups: ModuleGroup[] = [
    {
        title: "Core Operations",
        color: "text-green-600",
        icon: "hugeicons:store-01",
        items: [
            {
                label: "Point of Sale (POS)",
                href: "/product/pos",
                icon: "hugeicons:shopping-cart-01",
                desc: "Fast retail and hospitality checkout with tabs, tables and mobile money.",
            },
            {
                label: "Inventory & Stock",
                href: "/product/inventory",
                icon: "hugeicons:package",
                desc: "Real-time stock ledger with batch, expiry, variants and transfers.",
            },
            {
                label: "Multi-Location",
                href: "/product/multi-location",
                icon: "hugeicons:location-01",
                desc: "Run every branch from one business, with stock and prices in step.",
            },
        ],
    },
    {
        title: "Finance & Commerce",
        color: "text-orange-500",
        icon: "hugeicons:analytics-up",
        items: [
            {
                label: "Accounting & GL",
                href: "/product/accounting",
                icon: "hugeicons:invoice-01",
                desc: "Double-entry ledger, VAT and eTIMS, with cost of goods posted for you.",
            },
            {
                label: "eCommerce / Storefront",
                href: "/product/online-store",
                icon: "hugeicons:hand-bag-01",
                desc: "Sell online from the same catalog and stock as your counter.",
            },
            {
                label: "Payroll",
                href: "/product/payroll",
                icon: "hugeicons:wallet-01",
                desc: "Salary runs, payslips and statutory deductions with local tax rules.",
            },
        ],
    },
    {
        title: "Insights",
        color: "text-sky-600",
        icon: "hugeicons:analytics-01",
        items: [
            {
                label: "Reports & Analytics",
                href: "/product/reports",
                icon: "hugeicons:analytics-01",
                desc: "Live dashboards and branded exports across every branch.",
            },
        ],
    },
    {
        title: "B2B & Supply",
        color: "text-blue-600",
        icon: "hugeicons:delivery-truck-01",
        items: [
            {
                label: "Hasibu Trade Network",
                href: "/product/trade",
                icon: "hugeicons:distribution",
                desc: "A B2B network linking distributors and manufacturers to retailers.",
            },
            {
                label: "Supplier Portal",
                href: "/product/supplier-portal",
                icon: "hugeicons:delivery-box-01",
                desc: "Manage retailers, price lists and restock orders in one portal.",
            },
        ],
    },
    {
        title: "Productivity",
        color: "text-purple-600",
        icon: "hugeicons:flash",
        items: [
            {
                label: "Integrations",
                href: "/product/integrations",
                icon: "hugeicons:plug-01",
                desc: "M-Pesa, Airtel, MTN, Pesapal, card and KRA eTIMS, wired into Hasibu.",
            },
        ],
    },
];

// Flat list of every module, in nav order.
export const modules: ModuleLink[] = moduleGroups.flatMap((g) => g.items);
