"use client"
import useKeyboardJs from "react-use/lib/useKeyboardJs"
import { useEffect, useRef, useState } from "react"
import { SearchBarDecoration } from "@/components/common/Button/SearchBarDecoration"
import { SearchDialog } from "@/components/modal/SearchDialog"
import { Dialog, DialogTrigger } from "@repo/ui-shadcn/ui/dialog"
import { Button } from "@repo/ui-shadcn/ui/button"

/**
 * 검색 기능을 제공하는 컴포넌트
 */
export const SearchArea = () => {
  const dialogRef = useRef<HTMLButtonElement>(null)
  const [isPressed, event] = useKeyboardJs("ctrl + k")

  useEffect(
    function handleOnPressCtrlAndK() {
      if (isPressed) {
        event?.preventDefault()
        dialogRef.current?.click()
      }
    },
    [isPressed, event],
  )

  return (
    <>
      {/* <Modal>
        <ModalLayout open={isOpen} onClose={() => setIsOpen(false)}>
          {isOpen && <SearchBar />}
        </ModalLayout>
      </Modal> */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="visible" ref={dialogRef} />
        </DialogTrigger>
        <SearchDialog />
      </Dialog>
      {/* 이 쉐끼는 장식용임 클릭하면 모달 오픈 하는 용도임*/}
      <SearchBarDecoration onClick={() => dialogRef.current?.click()} />
    </>
  )
}
