import { fetchAPI } from "../../lib/api"
import { GlobalAttributes } from "../../context/GlobalContext"

export async function fetchGlobalData(): Promise<GlobalAttributes> {
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  })

  return {
    siteName: globalRes.data.attributes.siteName || "Default Site Name",
    defaultSeo: globalRes.data.attributes.defaultSeo || {
      metaTitle: "Default Title",
      metaDescription: "Default Description",
      shareImage: null,
    },
  }
}