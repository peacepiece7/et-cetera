"use client"
import Link from "next/link"
import { useState } from "react"
import { usePostAreaSlideAction } from "@/contexts/usePostAreaContext"
import { usePathname } from "next/navigation"

export default function NavigationLink({
  href,
  children,
}: Readonly<{
  href: string
  children: React.ReactNode
}>) {
  const [loading, setIsLoading] = useState(false)
  const { setIsWorking, setNext } = usePostAreaSlideAction()
  const pathname = usePathname()

  return (
    <>
      {pathname === href ? (
        <div className="truncate select-none text-red-400">{children}</div>
      ) : (
        <Link
          className="link truncate select-none"
          href={href}
          prefetch={true}
          onClick={(e) => {
            e.preventDefault()
            setIsWorking(true)
            setNext(href)
            setIsLoading(true)
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault()
              setIsWorking(true)
              setNext(href)
              setIsLoading(true)
            }
          }}
        >
          {loading ? <div className="truncate select-none text-red-400">로딩중..!</div> : children}
        </Link>
      )}
    </>
  )
}
