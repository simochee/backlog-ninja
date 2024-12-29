import * as Blocks from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import "../assets/style.css";

export default {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /(Date|ed)$/,
			},
		},
		docs: {
			page: () => (
				<>
					<Blocks.Title />
					<Blocks.Subtitle />
					<Blocks.Description />
					<Blocks.Primary />
					<Blocks.Controls />
					<Blocks.Stories includePrimary={false} />
				</>
			),
		},
	},
	tags: ["autodocs"],
} satisfies Preview;
