import { Inter, Roboto_Mono } from "next/font/google"
import localFont from "next/font/local"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

/**
 * @description 서브 폰트입니다.
 */
export const subFont = Inter({ subsets: ["latin"] })

// export const mainFont = Hi_Melody({
//   subsets: ["latin"],
//   weight: ["400"],
//   style: ["normal"],
// })
/**
 * @description 메인 폰트입니다.
 */
const _mainFont = localFont({
  src: [
    {
      path: "../../public/cookie/cookie_regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/cookie/cookie_medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/cookie/cookie_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
})

export const mainFont = GeistMono || GeistSans

/**
 * @description 코드 블록 폰트입니다.
 */
const _codeFont = Roboto_Mono({ subsets: ["latin"] })
export const codeFont = GeistMono || GeistSans
