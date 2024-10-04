import { CompareCloud } from "@/components/Cloud";
import { SpotlightCloud } from "@/components/CloudHeading";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";


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

    <div className="  text-center items-center justify-center">
      <SpotlightCloud/>
    <Image
                src={"https://salad-storage.s3.us-east-005.backblazeb2.com/what+are+clouds.png"}
                alt="cloud"
                width={550} 
                height={350}
                className="rounded-md p-2 flex items-start"
              />
               <div className="flex text-wrap justify-evenly max-w-2xl">
      <div className="flex mx-3 mb-7 items-center justify-center  text-wrap text-center max-w-2xl">
        <p className=" text-center"> How Clouds are formed? When water vapor in the atmosphere condenses. Dependent on factors such as the temperature, they may be formed of liquid water droplets, ice crystals, or a mixture of both.</p>
      </div> </div>
      <div className="flex items-center  font-serif  p-4 justify-evenly  ">
        <p> 2000-03</p>
        <p> 2016-06</p>

      </div>
    <CompareCloud/>
    </div>


    <div className="flex mx-3 mb-24 text-wrap justify-evenly max-w-2xl">
      <p>Scientists use satellite data to better understand how smoke changes clouds in the Amazon. The next series of maps were acquired during the second half of 2015. Brown colors show the degree to which aerosols prevent the transmission of light (i.e., light is absorbed or scattered). Thicker aerosols over the Amazon are likely caused by fires.</p>
    </div>



    </main>
    
  );
}
