import { HTMLAttributes, forwardRef } from "react"
import { PostPageLayout } from "@/components/layout/Layout"

/**
 * @description 포스트 페이지 로딩 중에 보여지는 레이아웃
 * - 좌측에서 우측으로 슬라이드
 * - 스켈레톤 UI
 */
export const ContentsLoading = forwardRef<
  HTMLElement,
  { className?: HTMLAttributes<HTMLElement>["className"] }
>(function ContentsLoadingInner(props, ref) {
  return (
    <aside
      ref={ref}
      className={`global-layout opacity-40 invisible transition-all duration-700 ease-out -translate-x-1/3`}
    >
      <PostPageLayout>
        <div>로딩 중 입니다...</div>
      </PostPageLayout>
    </aside>
  )
})
