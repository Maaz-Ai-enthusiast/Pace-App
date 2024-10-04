import { FloatingNav } from "@/components/ui/floating-navbar";
import  Hero  from "../../components/ecocosystem/Hero";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import EcosystemGame from '../../components/ecocosystem/ecosystem-game';  // Adjust the path based on your file structure
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Ocean Ecosystem: The Blue Planet's Life Source",
    description:
      "The ocean ecosystem is a vast and complex network that supports a diverse array of life forms, from microscopic plankton to majestic whales. Covering more than 70% of the Earth's surface, oceans play a vital role in regulating the climate and providing resources for all living beings.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/eco/e1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Diverse ocean life"
        />
      </div>
    ),
  },
  {
    title: "Coral Reefs: The Rainforests of the Sea",
    description:
      "Coral reefs are among the most diverse ecosystems on the planet, housing thousands of marine species. These vibrant underwater structures are formed by tiny coral polyps and provide essential habitats for fish, invertebrates, and other ocean life. However, they are threatened by climate change and pollution.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/eco/e2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Coral reef ecosystem"
        />
      </div>
    ),
  },
  {
    title: "Marine Food Web: A Delicate Balance",
    description:
      "The ocean food web is a complex interconnection of various species, where energy is transferred from one organism to another. Phytoplankton, the primary producers, form the base of the food web, supporting a myriad of marine life, including fish, seabirds, and marine mammals.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/eco/e3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Marine food web"
        />
      </div>
    ),
  },
  {
    title: "Threats to Ocean Ecosystems: A Call to Action",
    description:
      "Ocean ecosystems face numerous threats, including overfishing, pollution, and climate change. These challenges disrupt marine life and can lead to irreversible damage. Conservation efforts are critical to preserving the health of our oceans for future generations.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/eco/e4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Threats to ocean ecosystems"
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
    <EcosystemGame />

    <div className="w-full h-full">
      <StickyScroll content={content} />
    </div>
    


    </main>
    
  );
}
