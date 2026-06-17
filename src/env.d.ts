// Custom types declarations
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Directus base URL, e.g. https://cms.hasibu.africa */
  readonly DIRECTUS_URL: string;
  /** Static read token for build-time content fetch */
  readonly DIRECTUS_TOKEN: string;
  /** Hasibu blog API base URL */
  readonly HASIBU_API_URL: string;
  /** Hasibu blog API key, if required */
  readonly HASIBU_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
