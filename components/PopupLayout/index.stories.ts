import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";

type Story = StoryObj<typeof Component>;

export default {
	title: "components/PopupLayout",
	component: Component,
	args: {},
} satisfies Meta<typeof Component>;

export const Primary: Story = {};
