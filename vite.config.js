import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';


export default ({ mode }) => {

    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        server: {
            host: true,
            hmr: {
                host: process.env.VITE_DEV_URL,
            },
            // watch: {
            //     usePolling: true,
            //     interval: 1000,
            // },
        },
        plugins: [
            laravel(['resources/css/app.css', 'resources/js/app.jsx']),
            react(),
        ],
    });
}