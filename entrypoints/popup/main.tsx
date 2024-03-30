import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { browser } from "wxt/browser";
import "~/assets/style.css";

const rootEl = document.getElementById("root");

if (rootEl instanceof HTMLElement) {
	const root = createRoot(rootEl);

	root.render(
		<StrictMode>
			<p className="text-red-800">{browser.i18n.getMessage("extName")}</p>
		</StrictMode>,
	);
}
