/** @type {import('vite').UserConfig} */
export default {
    root: './website',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: [
                './website/index.html',
                './website/about.html',
                './website/bio.html',
            ],
            emptyOutDir: true
        }
    },
}