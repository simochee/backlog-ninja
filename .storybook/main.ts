import type { StorybookConfig } from "@storybook/react-vite";

export default {
	stories: [
		"../components/**/*.stories.@(ts|tsx)",
		"../components/**/index.mdx",
	],
	framework: "@storybook/react-vite",
	addons: ["@storybook/addon-essentials"],
	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
} satisfies StorybookConfig;
