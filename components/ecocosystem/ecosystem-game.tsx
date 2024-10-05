"use client"; // Ensures this component is a Client Component
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component for optimized images

const oceanEcosystemFacts = [
  "The ocean ecosystem covers over 70% of the Earth's surface and is home to millions of species.",
  "Coral reefs act as vital underwater structures, providing habitat and protection for marine life.",
  "Fish are an essential part of the ocean ecosystem, contributing to the food web and maintaining balance.",
  "Seaweed and algae produce up to 70% of the oxygen we breathe through photosynthesis.",
  "Plankton, though tiny, form the foundation of the marine food web, supporting everything from fish to whales.",
  "Marine plants like seagrass provide shelter for species and help prevent coastal erosion.",
  "Predators such as sharks maintain the balance in the ocean ecosystem by controlling fish populations.",
  "Ocean currents distribute nutrients and heat, playing a key role in sustaining marine life.",
  "Marine mammals like whales and dolphins are top predators, helping to regulate populations of smaller species.",
  "The ocean’s nutrient cycle, from fish to plants and back, ensures life thrives at different levels of the food web.",
  "Oceans absorb a significant amount of carbon dioxide, helping regulate the Earth’s climate.",
  "Mangroves and coastal plants protect coastlines from storms while providing habitats for marine creatures.",
  "The health of the ocean ecosystem is closely linked to biodiversity and the survival of many species.",
  "Overfishing and pollution can disrupt the balance of the ocean ecosystem, leading to species decline.",
  "Marine food chains are interconnected, from microscopic plankton to the largest whales."
];

const EcosystemGame = () => {
  const [rotation, setRotation] = useState(0); // To handle rotation of ecosystem elements
  const [isPlaying, setIsPlaying] = useState(false); // To control the simulation state
  const [currentFact, setCurrentFact] = useState(""); // To display the current fact

  useEffect(() => {
    // Set the initial fact
    setCurrentFact(oceanEcosystemFacts[Math.floor(rotation / 10)]); // Set the current fact based on rotation
  }, [rotation]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Automatically update the slider and fact while playing
    if (isPlaying) {
      interval = setInterval(() => {
        setRotation((prev) => {
          const newValue = prev + 10; // Increment the slider value
          if (newValue > 150) {
            setIsPlaying(false); // Stop the simulation when max value reached
            return 150; // Ensure it does not exceed max
          }
          return newValue;
        });
      }, 1000); // Adjust speed of movement here (1 second)
    }

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [isPlaying]);

  // Slider change handler
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRotation(Number(e.target.value)); // Set the rotation to the slider value
  };

  // Calculate the visibility of each element based on the slider value
  const getVisibility = (threshold: number) => {
    return rotation < threshold ? 1 : 0; // Show the element if slider value is below the threshold, otherwise hide it
  };

  // Play Simulation handler
  const handlePlaySimulation = () => {
    setIsPlaying(true); // Start the simulation
  };

  return (
    <div className="gameContainer relative h-screen w-full bg-gradient-to-b from-blue-300 to-blue-700 flex flex-col justify-center items-center p-8">
      <h1 className="text-center text-4xl font-extrabold text-white mt-6 animate-pulse">Play Simulation</h1>
      <h1 className="text-center text-4xl font-extrabold text-white mt-6 animate-pulse">Ocean Ecosystem Simulation</h1>

      {/* Display Current Fact */}
      <div className="factDisplay bg-black bg-opacity-80 rounded-lg p-4 my-4 shadow-lg text-center">
        <p className="text-lg text-white">{currentFact}</p>
      </div>

      <div className="instructions bg-black bg-opacity-80 rounded-lg p-6 my-4 shadow-lg text-center">
        <p className="text-lg mb-2">Welcome to the Ocean Ecosystem Simulation!</p>
        <p className="mb-4">Use the slider below to explore the different layers of the ocean ecosystem. As you slide, various organisms will appear and disappear, demonstrating the food chain's dynamics.</p>
        <p className="font-semibold">Click the button to start the simulation!</p>
      </div>

      {/* Food Chain Layout */}
      <div className="oceanEcosystemLine flex justify-center items-center space-x-4 mb-6">
        {/* Sunlight - Always Visible */}
        <div className="oceanElement sunlight" style={{ opacity: 1 }}>
          <Image
            src="/Images/assests/sun.png" // Ensure you have a sunlight image
            alt="Sunlight"
            width={50}
            height={50}
          />
          <p>Sunlight</p>
        </div>
        
        {/* Arrow */}
        <span className="hidden md:block text-white text-2xl">➔</span>

        {/* Phytoplankton */}
        <div className="oceanElement phytoplankton" style={{ opacity: getVisibility(25) }}>
          <Image
            src="/Images/assests/plankton-1.png"
            alt="Phytoplankton"
            width={30}
            height={30}
          />
          <p className="hidden md:block">Phytoplankton<br/>(Producers)</p>
        </div>

        {/* Arrow */}
        <span className="hidden md:block text-white text-2xl">➔</span>

        {/* Zooplankton */}
        <div className="oceanElement zooplankton" style={{ opacity: getVisibility(50) }}>
          <Image
            src="/Images/assests/plankton.png" // Ensure you have a zooplankton image
            alt="Zooplankton"
            width={30}
            height={30}
          />
          <p className="hidden md:block">Zooplankton<br/>(Primary Consumers)</p>
        </div>

        {/* Arrow */}
        <span className="hidden md:block text-white text-2xl">➔</span>

        {/* Small Fish */}
        <div className="oceanElement smallFish" style={{ opacity: getVisibility(75) }}>
          <Image
            src="/Images/assests/small.png" // Ensure you have a small fish image
            alt="Small Fish"
            width={50}
            height={50}
          />
          <p className="hidden md:block">Small Fish<br/>(Secondary Consumers)</p>
        </div>

        {/* Arrow */}
        <span className="hidden md:block text-white text-2xl">➔</span>

        {/* Larger Fish */}
        <div className="oceanElement largerFish" style={{ opacity: getVisibility(100) }}>
          <Image
            src="/Images/assests/large.png" // Ensure you have a larger fish image
            alt="Larger Fish"
            width={50}
            height={50}
          />
          <p className="hidden md:block">Larger Fish<br/>(Tertiary Consumers)</p>
        </div>

        {/* Arrow */}
        <span className="hidden md:block text-white text-2xl">➔</span>

        {/* Top Predators */}
        <div className="oceanElement topPredators" style={{ opacity: getVisibility(125) }}>
          <Image
            src="/Images/assests/whale.png" // Ensure you have a top predator image
            alt="Top Predators"
            width={50}
            height={50}
          />
          <p className="hidden md:block">Top Predators<br/>(Quaternary Consumers)</p>
        </div>

        {/* Arrow */}
        <span className="hidden md:block text-white text-2xl">➔</span>

        {/* Decomposers */}
        <div className="oceanElement decomposers" style={{ opacity: getVisibility(150) }}>
          <Image
            src="/Images/assests/bacterias.png" // Ensure you have a decomposer image
            alt="Decomposers"
            width={50}
            height={50}
          />
          <p className="hidden md:block">Decomposers<br/>(Recyclers)</p>
        </div>
      </div>

      {/* Play Button */}
      <button onClick={handlePlaySimulation} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Start Simulation
      </button>

      {/* Slider Control */}
      <input
        type="range"
        min="0"
        max="150"
        value={rotation}
        onChange={handleSliderChange}
        className="slider w-full my-4"
      />
    </div>
  );
};

export default EcosystemGame;
