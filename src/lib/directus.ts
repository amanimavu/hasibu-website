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
    pages: Page[];
    product_modules: ProductModule[];
    solutions: Solution[];
    countries: Country[];
    integrations: Integration[];
    testimonials: Testimonial[];
    pricing_tiers: PricingTier[];
}

export interface SiteSettings {
    site_name: string;
    default_meta_title: string;
    default_meta_description: string;
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
    price_monthly: string; // e.g. "$49"
    price_annual: string; // e.g. "$39"
    billed_monthly: string; // e.g. "Billed monthly"
    billed_annual: string; // e.g. "Billed annually"
    popular: boolean;
    cta_label: string;
    cta_href: string;
    cta_style: "outline" | "solid" | "dark";
    features: PricingFeature[] | null;
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
