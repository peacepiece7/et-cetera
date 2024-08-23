import SearchIcon from "@/components/ui/Icons/SearchIcon"
import { Button } from "@repo/ui-shadcn"

export const SearchBarDecoration = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button onClick={onClick}>
      <div className="py-4 flex items-center text-gray-500">
        <SearchIcon className="mr-4" />
        <div className="flex justify-between w-full">
          <p>검색하기</p>
          <kbd>CTRL K</kbd>
        </div>
      </div>
    </Button>
  )
}
