import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import path from 'path'
function _resolve(dir) {
    return path.resolve(__dirname, dir)
}
export default defineConfig({
    server: {
        port: 3333,
        open: true,
    },
    plugins: [react()]
})