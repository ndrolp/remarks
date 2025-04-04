import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, "src/popup/index.html"),
                newtab: resolve(__dirname, "src/newtab/index.html"),
                background: resolve(__dirname, "src/background.ts"),
            },
            output: {
                entryFileNames: "[name].js",
            },
        },
        outDir: "dist",
        emptyOutDir: true,
    },
});
