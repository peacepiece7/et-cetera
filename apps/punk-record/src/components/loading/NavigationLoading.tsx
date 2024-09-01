import { SearchArea } from "@/components/navigation/SearchArea"
import { Button } from "@repo/ui-shadcn/ui/button"

export const NavigationLoading = () => {
  return (
    <div className="flex flex-col relative h-auto col-start-1 col-end-2 row-start-2 row-end-4 group z-30 bg-white">
      <SearchArea />
      <div className="flex justify-around">
        <Button size="lg">목록</Button>
        <Button size="lg">목차</Button>
      </div>
      <nav className="relative h-full overflow-y-scroll z-10 pt-4" style={{ width: `300px` }}>
        <div className="pt-10 text-sm ml-4 h-full"># 목차를 불러오고 있습니다!</div>
      </nav>
    </div>
  )
}
