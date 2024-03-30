import { OAuth2 } from "backlog-js";
import { browser } from "wxt/browser";

const oauth2 = new OAuth2({
	clientId: import.meta.env.VITE_OAUTH2_CLIENT_ID,
	clientSecret: import.meta.env.VITE_OAUTH2_CLIENT_SECRET,
});

/** Oauth 2.0 で認可を実行する */
export const authorize = async (host: string) => {
	const stateValue = crypto.randomUUID();
	const redirectUri = browser.identity.getRedirectURL();

	const responseUrl = await browser.identity.launchWebAuthFlow({
		url: oauth2.getAuthorizationURL({
			host,
			redirectUri,
			state: stateValue,
		}),
		interactive: true,
	});

	const url = new URL(responseUrl);
	const code = url.searchParams.get("code");
	const state = url.searchParams.get("state");

	if (code == null || state !== stateValue) {
		throw new Error("Authorization failed");
	}

	const token = await oauth2.getAccessToken({
		code,
		host,
		redirectUri,
	});

	return token;
};
