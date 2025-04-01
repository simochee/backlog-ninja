import { defineConfig } from "wxt";

export default defineConfig({
	manifest: {
		default_locale: "en",
		name: "__MSG_ext_name__",
	},
	modules: ["@wxt-dev/i18n/module", "@wxt-dev/auto-icons"],
});
