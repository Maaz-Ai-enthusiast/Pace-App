import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import Image from "next/image";
export function SpotlightCloud() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  text-center items-center flex-col justify-center mx-auto relative z-10  w-full pt-20 md:pt-0">
        <Image src="https://salad-storage.s3.us-east-005.backblazeb2.com/pace+and+clouds.png" width={200} height={100} alt="cloud"/>
        <h1 className="text-4xl flex-wrap text-wrap w-full md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Smoke's <br />Impact on Clouds  <br /> 
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-3">
        Scientists use satellite data to better understand how smoke changes clouds in the Amazon. The next series of maps were acquired during the second half of 2015. Brown colors show the degree to which aerosols prevent the transmission of light (i.e., light is absorbed or scattered). Thicker aerosols over the Amazon are likely caused by fires.
        </p>
      </div>
    </div>
  );
}
