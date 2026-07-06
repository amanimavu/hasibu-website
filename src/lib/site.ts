// Central Hasibu app URLs. Every "Start Free Trial" / login / signup link should
// come from here so the domain lives in one place. Override with APP_URL in .env.
export const APP_URL =
    import.meta.env.APP_URL ?? "https://business.hasibu.africa";
export const SIGNUP_URL = `${APP_URL}/sign-up`;
export const LOGIN_URL = `${APP_URL}/sign-in`;
