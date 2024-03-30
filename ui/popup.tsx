import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const rootEl = document.getElementById("root");

if (rootEl instanceof HTMLElement) {
	const root = createRoot(rootEl);

	root.render(
		<StrictMode>
			<p className="text-red-800">Hello World</p>
		</StrictMode>,
	);
}
