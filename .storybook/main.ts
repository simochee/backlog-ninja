import type { StorybookConfig } from "@storybook/react-vite";

export default {
	stories: [
		{
			directory: "../components",
			titlePrefix: "Shared/",
		},
		{
			directory: "../entrypoints/options",
			titlePrefix: "Options/",
		},
		{
			directory: "../entrypoints/popup",
			titlePrefix: "Popup/",
		},
	],
	framework: "@storybook/react-vite",
	addons: ["@storybook/addon-essentials"],
	staticDirs: ["./public"],
} satisfies StorybookConfig;
