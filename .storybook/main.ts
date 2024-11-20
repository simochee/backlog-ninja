import type { StorybookConfig } from "@storybook/react-vite";

export default {
	stories: ["../src/**/*.stories.tsx"],
	framework: "@storybook/react-vite",
	addons: ["@storybook/addon-essentials"],
	staticDirs: ["./public"],
} satisfies StorybookConfig;
