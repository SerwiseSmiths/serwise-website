/**
 * Environment configuration — mirrors the Serwise RN app pattern.
 *
 * Environments:
 *   local     → next dev  (.env.local)
 *   pre-prod  → staging deployment (.env.staging loaded via APP_ENV)
 *   production → next build/start (.env.production)
 *
 * All values are SERVER-SIDE ONLY (no NEXT_PUBLIC_ prefix).
 * Import this file only from:
 *   - src/app/api/**  (Next.js Route Handlers)
 *   - src/lib/**      (server utilities)
 * Never import from client components or page.tsx top-level.
 */

export type Environment = "local" | "pre-prod" | "production";

export const CURRENT_ENV: Environment =
  (process.env.APP_ENV as Environment) ?? "local";

export const IS_DEV = CURRENT_ENV !== "production";

// ─────────────────────────────────────────────────────────────────────────────
// Per-environment config (same structure as Serwise RN env.config.ts)
// ─────────────────────────────────────────────────────────────────────────────
const ENV_CONFIG: Record<
  Environment,
  {
    BACKEND_API_URL: string;
    STRAPI_API_URL: string;
    STRAPI_API_TOKEN: string;
    TRUECALLER_BUSINESS_CLIENT_ID: string;
    TRUECALLER_BUSINESS_CLIENT_SECRET: string;
  }
> = {
  local: {
    BACKEND_API_URL:
      process.env.BACKEND_API_URL ?? "http://localhost:4000/api/v2",
    STRAPI_API_URL:
      process.env.STRAPI_API_URL ?? "http://localhost:1337",
    STRAPI_API_TOKEN:
      process.env.STRAPI_API_TOKEN ?? "",
    TRUECALLER_BUSINESS_CLIENT_ID:
      process.env.TRUECALLER_BUSINESS_CLIENT_ID ?? "",
    TRUECALLER_BUSINESS_CLIENT_SECRET:
      process.env.TRUECALLER_BUSINESS_CLIENT_SECRET ?? "",
  },

  "pre-prod": {
    BACKEND_API_URL:
      process.env.BACKEND_API_URL ??
      "https://backend-8cel.onrender.com/api/v2",
    STRAPI_API_URL:
      process.env.STRAPI_API_URL ??
      "https://serwise-strapi-bdba.onrender.com",
    STRAPI_API_TOKEN:
      process.env.STRAPI_API_TOKEN ?? "",
    TRUECALLER_BUSINESS_CLIENT_ID:
      process.env.TRUECALLER_BUSINESS_CLIENT_ID ?? "",
    TRUECALLER_BUSINESS_CLIENT_SECRET:
      process.env.TRUECALLER_BUSINESS_CLIENT_SECRET ?? "",
  },

  production: {
    BACKEND_API_URL:
      process.env.BACKEND_API_URL ??
      "https://backend-8cel.onrender.com/api/v2",
    STRAPI_API_URL:
      process.env.STRAPI_API_URL ??
      "https://serwise-strapi-bdba.onrender.com",
    STRAPI_API_TOKEN:
      process.env.STRAPI_API_TOKEN ?? "",
    TRUECALLER_BUSINESS_CLIENT_ID:
      process.env.TRUECALLER_BUSINESS_CLIENT_ID ?? "",
    TRUECALLER_BUSINESS_CLIENT_SECRET:
      process.env.TRUECALLER_BUSINESS_CLIENT_SECRET ?? "",
  },
};

const activeConfig = ENV_CONFIG[CURRENT_ENV];

// ─────────────────────────────────────────────────────────────────────────────
// Named exports (import these throughout the app)
// ─────────────────────────────────────────────────────────────────────────────
export const BACKEND_API_URL = activeConfig.BACKEND_API_URL;
export const STRAPI_API_URL = activeConfig.STRAPI_API_URL;
export const STRAPI_API_TOKEN = activeConfig.STRAPI_API_TOKEN;
export const TRUECALLER_BUSINESS_CLIENT_ID =
  activeConfig.TRUECALLER_BUSINESS_CLIENT_ID;
export const TRUECALLER_BUSINESS_CLIENT_SECRET =
  activeConfig.TRUECALLER_BUSINESS_CLIENT_SECRET;

/** Label shown in UI during non-production builds */
export const ENV_LABEL = IS_DEV ? `serwise (${CURRENT_ENV})` : "serwise";
