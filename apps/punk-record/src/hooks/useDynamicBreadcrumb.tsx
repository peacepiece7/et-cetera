import { RefObject, useCallback, useEffect, useState } from "react"

export const useDynamicBreadcrumb = <T extends HTMLElement>({ container }: { container: RefObject<T> }) => {
  const [breadcrumb, setBreadcrumb] = useState<Element[]>([])

  useEffect(() => {
    if (!container.current) return

    // @TODO: debounce
    container.current.onscroll = handleOnScroll
  }, [container.current])

  const handleOnScroll = useCallback((_ev: Event) => {
    const tags = ["h1", "h2", "h3", "h4", "h5", "h6"]
    const tempBreadcrumb: Element[] = []
    tags.forEach((tag, index) => {
      const hTags = container.current!.querySelectorAll(tag)
      console.log("hTags: ", hTags)
      hTags.forEach((hTag) => {
        const nextTop = hTag.getBoundingClientRect().top
        if (Math.sign(nextTop) !== -1) return

        if (tempBreadcrumb[index]) {
          const prevTop = tempBreadcrumb[index].getBoundingClientRect().top
          if (nextTop > prevTop) {
            tempBreadcrumb[index] = hTag
          } else {
            //
          }
        } else {
          tempBreadcrumb[index] = hTag
        }
      })
    })
    setBreadcrumb(tempBreadcrumb)
  }, [])

  return {
    breadcrumb,
  }
}
