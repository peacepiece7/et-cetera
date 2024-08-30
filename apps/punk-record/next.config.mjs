import createMDX from "@next/mdx"
import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
  //   config.watchOptions = {
  //     ...config.watchOptions,
  //     ignored: /^((?:[^/]*(?:\/|$))*)(\.(git|next)|node_modules|packages\/ui-shadcn)(\/((?:[^/]*(?:\/|$))*)(?:$|\/))?/,
  //   }
  //   return config
  // },
}

const withMDX = createMDX({
  // 여기에 마크다운 플러그인 추가
})
const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: false,
})

export default withPlugins([withMDX, withBundleAnalyzerConfig], nextConfig)

// withBundleConfig(withMDX(nextConfig))

// ────────│ ✓ Compiled / in 120.4s (7687 modules)
// @app/punk-record#»│ ○ Compiling /api/table-of-contents ...
//                   │ ✓ Compiled /api/table-of-contents in 1147ms (4085 modules)
//                   │ GET /api/table-of-contents?url= 200 in 1685ms
//                   │ GET /posts/series/raspberry_pi_home_server/2 200 in 28442ms
//                   │ ○ Compiling /api/navigation ...
//                   │ ✓ Compiled /api/navigation in 1292ms (4087 modules)
//                   │ GET /api/navigation 200 in 1721ms
//                   │ ○ Compiling /api/search ...
//                   │ ✓ Compiled /api/search in 2.4s (4089 modules)
//                   │ GET /api/search 200 in 2892ms
// ──────────────────│ ○ Compiling /favicon.ico ...

// 목록이름 변경하고 받은 로그
// http://localhost:3000/posts/series/raspberry_pi_home_server/2
// │ GET /api/table-of-contents?url= 200 in 4608ms
// │ GET /api/navigation 200 in 312ms
// │ GET /api/search 200 in 86ms
// │ GET / 200 in 5959ms
// │ ○ Compiling /posts/series/raspberry_pi_home_server/[pageId] ...
// │ ✓ Compiled /posts/series/raspberry_pi_home_server/[pageId] in 2.6s (7946 modules)
// │ GET /posts/series/raspberry_pi_home_server/1?_rsc=1fnkb 200 in 254ms
// │ GET /posts/series/raspberry_pi_home_server/2?_rsc=12gl2 200 in 66ms
// │ GET /posts/series/raspberry_pi_home_server/3?_rsc=63qy8 200 in 76ms
// │ ✓ Compiled in 18.9s (7965 modules)
// │ GET /posts/series/raspberry_pi_home_server/2?_rsc=c2uen 200 in 240ms
