import { Header } from "@/components/header"
import { MainPageLayout } from "@/components/layout/Layout"
import { LeftSideBar } from "@/components/navigation/LeftSideBar"
import { PostAreaSlideProvider } from "@/contexts/usePostAreaContext"

export default function Home() {
  return (
    <div className="grid grid-cols-[fit-content(100%)_1fr_1fr] grid-rows-[fit-content(100%)_1fr_1fr] h-full max-h-screen min-h-screen overflow-hidden">
      <PostAreaSlideProvider>
        <Header />
        <LeftSideBar />
        <MainPageLayout>
          <div className="p-14" />
        </MainPageLayout>
      </PostAreaSlideProvider>
    </div>
  )
}
