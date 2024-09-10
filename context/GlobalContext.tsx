'use client'

import React, { createContext } from 'react'

export interface GlobalAttributes {
  siteName: string
  defaultSeo: {
    metaTitle: string
    metaDescription: string
    shareImage: any
  }
}

const defaultGlobalContext: GlobalAttributes = {
  siteName: 'Default Site Name',
  defaultSeo: {
    metaTitle: 'Default Title',
    metaDescription: 'Default Description',
    shareImage: null,
  },
}

export const GlobalContext = createContext<GlobalAttributes>(defaultGlobalContext)

export const GlobalContextProvider: React.FC<{ value: GlobalAttributes; children: React.ReactNode }> = ({ value, children }) => {
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}