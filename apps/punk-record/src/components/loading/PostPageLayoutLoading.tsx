"use client"

import { Button } from "@repo/ui-shadcn/ui/button"

export function PostPageLayoutLoading({ children }: { children: React.ReactNode }) {
  return (
    <main className="global-layout">
      <div
        className={`flex flex-col h-full grow shrink rounded-xl shadow-md bg-white
        transition-all duration-500 ease-out
    `}
      >
        <div className="text-end py-4">
          <Button className="m-2" size="lg">
            Close
          </Button>
        </div>
        <div className="overflow-hidden h-full ">
          <div className="overflow-y-scroll h-full p-4">{children}</div>
        </div>
      </div>
    </main>
  )
}
