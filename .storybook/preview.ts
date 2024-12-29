import type { Loader, Parameters } from "@storybook/react";
import "../assets/style.css";

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
} satisfies Parameters;

export const tags = ["autodocs"];
