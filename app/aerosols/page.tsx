import { FloatingNav } from "@/components/ui/floating-navbar";
import  Hero  from "../../components/aerosal/Hero";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import PlanktonGame from '../../components/aerosal/aerosal-game';  // Adjust the path based on your file structure
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Aerosols: Tiny Particles with Big Impact",
    description:
      "Aerosols are tiny particles or droplets suspended in the air. These particles come from both natural and human-made sources, such as dust storms, sea spray, volcanic eruptions, and industrial pollution. Aerosols play a crucial role in climate regulation by affecting cloud formation and reflecting or absorbing sunlight.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/a/1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Aerosols in the atmosphere"
        />
      </div>
    ),
  },
  {
    title: "Natural Aerosols: Earth's Breath",
    description:
      "Natural aerosols include dust, sea salt, volcanic ash, and organic particles like pollen. These aerosols are crucial for the formation of clouds and precipitation. Without natural aerosols, weather patterns would drastically change, affecting the global water cycle and ecosystems.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/a/2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Natural aerosols"
        />
      </div>
    ),
  },
  {
    title: "Human-Made Aerosols: The Unseen Pollution",
    description:
      "Human activities, such as burning fossil fuels, industrial processes, and deforestation, release large amounts of aerosols into the atmosphere. These human-made aerosols contribute to air pollution and health problems, especially in urban areas. They can also affect climate by altering how much sunlight reaches the Earth's surface.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/a/3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Human-made aerosols"
        />
      </div>
    ),
  },
  {
    title: "Aerosols and Climate Change: A Double-Edged Sword",
    description:
      "Aerosols influence climate in complex ways. While some aerosols, like sulfur dioxide, reflect sunlight and have a cooling effect, others, like black carbon, absorb heat and contribute to warming. Understanding and managing aerosol emissions is critical for balancing their effects on climate change.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/a/4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Aerosols and climate change"
        />
      </div>
    ),
  },
];



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
    <PlanktonGame />

    <div className="w-full h-full">
      <StickyScroll content={content} />
    </div>
    


    </main>
    
  );
}
