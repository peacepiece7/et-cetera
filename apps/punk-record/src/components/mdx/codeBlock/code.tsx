import { DetailedHTMLProps, HTMLAttributes } from "react"
import hljs from "highlight.js"
import { codeFont } from "@/utils/shared"

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
  "language-sql": "sql",
  "language-bash": "bash",
  "language-sh": "bash",
  "language-shell": "bash",
  "language-zsh": "bash",
  "language-cmd": "bash",
}

export const Code = (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const { children, ...restProps } = props

  if (!props.className && typeof props.children === "string" && !props.children.includes("\n")) {
    return <code className={`text-rose-500 bg-slate-200 px-1 mx-1 rounded-sm text-base`} {...props} />
  }

  const text = typeof props.children === "string" ? props.children : ""
  const value = hljs.highlight(text, {
    language: LANGUAGES_MAP[props.className as string] || "plaintext",
  }).value

  return (
    <div className={`bg-slate-300 p-4 my-2 rounded-sm overflow-y-auto`}>
      <code {...restProps} dangerouslySetInnerHTML={{ __html: value }} className={`not-italic ${codeFont.className}`} />
    </div>
  )
}
