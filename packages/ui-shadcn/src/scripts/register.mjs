// 파일 시스템 모듈과 URL 모듈을 가져옵니다.
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);

// 현재 파일의 디렉터리 경로를 구합니다.
const __dirname = dirname(__filename);

// UI 컴포넌트 디렉터리를 읽어옵니다.
const uiFiles = fs
  .readdirSync(path.join(__dirname, '..', 'components', 'ui'), {
    recursive: true,
  })
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => file.replaceAll(path.sep, '/').replace('.tsx', ''));

let data = `// 이 파일은 자동 생성됩니다. 직접 수정하지 마세요.
import '../styles.css';

${uiFiles.map((file) => `export * from './components/ui/${file}'`).join('\n')}
`;

// hooks 디렉터리를 읽어옵니다.
const hooksFiles = fs
  .readdirSync(path.join(__dirname, '..', 'hooks'), {
    recursive: true,
  })
  .filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'))
  .map((file) => file.replaceAll(path.sep, '/').replace('.tsx', '').replace('.ts', ''));

data += `\n${hooksFiles.map((file) => `export * from './hooks/${file}'`).join('\n')}`;

// lib 디렉터리를 읽어옵니다.
const libFiles = fs
  .readdirSync(path.join(__dirname, '..', 'lib'), {
    recursive: true,
  })
  .filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'))
  .map((file) => file.replaceAll(path.sep, '/').replace('.tsx', '').replace('.ts', ''));

data += `\n${libFiles.map((file) => `export * from './lib/${file}'`).join('\n')}`;

fs.writeFileSync(path.join(__dirname, '..', '__registry.tsx'), data);
