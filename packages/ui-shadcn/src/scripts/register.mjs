// 파일 시스템 모듈과 URL 모듈을 가져옵니다.
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import fs from 'node:fs';

// @ts-expect-error eee
const __filename = fileURLToPath(import.meta.url);

// 현재 파일의 디렉터리 경로를 구합니다.
const __dirname = dirname(__filename);

const files = fs.readdirSync(path.join(__dirname, '..', 'components', 'ui'));

const data = `// 이 파일은 자동 생성됩니다. 직접 수정하지 마세요.
import '../styles.css';

${files.map((file) => `export * from './components/ui/${file.replace('.tsx', '')}'`).join('\n')}
`;

fs.writeFileSync(path.join(__dirname, '..', 'index.tsx'), data);
