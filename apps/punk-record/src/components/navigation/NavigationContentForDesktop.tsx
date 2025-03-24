"use client"
import { useNavAnimation } from "@/hooks/useNavAnimation"
import { useResizeSidebar } from "@/hooks/useResizeSidebar"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useMedia } from "react-use"
import { SearchArea } from "./SearchArea"

export default function NavigationContentForDesktop({
  navChildren,
  tocChildren,
  activeTab = "nav",
}: Readonly<{
  navChildren: React.ReactNode
  tocChildren: React.ReactNode
  activeTab: "nav" | "toc"
}>) {
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const isWide = useMedia("(min-width: 768px)", true)
  const [isRender, setIsRender] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  const { navTree } = useNavAnimation(navChildren, pathname?.split("/"), [isWide, activeIdx])

  const { barRef, sideBarWidth, isDragging } = useResizeSidebar()

  const isPostPage = pathname.includes("posts")

  useEffect(() => {
    setIsRender(() => true)
  }, [])

  return (
    <div
      className={`${isRender ? "flex" : "hidden"} flex-col relative h-auto col-start-1 col-end-2 row-start-2 row-end-4 group z-30 bg-white`}
    >
      <SearchArea />
      {/* <div className="flex justify-around mt-4"> */}
      {/* <Button size="lg" onClick={() => setActiveIdx(0)}>
          목록
        </Button> */}
      {/* {isPostPage && (
          <Button size="lg" onClick={() => setActiveIdx(1)}>
            목차
          </Button>
        )} */}
      {/* </div> */}
      <nav ref={navRef} className="relative h-full overflow-y-scroll z-10 pt-4" style={{ width: `${sideBarWidth}px` }}>
        <div className="pt-10 text-base">
          <div className={`${activeIdx === 0 ? "visible" : "hidden"}`}>{navTree}</div>
          {isPostPage && <div className={`${activeIdx === 1 ? "visible" : "hidden"}`}>{tocChildren}</div>}
        </div>
      </nav>
      <div
        draggable
        ref={barRef}
        className={`
          absolute w-4 h-full top-0 bottom-0 right-0 m-auto bg-slate-300 opacity-5 z-0
          transition-all ease-in-out cursor-col-resize
          group-hover:opacity-100 group-hover:right-[-3px] duration-300 hover:bg-slate-400
          ${isDragging ? "right-[-16px] bg-slate-400 opacity-100" : ""}
    `}
      />
    </div>
  )
}
