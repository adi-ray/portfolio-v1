import { CustomDock } from "@/components/CustomDock";
import { Meteors } from "@/components/ui/meteors";
import Intro from "@/sections/Intro";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import WorkExperience from "@/sections/WorkExperience";
import ContactMe from "@/sections/ContactMe";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="relative lg:w-8/12 md:w-7/12 sm:w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 md:pb-4 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full overflow-hidden">
        <Meteors />
        <Intro />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
        <CustomDock />
      </main>
    </div>
  );
}
