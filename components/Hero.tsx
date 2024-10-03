"use client";

import Image from 'next/image';
import earthImg from '../public/Images/assests/earth.png';
import satelliteImg from '../public/images/assests/satellite.png';
import { Spotlight } from './ui/Spotlight';
import { AuroraBackground } from './ui/aurora-background';
import { TextGenerateEffect } from './ui/text-generate-effect';




const EarthOrbit = () => {
  return (
<div className="relative flex flex-col md:flex-row justify-center items-center w-full h-screen bg-black overflow-hidden m-0">

{/* Spotlights */}
<div className="absolute inset-0 pointer-events-none">
  <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
  <Spotlight className="top-10 left-full h-[80vh] w-[50vh]" fill="purple" />
  <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="seagreen" />
</div>

{/* Left Section: Earth orbit animation with grid background */}
<div className="relative flex justify-center items-center h-screen w-full md:w-1/2 dark:bg-black-100 bg-white bg-grid-black/[0.2] dark:bg-grid-white/[0.3]">
  {/* Radial gradient for the container to give a faded look */}
  <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>
  
  <div className="relative w-[300px] h-[300px] animate-rotate">
    <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full">
      <Image src={earthImg} alt="Earth" fill />
    </div>
    <div className="absolute top-[130%] left-1/2 w-[50px] h-[50px] -translate-x-1/2 -translate-y-1/2 origin-[150px]">
      <Image src={satelliteImg} alt="Satellite" fill />
    </div>
  </div>
</div>



{/* Right Section: Hero text */}


<div className="flex flex-col justify-center items-center h-screen w-full md:w-1/2 relative p-10">
  
  <p className="uppercase text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    This is how I revolve around our Earth
  </p>
  

  <TextGenerateEffect className='text-center text-[100px] md:text-5xl lg:text-9xl' words='This is how I revolve around our Earth'/>
</div>
</div>




  );
};

export default EarthOrbit;
