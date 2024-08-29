import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: './src/__registry.tsx',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        // preserveModules: true, // 개별 모듈 파일 유지
        // preserveModulesRoot: 'src', // src 폴더를 기준으로 경로를 유지
        // entryFileNames: '[name].js', // 파일명 패턴 지정
      },
    ],
    external: ['react', 'react-dom'], // React와 ReactDOM을 외부 종속성으로 설정
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        outDir: 'dist',
        rootDir: 'src',
      }), // TypeScript 지원
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled', // Babel 헬퍼 함수를 번들에 포함
      }),
      postcss({
        // Tailwind CSS와 PostCSS 설정
        extract: true, // 별도의 CSS 파일로 추출
        plugins: [require('tailwindcss'), require('autoprefixer')], // Tailwind CSS 및 Autoprefixer 사용
        minimize: true, // CSS를 압축
        modules: true, // 모듈 CSS 지원
      }),
    ],
  },
];

// BARREL 파일로 TREE SHAKING 안되거나 성능 떨어지면 개별 파일로 변경하자..
// import { dts } from 'rollup-plugin-dts';
// import multiInput from 'rollup-plugin-multi-input';
// import { preserveDirectives } from 'rollup-plugin-preserve-directives';
// import multi from '@rollup/plugin-multi-entry';
// import glob from 'glob';
// import path from 'path';

// // 입력 파일을 객체 형태로 수집
// const inputFiles = glob.sync('src/components/**/*.tsx').reduce((acc, file) => {
//   const name = path.relative('src', file).replace(/\.tsx$/, '');
//   acc[name] = file;
//   return acc;
// }, {});
