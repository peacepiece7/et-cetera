import SearchIcon from "@/components/ui/Icons/SearchIcon"
import { Button, Kbd, WithIcon } from "@repo/ui-shadcn"

export const SearchBarDecoration = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button variant="outline" className="py-6 m-2" onClick={onClick}>
      <WithIcon className="mr-1">
        <SearchIcon />
      </WithIcon>
      <p className="mr-4">검색하기</p>
      <Kbd keyboards={["ctrl", "+", "k"]} className="shadow-none" />
    </Button>
  )
}
