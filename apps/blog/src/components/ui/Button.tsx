import { HTMLAttributes } from "react"
import { Button as UiButton } from "@repo/ui-shadcn"

export function Button({
  children,
  className,
  onClick,
  options = {},
}: {
  children: React.ReactNode
  onClick?: HTMLAttributes<HTMLButtonElement>["onClick"]
  className?: HTMLAttributes<HTMLButtonElement>["className"]
  options?: {
    [key in keyof HTMLAttributes<HTMLButtonElement>]?: HTMLAttributes<HTMLButtonElement>[key]
  }
}) {
  return (
    <UiButton onClick={onClick} className={className} {...options}>
      {children}
    </UiButton>
  )
}
