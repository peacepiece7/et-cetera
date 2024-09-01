import { headers } from "next/headers"
import { Heading } from "mdast"
import React from "react"
import LeftSideBarNavigation from "./LeftSIdeBarNavigation"
import { fetcher } from "@/utils/server"
import { TreeNode } from "@/app/api/navigation/route"
import { X_CUSTOM_URL } from "@/constants/server"
import { createNavElements, createTOCElements } from "@/utils/server-components"
import { SearchItem } from "@/app/api/search/route"
import { SearchListProvider } from "@/contexts/useSearchListContext"

export async function LeftSideBar() {
  // 변경 사항 추가
  const headerList = headers()
  const url = headerList.get(X_CUSTOM_URL) || ""

  // Table of contents
  const isPostPage = url.includes("posts")

  const tocRes = await fetcher<{ tocTree: Heading[] }>(`/api/table-of-contents?url=${url}`, { cache: "force-cache" })
  const navRes = await fetcher<{ navTree: TreeNode[] }>(`/api/navigation`, { cache: "force-cache" })
  const searchRes = await fetcher<{ list: SearchItem[] }>(`/api/search`, { cache: "force-cache" })

  return (
    <SearchListProvider value={searchRes.list}>
      <LeftSideBarNavigation
        activeTab={isPostPage ? "toc" : "nav"}
        navChildren={createNavElements(navRes.navTree, [], 0)}
        tocChildren={createTOCElements(tocRes.tocTree)}
      />
    </SearchListProvider>
  )
}
