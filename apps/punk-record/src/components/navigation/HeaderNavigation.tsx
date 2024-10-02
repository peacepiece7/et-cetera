import React from "react"
import WithMediaQuery from "../WithMediaQuery"
import NavigationContentForMobile from "./NavigationContentForMobile"

export default function HeaderNavigation(
  props: Readonly<{
    navChildren: React.ReactNode
    tocChildren: React.ReactNode
    activeTab: "nav" | "toc"
  }>,
) {
  return (
    <>
      <WithMediaQuery mediaQuery="(max-width: 768px)" mediaDefaultState={true} alternativeContent={null}>
        <NavigationContentForMobile {...props} />
      </WithMediaQuery>
    </>
  )
}
