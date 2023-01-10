import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import("vite").UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 5050
	},
	preview: {
		port: 8080
	}
};

export default config;

