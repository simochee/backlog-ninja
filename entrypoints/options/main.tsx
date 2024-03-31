import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "~/assets/style.css";
import { OptionsApp } from "./OptionsApp";

const rootEl = document.getElementById("root");

if (rootEl instanceof HTMLElement) {
	const root = createRoot(rootEl);

	root.render(
		<StrictMode>
			<OptionsApp />
		</StrictMode>,
	);
}
