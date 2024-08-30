"use client"
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"
import { ContentsLoading } from "@/components/loading/ContentsLoading"
import { usePostAreaSlideAnimation } from "@/hooks/useSlidePostContentArea"
import { Button } from "@repo/ui-shadcn/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@repo/ui-shadcn/ui/breadcrumb"
import { POST_PAGE_LAYOUT_ID } from "@/constants/client"
import { useDynamicBreadcrumb } from "@/hooks/useDynamicBreadcrumb"

export function ContentsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isPostPage = pathname.includes("posts")

  return isPostPage ? (
    <MainPageLayout>
      <PostPageLayout>{children}</PostPageLayout>
    </MainPageLayout>
  ) : (
    <MainPageLayout>{children}</MainPageLayout>
  )
}

export function MainPageLayout({ children }: { children: React.ReactNode }) {
  const { contentsRef } = usePostAreaSlideAnimation()

  return (
    <>
      <ContentsLoading ref={contentsRef} />
      <main className="global-layout">{children}</main>
    </>
  )
}

export function PostPageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  /**
   * @todo history에 따라서 다르게 보여줘야해서 아직 미구현
   * nextjs prefetch, stack flow, view transition api 등 고려해보자
   */
  const [fadeOut, _setFadeOut] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { breadcrumb } = useDynamicBreadcrumb({
    container: containerRef,
  })

  useEffect(() => {
    console.log("breadcrumb : ", breadcrumb)
  }, [breadcrumb])

  return (
    <>
      <div
        id={POST_PAGE_LAYOUT_ID}
        className={`flex flex-col h-full grow shrink rounded-xl shadow-md bg-white
        transition-all duration-500 ease-out
        ${fadeOut ? "-translate-x-3/4 opacity-0 invisible" : ""}`}
      >
        <div className="flex justify-between text-end m-4">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumb.map((item, idx) => (
                <React.Fragment key={item.id}>
                  <BreadcrumbItem className="inline-block">
                    <BreadcrumbLink href={`#${item.id}`}>{item.textContent}</BreadcrumbLink>
                  </BreadcrumbItem>
                  {idx !== breadcrumb.length - 1 && <BreadcrumbSeparator className="text-lg" />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <Button size="lg" onClick={router.back}>
            Close
          </Button>
        </div>
        <div className="overflow-hidden h-full">
          <div ref={containerRef} className="overflow-y-scroll scroll-smooth h-full p-4">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
