import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/__registry.tsx', // 라이브러리의 진입점
  output: {
    file: 'dist/index.js',
    format: 'cjs', // CommonJS 형식으로 번들링
    sourcemap: true,
  },
  external: ['react', 'react-dom'], // React와 ReactDOM을 외부 종속성으로 설정
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }), // TypeScript 지원
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    postcss({
      // Tailwind CSS와 PostCSS 설정
      extract: true, // 별도의 CSS 파일로 추출
      plugins: [require('tailwindcss'), require('autoprefixer')], // Tailwind CSS 및 Autoprefixer 사용
      minimize: true, // CSS를 압축
      modules: true, // 모듈 CSS 지원
    }),
  ],
};
