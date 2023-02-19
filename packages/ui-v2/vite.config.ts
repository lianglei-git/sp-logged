import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import path from 'path'
function _resolve(dir: string) {
    return path.resolve(__dirname, dir)
}
export default defineConfig({
    server: {
        port: 2468,
        open: true,
    },
    resolve: {
        alias: {
            '@': _resolve('source'),
            '@hooks': _resolve('source/hooks'),
            '@store': _resolve('source/store'),
            '@theme': _resolve('source/theme'),
            '@components': _resolve('source/components'),
        },
    },
    // css: {

    // },
    // css: {
    //     preprocessorOptions: {
    //         less: {
    //             math: "always",
    //         },
    //     },
    // },
    plugins: [react()]
})