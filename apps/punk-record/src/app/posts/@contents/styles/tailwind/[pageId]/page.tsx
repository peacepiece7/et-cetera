import PostContentsContainer from "@/components/PostContentsContainer"
import { getFileNamesSafely, getPostFullPath } from "@/utils/server"

export default async function PostPage({
  params,
}: Readonly<{
  params: { pageId: string }
}>) {
  const MDXPage = await new Promise<React.ComponentType>((resolve) => {
    const postPath = getPostFullPath("styles", "tailwind", "[pageId]")
    const fileNames = getFileNamesSafely(postPath, "mdx")
    import(`./${fileNames[parseInt(params?.pageId) - 1 || 0]?.name}`).then((module) => {
      // console.log('module.METADATA : ', module.METADATA)
      resolve(module.default)
    })
  })

  return (
    <PostContentsContainer>
      <MDXPage />
    </PostContentsContainer>
  )
}
