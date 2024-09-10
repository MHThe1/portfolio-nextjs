import { GlobalContextProvider, GlobalAttributes } from "../../context/GlobalContext"
import { fetchGlobalData } from "./layout-server"
import { BlogLayout } from '../../components/blog/BlogComponents'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const globalData: GlobalAttributes = await fetchGlobalData()

  return (
    <GlobalContextProvider value={globalData}>
      <BlogLayout>{children}</BlogLayout>
    </GlobalContextProvider>
  )
}