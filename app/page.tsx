import { FloatingNav } from "@/components/ui/floating-navbar";
import  Hero  from "../components/Hero";
import Image from "next/image";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Timeline } from "@/components/ui/timeline";



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
    
    <Timeline data={[ {
      title: "Idea | 2007–2014",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Scientists wanted to learn more about Earth’s oceans and air, so they started thinking about building a special satellite called PACE.
          </p>
          <div className="grid grid-cols-1 gap-1">
       
            <Image
              src="/Images/timeline/history07_terra.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Designing the Satellite (2014–2017):",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Engineers worked on designing PACE, figuring out what tools it would need to take pictures and measure things from space.
          </p>
        
          <div className="grid grid-cols-1 gap-1">
            <Image
              src="/Images/timeline/pace_spectral_coverage_v0.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
        
          </div>
        </div>
      ),
    },{
      title: "Building the Tools (2015–2020):",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          The satellite’s tools, like cameras to take pictures of the oceans, clouds, and air, were built and tested.
          </p>
        
          <div className="grid grid-cols-1 gap-1">
            <Image
              src="/Images/timeline/2018.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
        
          </div>
        </div>
      ),
    },{
      title: "Putting Everything Together (2022–2023):",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          All the pieces of the satellite were connected and checked to make sure everything worked perfectly.This is the HARP2 calibration testing Setup with red light stills and video
          </p>
        
          <div className="grid grid-cols-1 gap-1">
            <Image
              src="/Images/timeline/harp.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
        
          </div>
        </div>
      ),
    },{
      title: "Getting Ready to Launch (2023):",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Scientists made the final preparations to send PACE into space.
          </p>
        
          <div className="grid grid-cols-1 gap-1">
            <Image
              src="/Images/timeline/2023.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
        
          </div>
        </div>
      ),
    },{
      title: "Launch (Planned for January 2024):",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          PACE is expected to blast off from Florida in January 2024 and start its mission in space!
          </p>
        
          <div className="grid grid-cols-1 gap-1">
            <Image
              src="/Images/timeline/launch.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
      
          </div>
        </div>
      ),
    },{
      title: "The Mission (2024–2029):",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Once in space, PACE will take pictures of the oceans and sky to help scientists understand how the Earth is changing, especially the oceans, which are super important for life.
          </p>
        
          <div className="grid grid-cols-1 gap-1">
            <Image
              src="/Images/timeline/pace_first_light_composite.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    
    
    
    
    ]}/>



    </main>
    
  );
}
