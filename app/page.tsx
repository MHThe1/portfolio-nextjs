import Intro from "@/components/Intro"
import RecentProjects from "@/components/RecentProjects"
import DevelopmentPhilosophies from "@/components/DevelopmentPhilosophies"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"
import Landing from "@/components/Landing"
import NavBar from "@/components/ui/Navbar"
import { navItems } from "@/data"

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black-100 flex flex-col overflow-clip">
      <NavBar navItems={navItems} />
      <Landing />
      <Intro />
      <RecentProjects />
      <DevelopmentPhilosophies />
      <Experience />
      <Footer />
    </main>
  )
}