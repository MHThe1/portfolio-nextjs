import Link from "next/link";

import { navItemsBlog } from "@/data";
import NavBar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative bg-white dark:bg-black-100 flex flex-col overflow-clip">
      <NavBar navItems={navItemsBlog} />
      <div>{children}</div>
      <Footer isBlog={true} />
    </main>
  );
}
