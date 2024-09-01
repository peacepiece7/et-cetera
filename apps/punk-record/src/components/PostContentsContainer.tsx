import { headers } from "next/headers"
import { Heading } from "mdast"
import { TreeNode } from "@/app/api/navigation/route"
import { MainPageLayout, PostPageLayout } from "@/components/layout/Layout"
import LeftSideBarNavigation from "@/components/navigation/LeftSIdeBarNavigation"
import { X_CUSTOM_URL } from "@/constants/server"
import { fetcher } from "@/utils/server"
import { createNavElements, createTOCElements } from "@/utils/server-components"
import { SearchItem } from "@/app/api/search/route"
import { SearchListProvider } from "@/contexts/useSearchListContext"

export default async function PostContentsContainer(
  props: Readonly<{
    children: React.ReactNode
  }>,
) {
  const headerList = headers()
  const url = headerList.get(X_CUSTOM_URL) || ""
  const tocRes = await fetcher<{ tocTree: Heading[] }>(`/api/table-of-contents?url=${url}`, { cache: "force-cache" })
  const navRes = await fetcher<{ navTree: TreeNode[] }>(`/api/navigation`, { cache: "force-cache" })
  const searchRes = await fetcher<{ list: SearchItem[] }>(`/api/search`, { cache: "force-cache" })

  return (
    <SearchListProvider value={searchRes.list}>
      <LeftSideBarNavigation
        activeTab="toc"
        navChildren={createNavElements(navRes.navTree, [], 0)}
        tocChildren={createTOCElements(tocRes.tocTree)}
      />
      <MainPageLayout>
        <PostPageLayout>{props.children}</PostPageLayout>
      </MainPageLayout>
    </SearchListProvider>
  )
}
