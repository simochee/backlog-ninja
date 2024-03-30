import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootEl = document.getElementById("root");

if (rootEl instanceof HTMLElement) {
	const root = createRoot(rootEl);

	root.render(
		<StrictMode>
			<p>Hello World</p>
		</StrictMode>,
	);
}
