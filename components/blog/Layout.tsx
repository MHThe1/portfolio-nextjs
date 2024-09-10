import React from "react"
import Nav from "./Nav"

interface Category {
  id: number;
  attributes: {
    slug: string;
    name: string;
  }
}

interface LayoutProps {
  children: React.ReactNode;
  categories: Category[];
  seo?: any; // You might want to define a more specific type for seo
}

const Layout: React.FC<LayoutProps> = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
)

export default Layout