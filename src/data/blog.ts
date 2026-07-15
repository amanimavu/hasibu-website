// Blog data. Posts come from the Hasibu platform API (src/lib/hasibu.ts). Until
// that API is live, these seed posts are the fallback so the blog + post pages
// build and render. Topics are grounded in real Hasibu capabilities.
import { getPosts, getPost, type BlogPost } from "../lib/hasibu";

export type { BlogPost };

export const seedPosts: BlogPost[] = [
    {
        slug: "lipa-na-mpesa-at-the-till",
        category: "Payments",
        title: "Lipa Na M-Pesa at the till, end to end",
        description: "",
        excerpt:
            "How an STK push confirms against the sale through Daraja before the receipt prints, with no manual matching afterwards.",
        body: `<p>When a cashier rings up a sale and picks M-Pesa, Hasibu raises a Lipa Na M-Pesa STK push straight to the customer's phone. The customer approves with their PIN, and Safaricom's Daraja API confirms the payment against that exact sale.</p><p>Because the confirmation is tied to the sale, there is no reading out till numbers, no screenshots, and no matching payments to receipts at the end of the day. The receipt only prints once the money is in.</p><p>The sale then posts to your books and draws down stock in the same moment, so payments, inventory and accounting stay in step without anyone re-keying a thing.</p>`,
        coverImage: null,
        author: "Hasibu Team",
        publishedAt: "2026-06-24",
        tags: ["M-Pesa", "POS", "Daraja"],
    },
    {
        slug: "why-your-stock-can-never-go-negative",
        category: "Inventory",
        title: "Why your stock can never go negative",
        description: "",
        excerpt:
            "The invariant behind always-accurate stock, and what it means for the way you sell and reconcile.",
        body: `<p>Every movement in Hasibu, a sale, a purchase, a transfer, an adjustment, is a ledger entry against a location's stock. Nothing changes on-hand except through one of these entries, so the count is always the sum of what actually happened.</p><p>That single rule is what keeps stock honest. You can see what is committed against orders and what is truly available, so you promise only what you can deliver and reconcile against reality, not a guess.</p>`,
        coverImage: null,
        author: "Hasibu Team",
        publishedAt: "2026-06-18",
        tags: ["Inventory", "Stock"],
    },
    {
        slug: "kra-etims-handled-as-you-trade",
        category: "Compliance",
        title: "KRA eTIMS, handled as you trade",
        description: "",
        excerpt:
            "Fiscalize sales and returns automatically, so compliance is a side effect of ringing up a sale.",
        body: `<p>eTIMS fiscalization runs on every sale and return as it happens, through our DigiTax partnership. The invoice registers with KRA in the background, so your compliance records build themselves as you trade.</p><p>Filing season stops being a scramble: the numbers on your VAT summary come straight from the same ledger that recorded the sales, and there is a clean trail behind every figure for audits and returns.</p>`,
        coverImage: null,
        author: "Hasibu Team",
        publishedAt: "2026-06-11",
        tags: ["eTIMS", "KRA", "VAT"],
    },
    {
        slug: "running-several-branches-from-one-business",
        category: "Multi-location",
        title: "Running several branches from one business",
        description: "",
        excerpt:
            "Read each branch on its own or the whole business rolled up, from the same numbers.",
        body: `<p>Hasibu multi-location is one business with many locations, not many businesses. Each shop or store holds its own stock, and you move goods between them with transfers that keep on-hand accurate everywhere.</p><p>From one login you can read a single branch or the whole group rolled up, and compare locations side by side. Sales route to the shop that made them, so your reports and books stay right per location and in total.</p>`,
        coverImage: null,
        author: "Hasibu Team",
        publishedAt: "2026-06-04",
        tags: ["Multi-location", "Reports"],
    },
    {
        slug: "payday-without-the-headache",
        category: "Payroll",
        title: "Payday without the headache",
        description: "",
        excerpt:
            "Salary runs and payslips with PAYE, NHIF and NSSF, plus commissions, advances and loans.",
        body: `<p>Run monthly or weekly salaries for the whole team on one screen. Transport, housing, PAYE, NHIF and NSSF are applied on every run, so statutory figures stay right and payslips generate automatically.</p><p>Commissions, salary advances and employee loans are tracked alongside payroll, and the net pay posts to your books, so payday is a few clicks instead of a spreadsheet marathon.</p>`,
        coverImage: null,
        author: "Hasibu Team",
        publishedAt: "2026-05-28",
        tags: ["Payroll", "PAYE"],
    },
    {
        slug: "wac-fifo-or-last-cost",
        category: "Inventory",
        title: "WAC, FIFO or last cost: pick your method",
        description: "",
        excerpt:
            "Choose how stock is valued per business, and let every sale post the right cost of goods for you.",
        body: `<p>Value your stock the way your business runs, by weighted average, FIFO or last cost. Whichever you pick, Hasibu carries that cost through to every sale automatically.</p><p>That means margins and stock value stay correct on their own, with no month-end guesswork, and you can see exactly what each line earns you.</p>`,
        coverImage: null,
        author: "Hasibu Team",
        publishedAt: "2026-05-21",
        tags: ["Inventory", "Accounting"],
    },
];

/** All posts: live API when reachable, else the seed. */
export async function loadPosts(): Promise<BlogPost[]> {
    try {
        const posts = await getPosts();
        if (posts.length) return posts;
    } catch {
        // API not wired/reachable yet
    }
    return seedPosts;
}

/** One post by slug: live API when reachable, else the seed. */
export async function loadPost(slug: string): Promise<BlogPost | null> {
    try {
        const post = await getPost(slug);
        if (post) return post;
    } catch {
        // fall through to seed
    }
    return seedPosts.find((p) => p.slug === slug) ?? null;
}
