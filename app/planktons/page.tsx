import { FloatingNav } from "@/components/ui/floating-navbar";
import  Hero  from "../../components/plankton/Hero";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import PlanktonGame from '../../components/plankton/plankton-game';  // Adjust the path based on your file structure
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Plankton as the Foundation of Marine Ecosystems",
    description:
      "Plankton are microscopic organisms that float in oceans and other water bodies, forming the base of the aquatic food chain. They are divided into two main categories: phytoplankton, which perform photosynthesis, and zooplankton, which feed on phytoplankton. These tiny creatures are essential for maintaining the balance of marine ecosystems, supporting a wide variety of species.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white ">
      <Image
        src="/Images/assests/t1.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Phytoplankton: The Ocean's Green Powerhouses",
    description:
      "Phytoplankton are plant-like organisms that use sunlight to produce energy through photosynthesis. They not only provide food for small marine animals like zooplankton but also contribute to producing a significant portion of the Earth's oxygen. These organisms play a crucial role in regulating atmospheric carbon dioxide levels, helping to mitigate climate change.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Images/timeline/pace_first_light_composite.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Plankton: The Tiny Drivers of the Carbon Cycle",
    description:
      "Plankton, especially phytoplankton, play a pivotal role in the Earth's carbon cycle. By absorbing carbon dioxide from the atmosphere and converting it into organic compounds, they help regulate global climate patterns. When plankton die, they sink to the ocean floor, trapping carbon and preventing it from re-entering the atmosphere. This process, known as the biological carbon pump, is essential for reducing greenhouse gas levels and maintaining Earth's habitability.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/Images/assests/ocean-carbon-cycle.png"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt=""
      />
    </div>
    ),
  },
  {
    title: "Zooplankton: The Connectors in the Food Web",
    description:
      "Zooplankton are animal plankton that feed on phytoplankton and, in turn, become food for larger organisms like fish and whales. They act as a vital link in transferring the energy produced by phytoplankton to higher trophic levels. Without zooplankton, many marine species would lose their primary food source, leading to potential ecosystem collapse.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src="/Images/assests/DelBayFoodWeb3.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
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
