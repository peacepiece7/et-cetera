"use client"
import { useCallback, useEffect, useRef, useState } from "react"

const DEFAULT_OPTION = {
  initWidth: 300,
  maxWidth: 600,
  minWidth: 300,
}

export const useResizeSidebar = (option: typeof DEFAULT_OPTION = DEFAULT_OPTION) => {
  const [sideBarWidth, setSideBarWidth] = useState(option.initWidth)
  const startXRef = useRef<number | null>(null) // 드래그 시작 시 마우스 X 좌표 저장
  const startWidthRef = useRef<number | null>(null) // 드래그 시작 시 사이드바 너비 저장

  const [isDragging, setIsDragging] = useState(false)
  const barRef = useRef<HTMLDivElement | null>(null)

  const mouseDown = useCallback(
    (e: MouseEvent) => {
      e.preventDefault()
      document.body.style.userSelect = "none"
      startXRef.current = e.clientX
      startWidthRef.current = sideBarWidth
      setIsDragging(true)
    },
    [sideBarWidth],
  )

  const mouseUp = useCallback((_e: MouseEvent) => {
    document.body.style.userSelect = "auto"
    startXRef.current = null
    startWidthRef.current = null
    setIsDragging(false)
  }, [])

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging && startXRef.current !== null && startWidthRef.current !== null) {
        const deltaX = e.clientX - startXRef.current
        const newWidth = startWidthRef.current + deltaX
        if (newWidth > option.maxWidth) {
          setSideBarWidth(option.maxWidth)
        } else if (newWidth > option.minWidth) {
          setSideBarWidth(newWidth)
        } else {
          setSideBarWidth(option.minWidth)
        }
      }
    },
    [isDragging, option.minWidth],
  )

  useEffect(() => {
    const barElement = barRef.current

    if (barElement) {
      barElement.addEventListener("mousedown", mouseDown)
      document.addEventListener("mousemove", mouseMove)
      document.addEventListener("mouseup", mouseUp)
    }

    return () => {
      if (barElement) {
        barElement.removeEventListener("mousedown", mouseDown)
      }
      document.removeEventListener("mousemove", mouseMove)
      document.removeEventListener("mouseup", mouseUp)
    }
  }, [barRef, mouseDown, mouseMove, mouseUp])

  return {
    barRef,
    sideBarWidth,
    isDragging,
  }
}
