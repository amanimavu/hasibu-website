/**
 * Hasibu blog API client.
 * Blogs come from the Hasibu platform API, NOT Directus.
 * Adjust field mapping in `normalizePost` once the real API shape is known.
 */

const base = import.meta.env.HASIBU_API_URL;
const apiKey = import.meta.env.HASIBU_API_KEY;

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    description: string;
    body: string; // HTML or markdown from the API
    coverImage: string | null;
    author: string | null;
    publishedAt: string; // ISO date
    category: string | null;
    tags: string[];
}

function headers(): HeadersInit {
    const h: Record<string, string> = { Accept: "application/json" };
    if (apiKey) h.Authorization = `Bearer ${apiKey}`;
    return h;
}

async function call<T>(path: string): Promise<T> {
    if (!base) {
        throw new Error(
            "HASIBU_API_URL is not set. Copy .env.example to .env and fill it in.",
        );
    }
    const res = await fetch(`${base}${path}`, { headers: headers() });
    if (!res.ok) {
        throw new Error(
            `Hasibu API ${path} failed: ${res.status} ${res.statusText}`,
        );
    }
    return (await res.json()) as T;
}

/** Map raw API record -> BlogPost. Tweak keys to match the real response. */
function normalizePost(raw: any): BlogPost {
    return {
        slug: raw.slug ?? String(raw.id),
        title: raw.title ?? "",
        description: raw?.description ?? "",
        excerpt: raw.excerpt ?? raw.summary ?? "",
        body: raw.body ?? raw.content ?? "",
        coverImage: raw.cover_image ?? raw.image ?? null,
        author: raw.author?.name ?? raw.author ?? null,
        publishedAt: raw.published_at ?? raw.created_at ?? "",
        category: raw.category ?? null,
        tags: raw.tags ?? [],
    };
}

export async function getPosts(): Promise<BlogPost[]> {
    const json = await call<{ data?: any[] } | any[]>("/blog/posts");
    const list = Array.isArray(json) ? json : (json.data ?? []);
    return list.map(normalizePost);
}

export async function getPost(slug: string): Promise<BlogPost | null> {
    try {
        const json = await call<{ data?: any } | any>(`/blog/posts/${slug}`);
        const raw = json && "data" in json ? json.data : json;
        return raw ? normalizePost(raw) : null;
    } catch {
        return null;
    }
}
