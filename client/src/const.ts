export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const WHATSAPP_MESSAGE =
  "Olá, olhei o site de vocês e gostaria de mais informações.";

export const WHATSAPP_LINK =
  "https://wa.me/5551981935442?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
