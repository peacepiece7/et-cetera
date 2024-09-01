import NavigationContentForDesktop from "./NavigationContentForDesktop"
import WithMediaQuery from "../WithMediaQuery"

export default function LeftSideBarNavigation(
  props: Readonly<{
    navChildren: React.ReactNode
    tocChildren: React.ReactNode
    activeTab: "nav" | "toc"
  }>,
) {
  return (
    <>
      <WithMediaQuery mediaQuery="(min-width: 768px)" mediaDefaultState={true} alternativeContent={null}>
        <NavigationContentForDesktop {...props} />
      </WithMediaQuery>
    </>
  )
}
