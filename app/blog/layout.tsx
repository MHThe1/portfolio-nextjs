import Link from "next/link";

import { navItems } from "@/data";
import NavBar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative bg-white dark:bg-black-100 flex flex-col overflow-clip">
      <NavBar navItems={navItems} />
      <div className="container mx-auto px-6 py-8">{children}</div>
      <Footer isBlog={true} />
    </main>
  );
}
