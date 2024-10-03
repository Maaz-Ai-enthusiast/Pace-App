import { FloatingNav } from "@/components/ui/floating-navbar";
import  Hero  from "../../components/Hero";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";



export default function Home() {
  return (
    <main className="relative  flex justify-center items-center flex-col
    overflow-hidden mx-auto ">
    <FloatingNav navItems={[{
      name: "Pace",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Planktons",
      link: "/planktons",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Aerosol ",
      link: "/aerosols",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Clouds",
      link: "/clouds",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Ocean Ecosystem",
      link: "/ocean-ecosystem",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    }]}/>
    <Hero />
    


    </main>
    
  );
}
