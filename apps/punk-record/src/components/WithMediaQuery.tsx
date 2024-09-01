"use client"
import { useMedia } from "react-use"

export default function WithMediaQuery({
  children,
  alternativeContent = null,
  mediaQuery,
  mediaDefaultState = true,
}: Readonly<{
  children: React.ReactNode
  alternativeContent: React.ReactNode
  mediaQuery: string
  mediaDefaultState: boolean
}>) {
  const mediaState = useMedia(mediaQuery, mediaDefaultState)
  return <>{mediaState === mediaDefaultState ? children : alternativeContent}</>
}
