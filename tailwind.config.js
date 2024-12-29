/** @type {import('tailwindcss').Config} */
export default {
	content: ["./{components,entrypoints}/**/*.tsx"],
	theme: {
		extend: {
			fontSize: {
				"2xs": "0.625rem",
			},
			colors: {
				brand: {
					100: "#edf4f0",
					400: "#43ce9f",
					600: "#2c9a7a",
				},
			},
		},
	},
	plugins: [],
};
