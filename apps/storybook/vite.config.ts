import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    postcss: path.resolve(__dirname, 'postcss.config.js'), // 명시적으로 PostCSS 설정 파일 경로 지정
  },
});
