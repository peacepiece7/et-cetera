import { useEffect, useLayoutEffect, useState } from "react"

/**
 * @description 실행 환경이 브라우저인지 확인할 수 있습니다.
 */
export const useIsBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false)
  const [isBrowserBeforeMount, setIsBrowserBeforeMount] = useState(false)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    setIsBrowserBeforeMount(() => true)
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    setIsBrowser(() => true)
  }, [])

  return { isBrowser, isBrowserBeforeMount }
}
