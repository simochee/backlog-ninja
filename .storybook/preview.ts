import type { Loader, Parameters } from "@storybook/react";

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
} satisfies Parameters;

export const tags = ["autodocs", "autodocs"];
