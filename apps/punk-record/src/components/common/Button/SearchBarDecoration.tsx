import SearchIcon from "@/components/ui/Icons/SearchIcon"
import { Button } from "@repo/ui-shadcn/ui/button"
import { Kbd } from "@repo/ui-shadcn/ui/typography/kdb"
import { WithIcon } from "@repo/ui-shadcn/ui/Icon/WithIcon"

export const SearchBarDecoration = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button variant="outline" className="py-6 px-4 m-2" onClick={onClick}>
      <WithIcon className="mr-1">
        <SearchIcon />
      </WithIcon>
      <p className="mr-4 w-full text-start">Quick Search</p>
      <Kbd keyboards={["ctrl", "+", "k"]} className="shadow-none" />
    </Button>
  )
}
