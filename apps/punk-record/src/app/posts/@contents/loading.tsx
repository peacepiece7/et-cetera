"use client"
import React from "react"
import { ContentsLoading } from "@/components/loading/ContentsLoading"
import { NavigationLoading } from "@/components/loading/NavigationLoading"
import { PostPageLayoutLoading } from "@/components/loading/PostPageLayoutLoading"
import { useMedia } from "react-use"

export default function PostLoadingPage() {
  const isWide = useMedia("(min-width: 768px)", true)

  return (
    <>
      <NavigationLoading />
      <PostPageLayoutLoading>
        <ContentsLoading />
      </PostPageLayoutLoading>
    </>
  )
}
