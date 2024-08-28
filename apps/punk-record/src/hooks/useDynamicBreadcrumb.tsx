import { RefObject, useCallback, useEffect, useState } from "react"

export const useDynamicBreadcrumb = <T extends HTMLElement>({ container }: { container: RefObject<T> }) => {
  const [breadcrumb, setBreadcrumb] = useState<Element[]>([])

  useEffect(() => {
    if (!container.current) return

    container.current.onscrollend = handleOnScrollEnd
  }, [container.current])

  const handleOnScrollEnd = useCallback((ev: Event) => {
    const tags = ["h1", "h2", "h3", "h4", "h5", "h6"]
    const tempBreadcrumb: Element[] = []
    tags.forEach((tag, index) => {
      const hTags = container.current!.querySelectorAll(tag)
      hTags.forEach((hTag) => {
        const nextTop = hTag.getBoundingClientRect().top
        if (Math.sign(nextTop) === -1) {
          if (tempBreadcrumb[index]) {
            const prevTop = tempBreadcrumb[index].getBoundingClientRect().top
            if (nextTop > prevTop) tempBreadcrumb[index] = hTag
          } else tempBreadcrumb[index] = hTag
        }
      })
    })
    setBreadcrumb(tempBreadcrumb)
  }, [])

  return {
    breadcrumb,
  }
}
