import { DetailedHTMLProps, HTMLAttributes } from "react"
import hljs from "highlight.js"
import { codeFont, subFont } from "@/utils/shared"

const LANGUAGES_MAP: Record<string, string> = {
  "language-js": "javascript",
  "language-ts": "typescript",
  "language-json": "json",
  "language-html": "html",
  "language-css": "css",
  "language-yaml": "yaml",
  "language-py": "python",
  "language-cpp": "cpp",
  "language-java": "java",
  "language-c": "c",
  "language-go": "go",
  "language-rust": "rust",
}

export const Code = (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const { children, ...restProps } = props

  if (!props.className && typeof props.children === "string" && !props.children.includes("\n")) {
    return (
      <code
        className={`text-rose-500 font-bold bg-slate-200 p-1 rounded-md text-base not-italic ${codeFont.className}`}
        {...props}
      />
    )
  }

  const text = typeof props.children === "string" ? props.children : ""
  const value = hljs.highlight(text, {
    language: LANGUAGES_MAP[props.className as string] || "plaintext",
  }).value

  return (
    <div className={`bg-slate-300 p-2 my-2 rounded-lg overflow-y-auto text-sm`}>
      <code {...restProps} dangerouslySetInnerHTML={{ __html: value }} className={`not-italic ${codeFont.className}`} />
    </div>
  )
}
