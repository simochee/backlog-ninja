import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";

type Story = StoryObj<typeof Component>;

export default {
	title: "components/Notification",
	component: Component,
	args: {
		alreadyRead: false,
		reason: 2,
		projectKey: "EXAMPLE",
		issueKey: "ISSUE-1",
		issueSummary: "拡張機能の実装計画を立てる",
		statusName: "未対応",
		statusColor: "#ed8077",
		commentContent:
			"リリース予定日が9月20日に決まりました。必要な機能の整理も兼ねて、リリースまでのスケジュールを確認してください。",
		senderUserId: "exampleuser",
		senderName: "exampleuser",
		created: "2023-12-15T01:10:00.000Z",
	},
} satisfies Meta<typeof Component>;

export const Primary: Story = {};
