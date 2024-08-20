"use client"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/Button"
import CloseIcon from "@/components/ui/Icons/CloseIcon"
import { createPortal } from "react-dom"

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || typeof window === "undefined") return null

  return createPortal(children, document.body)
}

// https://github.com/vercel/next.js/discussions/46795
// 모든 컴포넌트에 'use client'를 붙이지 않는다. 서버 컴포넌트 바운더리에 직접적으로 사용되는
const ModalLayout = ({
  open,
  children,
  onClose,
}: {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}) => {
  const handleOnPressEsc = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!open) return
    document.addEventListener("keydown", handleOnPressEsc)
    return () => {
      document.removeEventListener("keydown", handleOnPressEsc)
    }
  }, [open, handleOnPressEsc])

  return (
    <section
      className={`fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70
        transition-opacity duration-300
      ${
        open
          ? "visible opacity-100 pointer-events-auto"
          : "invisible opacity-0 pointer-events-none"
      }
        `}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <Button
        className="fixed top-0 right-0 p-8 text-white"
        onClick={() => onClose()}
      >
        <CloseIcon />
      </Button>
      <div className="bg-white w-4/5 h-3/5 max-w-7xl">{children}</div>
    </section>
  )
}

export { ModalLayout, Modal }
