import { FloatingNav } from "@/components/ui/floating-navbar";
import  Hero  from "../../components/cloud/Hero";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import CloudGame from '../../components/cloud/cloud-game';  // Adjust the path based on your file structure
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "Clouds: Nature's Artistry in the Sky",
    description:
      "Clouds are visible masses of condensed water vapor floating in the atmosphere. They come in various shapes and sizes, ranging from fluffy cumulus clouds to wispy cirrus clouds. Clouds play a crucial role in the water cycle and influence weather patterns globally.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/c/c1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Clouds in the sky"
        />
      </div>
    ),
  },
  {
    title: "Types of Clouds: A Sky Full of Wonders",
    description:
      "Clouds can be classified into several types based on their appearance and altitude. From cumulus clouds that resemble cotton balls to stratus clouds that blanket the sky, each type plays a unique role in weather formation and forecasting.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/c/c2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Different types of clouds"
        />
      </div>
    ),
  },
  {
    title: "Cloud Formation: The Magic of Water Vapor",
    description:
      "Clouds form when moist air rises and cools, causing water vapor to condense into tiny droplets or ice crystals. This process is essential for precipitation and affects climate patterns worldwide. Understanding cloud formation helps meteorologists predict the weather.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/c/c3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Cloud formation process"
        />
      </div>
    ),
  },
  {
    title: "Clouds and Climate: Influencers of Weather",
    description:
      "Clouds significantly impact the Earth's climate. They can either cool the planet by reflecting sunlight or warm it by trapping heat. Understanding the role of clouds in the climate system is essential for climate change research and predictions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/assests/c/c4.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Clouds and climate"
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
    <CloudGame />

    <div className="w-full h-full">
      <StickyScroll content={content} />
    </div>
    


    </main>
    
  );
}
