import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "wxt";

export default defineConfig({
	manifest: {
		name: "__MSG_extName__",
		description: "__MSG_extDescription__",
		default_locale: "ja",
	},
	vite: () => ({
		plugins: [tailwindcss()],
	}),
	imports: false,
});
