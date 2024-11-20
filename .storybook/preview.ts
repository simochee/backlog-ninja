import type { Loader, Parameters } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize({ onUnhandledRequest: "bypass" });

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
} satisfies Parameters;

export const loaders: Loader[] = [mswLoader];
