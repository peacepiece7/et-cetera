import { NextRequest, NextResponse } from "next/server"
import { getASTTreeSafely, getFileNamesSafely, getPostFullPath } from "@/utils/server"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  const createTableOfContents = async (path: string, index: number = 0) => {
    const fileNames = getFileNamesSafely(path, ".mdx")

    if (fileNames.length === 0) return ""
    const headingNodes = getASTTreeSafely<"heading">(`${path}/${fileNames[index]?.name}`, "heading")
    return headingNodes
  }

  try {
    const searchParams = new URL(request.url).searchParams
    const url = searchParams.get("url")?.split("/")

    if (!url || 2 >= url.length) return NextResponse.json({ tocTree: [] })

    const [_empty, _posts, ...rest] = url
    const index = rest[rest.length - 1]
    rest.pop()
    rest.push("[pageId]")

    const tocTree = await createTableOfContents(getPostFullPath(...rest), parseInt(index!) - 1)

    console.log("TOC TREE: ", tocTree)

    return NextResponse.json({
      tocTree: tocTree,
    })
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
    return NextResponse.json({ error: "알 수 없는 오류가 발생했습니다." }, { status: 500 })
  }
}
