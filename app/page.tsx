import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import DevelopmentPhilosophies from "@/components/DevelopmentPhilosophies";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

import Landing from "@/components/Landing";

import NavBar from "@/components/ui/Navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex
      justify-center items-center flex-col overflow-clip
      mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar navItems={navItems} />
        <Landing />
        <Grid />
        <RecentProjects />
        <DevelopmentPhilosophies />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
