import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "wxt";

export default defineConfig({
	imports: false,
	vite: () => ({
		plugins: [tailwindcss()],
	}),
});
