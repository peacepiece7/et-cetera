module.exports = {
  apps: [
    {
      name: "punk-record",
      script: "pnpm",
      args: "run start",
      watch: true, // 파일 변경 감지 및 자동 재시작
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
}
