"use client"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { choseongIncludes } from "es-hangul"
import Autosuggest, {
  ContainerProps,
  InputProps,
  RenderSuggestionParams,
  SuggestionsFetchRequestedParams,
} from "react-autosuggest"
import { useSearchListValue } from "@/contexts/useSearchListContext"
import { SearchItem } from "@/app/api/search/route"
import { DialogClose, DialogFooter } from "@repo/ui-shadcn/ui/dialog"
import { Button } from "@repo/ui-shadcn/ui/button"
import "./SearchDialogContent.css"

export const SearchDialogContent = () => {
  const router = useRouter()
  const searchList = useSearchListValue()
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState<SearchItem[]>(searchList)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  /**
   * 검색 결과를 렌더링합니다.
   */
  const renderSuggestion = (suggestion: SearchItem, params: RenderSuggestionParams) => {
    if (!suggestion) return null
    const delimiter = params.query.toLocaleLowerCase()
    const regex = new RegExp(`(?<=${delimiter})|(?=${delimiter})`)
    const parts = suggestion.text.toLocaleLowerCase().split(regex)

    const isMatched = (part: string, delimiter: string) => {
      if (part === delimiter) return true
      if (choseongIncludes(part, delimiter)) return true
      return false
    }

    return (
      <div className="p-2 overflow-y-scroll">
        {parts.map((part, index) => {
          if (parts.length === 1)
            return (
              <span key={index + part} className="font-normal">
                {part}
              </span>
            )
          return (
            <span
              key={index + part}
              className={`${isMatched(part, delimiter) ? "font-bold text-rose-300" : "font-normal"}`}
            >
              {part}
            </span>
          )
        })}
      </div>
    )
  }

  /**
   * 검색 제안을 패치 요청할 때 호출
   */
  const handleOnSuggestionsFetchRequested = (rqs: SuggestionsFetchRequestedParams) => {
    const text = rqs.value.toLowerCase()
    const filteredList = searchList.filter((item) => {
      return choseongIncludes(item.text, text) || item.text.toLowerCase().includes(text)
    })
    setList(filteredList)
    return filteredList
  }

  type TSuggestion = SearchItem
  const inputProps: InputProps<TSuggestion> = {
    onChange: (e) => {
      setInputValue((e.target as HTMLInputElement)?.value || (e.target as HTMLDivElement).textContent || "")
    },
    placeholder: "Search...",
    value: inputValue,
    className: "btn-common w-full border-0 focus:ring-2 bg-transparent py-4 m-0",
    ref: inputRef,
  }
  const containerProps: ContainerProps = {
    className: "w-full h-full",
  }

  if (isLoading)
    return (
      <div className="w-full h-full px-4">
        <p className="p-10">선택된 링크로 이동합니다~</p>
      </div>
    )

  return (
    <>
      <form className="w-full h-full overflow-hidden flex-1">
        <Autosuggest
          suggestions={list}
          inputProps={inputProps}
          containerProps={containerProps}
          onSuggestionsFetchRequested={handleOnSuggestionsFetchRequested}
          onSuggestionSelected={(_ev, props) => {
            setIsLoading(true)
            router.push(props.suggestion.link)
          }}
          getSuggestionValue={(suggestion) => suggestion.text}
          renderSuggestion={renderSuggestion}
          onSuggestionsClearRequested={() => setList(searchList)}
          shouldRenderSuggestions={(value) => {
            if (value && value.length > 0) return true
            return false
          }}
        />
      </form>
      <DialogFooter>
        <DialogClose>
          <Button>닫기</Button>
        </DialogClose>
      </DialogFooter>
    </>
  )
}
