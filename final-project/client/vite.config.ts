import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			// Dev: browser talks to Vite (:5173); Vite forwards API calls to Express (:3000).
			// Prod: relative /api URLs hit Express directly (same origin).
			"/api": "http://localhost:3000",
			"/health": "http://localhost:3000",
		},
	},
});
