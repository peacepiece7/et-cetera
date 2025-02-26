#!/bin/bash

# 배포 시작 로그
echo "START DEPLOY"

# 첫 번째 인자를 DEPLOY_PATH로 설정 (기본값 설정)
DEPLOY_PATH=$1
if [ -z "$DEPLOY_PATH" ]; then
  echo "Error: DEPLOY_PATH is not provided"
  exit 1
fi

# 서버 경로로 이동
echo "Changing to directory: $DEPLOY_PATH"
cd "$DEPLOY_PATH" || { echo "Failed to change directory to $DEPLOY_PATH"; exit 1; }

# nvm 로드 (nvm이 제대로 설정된 경우에만 사용)
if [ -f "$HOME/.nvm/nvm.sh" ]; then
  source "$HOME/.nvm/nvm.sh"
  echo "NVM loaded"
else
  echo "NVM is not installed or not found"
fi

# pnpm, pm2가 PATH에 존재하는지 확인
echo "Checking if pnpm and pm2 are in the PATH"
which pnpm || { echo "pnpm not found in PATH"; exit 1; }
which pm2 || { echo "pm2 not found in PATH"; exit 1; }

# 노드 버전 변경
echo "Changing the version of the node"
nvm use || { echo "Failed to change the version of the node"; exit 1; }

# 의존성 설치
echo "Installing dependencies using pnpm"
pnpm install --frozen-lockfile || { echo "PNPM install failed"; exit 1; }

# 애플리케이션 빌드
# echo "Building application"
# pnpm run build --filter @app/punk-record || { echo "Build failed"; exit 1; }

# 빌드 결과 압축
# echo "Compressing the build"
# zip -r build.zip ./apps/punk-record/.next ./apps/punk-record/public || { echo "Zip failed"; exit 1; }

# 이전 빌드 제거
echo "Removing old build"
rm -rf ./apps/punk-record/.next || { echo "Failed to remove old build"; exit 1; }

# 새로운 빌드 배포
echo "Unzipping build.zip"
unzip -o build.zip || { echo "Unzip failed"; exit 1; }

# pm2로 애플리케이션 재시작
echo "Restarting pm2 with ecosystem.config.js"
pm2 start ./apps/punk-record/ecosystem.config.js || { echo "PM2 start failed"; exit 1; }

# 배포 완료 로그
echo "Deployment completed successfully"
