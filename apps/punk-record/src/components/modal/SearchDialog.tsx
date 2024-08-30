"use client"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@repo/ui-shadcn/ui/dialog"
import { SearchDialogContent } from "./SearchDialogContent"

export function SearchDialog() {
  return (
    <DialogContent className="flex flex-col sm:max-w-[50%] max-h-[50%] min-h-[50%]">
      <DialogHeader>
        <DialogTitle>Search documentation</DialogTitle>
        <DialogDescription>일치하는 제목 또는 카테고리를 검색합니다.</DialogDescription>
      </DialogHeader>
      <SearchDialogContent />
    </DialogContent>
  )
}
