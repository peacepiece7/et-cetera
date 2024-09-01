"use client"
import { useNavAnimation } from "@/hooks/useNavAnimation"
import { Button } from "@repo/ui-shadcn/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui-shadcn/ui/drawer"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { SearchArea } from "./SearchArea"

export default function NavigationContentForMobile({
  navChildren,
  tocChildren,
  activeTab = "nav",
}: Readonly<{
  navChildren: React.ReactNode
  tocChildren: React.ReactNode
  activeTab: "nav" | "toc"
}>) {
  const pathname = usePathname()

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [isRender, setIsRender] = useState(false)
  const [activeIdx, setActiveIdx] = useState(activeTab === "nav" ? 0 : 1)
  const { navTree } = useNavAnimation(navChildren, pathname?.split("/"), [isRender])
  const isPostPage = pathname.includes("posts")

  useEffect(() => {
    if (isOpenDrawer) return setIsRender(() => true)
    setIsRender(() => false)
  }, [isOpenDrawer])

  return (
    <Drawer
      onOpenChange={(e) => {
        setIsOpenDrawer(() => e)
      }}
    >
      <DrawerTrigger>네비게이션 열기</DrawerTrigger>
      <DrawerContent className="min-h-[80%] max-h-[100%]">
        <DrawerHeader>
          <DrawerTitle>네비게이션</DrawerTitle>
          <DrawerDescription>목록, 목차를 찾습니다.</DrawerDescription>
        </DrawerHeader>
        <SearchArea />
        <div className="flex justify-around mt-4">
          <Button size="lg" onClick={() => setActiveIdx(0)}>
            목록
          </Button>
          {isPostPage && (
            <Button size="lg" onClick={() => setActiveIdx(1)}>
              목차
            </Button>
          )}
        </div>
        <nav className="relative h-full overflow-y-scroll z-10 pt-4">
          <div className="pt-10 text-sm">
            <div className={`${activeIdx === 0 ? "visible" : "hidden"}`}>{navTree}</div>
            {isPostPage && <div className={`${activeIdx === 1 ? "visible" : "hidden"}`}>{tocChildren}</div>}
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
