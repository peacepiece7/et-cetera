import { ContentsLoading } from "@/components/loading/ContentsLoading"
import { NavigationLoading } from "@/components/loading/NavigationLoading"
import { PostPageLayoutLoading } from "@/components/loading/PostPageLayoutLoading"

export default function PostLoadingPage() {
  return (
    <>
      <NavigationLoading />
      <PostPageLayoutLoading>
        <ContentsLoading />
      </PostPageLayoutLoading>
    </>
  )
}
