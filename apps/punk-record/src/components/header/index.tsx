import { TreeNode } from "@/app/api/navigation/route"
import { SearchItem } from "@/app/api/search/route"
import { X_CUSTOM_URL } from "@/constants/server"
import { fetcher } from "@/utils/server"
import { Heading } from "mdast"
import { headers } from "next/headers"
import Link from "next/link"
import { createNavElements, createTOCElements } from "@/utils/server-components"
import HeaderNavigation from "../navigation/HeaderNavigation"
import { SearchListProvider } from "@/contexts/useSearchListContext"

export async function Header() {
  // 변경 사항 추가
  const headerList = headers()
  const url = headerList.get(X_CUSTOM_URL) || ""

  // Table of contents
  const isPostPage = url.includes("posts")

  const tocRes = await fetcher<{ tocTree: Heading[] }>(`/api/table-of-contents?url=${url}`, { cache: "no-cache" })
  const navRes = await fetcher<{ navTree: TreeNode[] }>(`/api/navigation`, {})
  const searchRes = await fetcher<{ list: SearchItem[] }>(`/api/search`, {})

  return (
    <div className="flex col-start-1 col-end-5 row-start-1 row-end-2 shadow-md border-b-[1px]">
      <div className="flex-1">
        <Link href="/">
          <h1 className="w-fit text-2xl py-4 px-4">Blog</h1>
        </Link>
      </div>
      <div className="flex items-center pr-10">
        <SearchListProvider value={searchRes.list}>
          <HeaderNavigation
            activeTab={isPostPage ? "toc" : "nav"}
            navChildren={createNavElements(navRes.navTree, [], 0)}
            tocChildren={createTOCElements(tocRes.tocTree)}
          />
        </SearchListProvider>
      </div>
    </div>
  )
}
