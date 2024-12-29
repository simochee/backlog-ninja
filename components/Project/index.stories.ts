import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";

type Story = StoryObj<typeof Component>;

export default {
	title: "components/Project",
	component: Component,
	args: {
		projectKey: "EXAMPLE",
		name: "サンプルプロジェクト",
		useWiki: true,
		useFileSharing: true,
		useSubversion: false,
		useGit: false,
	},
} satisfies Meta<typeof Component>;

export const Primary: Story = {};
