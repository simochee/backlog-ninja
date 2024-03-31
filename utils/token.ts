import { OAuth2 } from "backlog-js";
import { browser } from "wxt/browser";
import { storage } from "wxt/storage";

type TokenStoreV1Value = Array<{
	host: string;
	authorization:
		| {
				apiKey: string;
		  }
		| {
				accessToken: string;
				refreshToken: string;
		  };
}>;

const tokenStore = storage.defineItem<TokenStoreV1Value>("local:tokenStore", {
	defaultValue: [],
});

const oauth2 = new OAuth2({
	clientId: import.meta.env.VITE_OAUTH2_CLIENT_ID,
	clientSecret: import.meta.env.VITE_OAUTH2_CLIENT_SECRET,
});

export const appendToken = async (host: string, apiKey: string | null) => {
	const value = await tokenStore.getValue();

	if (apiKey) {
		await tokenStore.setValue(
			value.concat({
				host,
				authorization: {
					apiKey,
				},
			}),
		);

		return;
	}

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

	const { access_token, refresh_token } = await oauth2.getAccessToken({
		code,
		host,
		redirectUri,
	});

	await tokenStore.setValue(
		value.concat({
			host,
			authorization: {
				accessToken: access_token,
				refreshToken: refresh_token,
			},
		}),
	);
};

export const refreshToken = async (host: string) => {
	const tokens = await tokenStore.getValue();
	const token = tokens.find((token) => token.host === host);

	if (!token || "apiKey" in token.authorization) {
		throw new Error("Cannot refresh token");
	}

	const { access_token, refresh_token } = await oauth2.refreshAccessToken({
		host,
		refreshToken: token.authorization.refreshToken,
	});

	await tokenStore.setValue(
		tokens.map((t) => {
			if (t.host !== host) {
				return t;
			}

			return {
				host: t.host,
				authorization: {
					accessToken: access_token,
					refreshToken: refresh_token,
				},
			};
		}),
	);
};
