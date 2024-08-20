"use client"

import Image from "next/image"
export const MDXImage = ({
  src,
  alt = "이미지",
  width = 400,
  height = 400,
  className = "",
}: {
  src: string
  alt?: string
  width?: number
  height?: number
  className?: string
}) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export const MDXSlideImages = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative w-full h-full">{children}</div>
}

export const MDXFlex = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={`flex w-full h-full ${className}`}>{children}</div>
}
