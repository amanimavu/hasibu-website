// Changelog data: shared by the list (/resources/changelog) and the detail
// page (/resources/changelog/[slug]).
//
// Placeholder entries grounded in real Hasibu features, but the dates and
// groupings are illustrative: confirm against actual release history before
// treating this as authoritative.

export interface Release {
    slug: string;
    date: string;
    tag: string;
    title: string;
    summary: string;
    body: string[];
}

// Indicator colour is coded by change type. One source of truth: tag -> colour
// (classes are literals so Tailwind keeps them). Scheme: green = added,
// blue = improved, amber = fixed, rose = security, slate = deprecated.
export const TAG_STYLE: Record<string, { dot: string; accent: string }> = {
    New: { dot: "bg-green-500", accent: "text-green-600" },
    "New module": { dot: "bg-green-500", accent: "text-green-600" },
    Improved: { dot: "bg-brand", accent: "text-brand" },
    Fixed: { dot: "bg-amber-500", accent: "text-amber-600" },
    Security: { dot: "bg-rose-500", accent: "text-rose-600" },
    Deprecated: { dot: "bg-slate-400", accent: "text-slate-500" },
};

export const styleFor = (tag: string) =>
    TAG_STYLE[tag] ?? { dot: "bg-slate-400", accent: "text-slate-500" };

export const releases: Release[] = [
    {
        slug: "audit-trail-and-access-logs",
        date: "June 2026",
        tag: "Security",
        title: "Audit trail and access logs",
        summary:
            "A system-wide audit trail now records changes across the platform, filterable by module, alongside access logs for sign-in, PIN unlock and sign-out events. Gated behind a dedicated permission for your security team.",
        body: [
            "Hasibu now keeps a system-wide audit trail of changes made across the platform. Every create, edit and delete is recorded with who did it and when, and the trail is filterable by module so you can narrow straight to the area you care about.",
            "Alongside it, access logs capture authentication events: sign-in, PIN unlock and sign-out. Together they give you a clear record of who touched what, useful for security reviews and for settling questions after the fact.",
            "Both are gated behind a dedicated permission, so only the people you choose, typically your security or finance lead, can read them.",
        ],
    },
    {
        slug: "payroll",
        date: "June 2026",
        tag: "New module",
        title: "Payroll",
        summary:
            "Run monthly or weekly salaries with payslips, statutory deductions for PAYE, NHIF and NSSF, plus commissions, salary advances and employee loans, all posted into the same books.",
        body: [
            "Payroll runs salaries on a monthly or weekly cycle and generates payslips for your team, all inside the same Hasibu business.",
            "Statutory deductions are built in for PAYE, NHIF and NSSF, and you can add commissions, salary advances and employee loans with repayments tracked over time.",
            "Every run posts into the same books as the rest of the platform, so payroll lands in your accounts without re-keying.",
        ],
    },
    {
        slug: "multi-location-simplified",
        date: "May 2026",
        tag: "Improved",
        title: "Multi-location, simplified",
        summary:
            "Every business now runs its branches as locations directly, so stock, prices and reports stay in step across the whole company without extra setup.",
        body: [
            "Running several branches is now simpler: each business manages its branches directly as locations, without an extra organisation layer in between.",
            "Stock, prices and reports stay in step across every branch, and you can read each location on its own or the whole business rolled up from the same numbers.",
        ],
    },
    {
        slug: "hasibu-trade-and-online-store",
        date: "Earlier",
        tag: "New",
        title: "Hasibu Trade and the online store",
        summary:
            "A B2B trade network with a supplier portal connects distributors to the retailers they supply, while a customer-facing online store sells from the same stock as your counter.",
        body: [
            "Hasibu Trade is a B2B network that connects distributors and manufacturers to the retailers who stock them, with a supplier portal for managing retailers, price lists and incoming orders.",
            "The online store puts your catalogue in front of customers and sells from the same stock as your counter, so what is sold out in store is sold out online.",
        ],
    },
];
