import {
    createDirectus,
    rest,
    staticToken,
    readItems,
    readItem,
    readSingleton,
} from "@directus/sdk";

/**
 * Directus collection schema.
 * Extend as you model content in the Directus admin.
 * Field names here must match collection field names exactly.
 */
export interface Schema {
    site_settings: SiteSettings; // singleton
    pricing_settings: PricingSettings; // singleton
    pages: Page[];
    product_modules: ProductModule[];
    solutions: Solution[];
    countries: Country[];
    integrations: Integration[];
    testimonials: Testimonial[];
    pricing_tiers: PricingTier[];
    plan_features: PlanFeature[];
}

export interface SiteSettings {
    site_name: string;
    default_meta_title: string;
    default_meta_description: string;
}

// Pricing-wide content that is not per-tier (footnote, badges). Singleton.
export interface PricingSettings {
    // Footnote facts under the pricing cards, rendered dot-separated.
    // JSON/list field (repeater or Tags interface) in Directus.
    notes: string[] | null;
}

export interface Page {
    id: string;
    status: "published" | "draft" | "archived";
    slug: string;
    title: string;
    meta_description: string | null;
    blocks: unknown[] | null;
}

export interface ProductModule {
    id: string;
    status: "published" | "draft" | "archived";
    slug: string; // pos, inventory, accounting, trade, ...
    name: string;
    problem: string | null;
    features: string[] | null;
    outcome: string | null;
    screenshot: string | null; // Directus file id
}

export interface Solution {
    id: string;
    status: "published" | "draft" | "archived";
    axis: "industry" | "role";
    slug: string;
    name: string;
    summary: string | null;
}

export interface Country {
    id: string;
    status: "published" | "draft" | "archived";
    code: string; // ke, rw, cd
    name: string;
    currency: string; // KES, RWF, CDF
    default_language: string; // en, fr, sw, rw
}

export interface Integration {
    id: string;
    status: "published" | "draft" | "archived";
    slug: string;
    name: string;
    category: string | null;
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    company: string | null;
    country: string | null;
}

export interface PricingFeature {
    label: string;
    included: boolean;
}

export interface PricingTier {
    id: string;
    status: "published" | "draft" | "archived";
    sort: number;
    name: string;
    blurb: string | null;
    // Per-month figure shown for each billing cadence (e.g. "KES 2,000").
    price_monthly: string;
    price_quarterly: string;
    price_annual: string;
    // Small caption under the price (e.g. "Billed quarterly (KES 5,400/qtr)").
    billed_monthly: string;
    billed_quarterly: string;
    billed_annual: string;
    limits: string | null; // e.g. "3 users · 1 shop"
    popular: boolean;
    cta_label: string;
    cta_href: string;
    cta_style: "outline" | "solid" | "dark";
    features: PricingFeature[] | null;
}

// One row of the plan comparison table (§3). Cell values are plain strings:
// "✓" renders a check, "–"/"" a dash, anything else the literal text
// ("Add-on", "Limited", "+KES 500/mo", ...).
export interface PlanFeature {
    id: string;
    status: "published" | "draft" | "archived";
    sort: number;
    group: string; // section header, e.g. "Sales & point of sale"
    label: string; // row label, e.g. "Sale quotes"
    starter: string;
    growth: string;
    enterprise: string;
}

const url = import.meta.env.DIRECTUS_URL ?? "";
const token = import.meta.env.DIRECTUS_TOKEN;

if (!url) {
    // Don't hard-throw: SSG pages catch read failures and fall back to seed data,
    // so the site still builds before the CMS is wired up.
    console.warn(
        "[directus] DIRECTUS_URL is not set; CMS reads will fail and pages will use fallback data.",
    );
}

/** Typed Directus client. Used at build time for SSG. */
const base = url || "http://localhost:8055";
export const directus = token
    ? createDirectus<Schema>(base).with(staticToken(token)).with(rest())
    : createDirectus<Schema>(base).with(rest());

export { readItems, readItem, readSingleton };

/** Full URL for a Directus file/asset id. */
export function assetUrl(fileId: string | null | undefined): string | null {
    if (!fileId) return null;
    return `${url}/assets/${fileId}`;
}
