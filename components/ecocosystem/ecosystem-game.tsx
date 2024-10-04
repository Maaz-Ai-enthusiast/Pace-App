"use client"; // Ensures this component is a Client Component

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component for optimized images

// Define the Plankton type
interface Plankton {
  id: number;
  top: string;
  left: string;
}

const foodWebFacts = [
  "Plankton form the base of the oceans food web!",
  "Zooplankton rely on plankton as their primary food source.",
  "Fish, birds, and marine mammals depend on plankton for survival.",
  "Healthy plankton populations support the entire marine ecosystem.",
  "Catching plankton helps sustain the oceanic food chain!",
  "Phytoplankton use sunlight and carbon dioxide to produce energy, supporting the marine food web!",
  "Krill, a type of zooplankton, are a crucial food source for larger marine animals like whales.",
  "Coral reefs rely on plankton for nutrients, helping to maintain vibrant underwater ecosystems.",
  "Plankton blooms provide a seasonal feast for many species, from fish to seabirds.",
  "Many small fish, such as anchovies, feed directly on plankton to grow and thrive.",
  "Jellyfish play a key role in the food web by consuming plankton and small fish.",
  "Sea turtles feed on plankton, helping to balance the ocean's delicate ecosystem.",
  "Plankton migration is an important phenomenon that helps regulate oceanic food distribution.",
  "Without plankton, predators like sharks and dolphins would struggle to find enough food.",
  "Plankton are crucial in oxygen production, contributing up to 50% of Earth's breathable air!"
];


const EcosystemGame = () => {
  const [planktons, setPlanktons] = useState<Plankton[]>(generatePlanktons(5)); // Start with 5 planktons
  const [score, setScore] = useState<number>(0);
  const [currentFact, setCurrentFact] = useState<string>("Catch plankton to help marine life!");
  const [fishVisible, setFishVisible] = useState<boolean>(false); // Show fish or oxygen icon when planktons increase

  // State to manage counts of whales, fish, and O2 icons
  const [whaleCount, setWhaleCount] = useState<number>(0);
  const [fishCount, setFishCount] = useState<number>(0);
  const [oxygenCount, setO2Count] = useState<number>(0);
  const [carbonCount, setCO2Count] = useState<number>(0);
  

  // Function to generate random planktons within the container
  function generatePlanktons(num: number): Plankton[] {
    const containerHeight = 500; // Set container height
    const containerWidth = 500;  // Set container width
  
    return Array.from({ length: num }, () => ({
      id: Math.random(),
      top: Math.random() * (containerHeight - 50) + "px", // Prevent going out of bounds
      left: Math.random() * (containerWidth - 50) + "px", // Prevent going out of bounds
    }));
  }
  
 // Function to handle catching planktons
const catchPlankton = (id: number) => {
  setPlanktons(planktons.filter((plankton) => plankton.id !== id));
  setScore(score + 1);

  // Decrease counts of fish, whale, and oxygen as planktons are caught
  setFishCount(fishCount > 0 ? fishCount - 1 : 0);
  setWhaleCount(whaleCount > 0 ? whaleCount - 1 : 0);
  setO2Count(oxygenCount > 0 ? oxygenCount - 1 : 0);

  // **Increase** carbon count when a plankton is caught
  setCO2Count(carbonCount + 1);
  
  // Show a new fact when plankton is caught
  const newFact = foodWebFacts[Math.floor(Math.random() * foodWebFacts.length)];
  setCurrentFact(newFact);
};

  // Function to increase planktons (up arrow click)
  const increasePlanktons = () => {
    setPlanktons([...planktons, ...generatePlanktons(5)]); // Add 5 more planktons
    setFishVisible(true); // Show fish or oxygen when planktons increase

    // Increment the counts of whales, fish, and O2
    setWhaleCount(whaleCount + 1);
    setFishCount(fishCount + 1);
    setO2Count(oxygenCount + 1);
    setCO2Count(carbonCount - 10);
    
  };

// Function to decrease planktons (down arrow click)
const decreasePlanktons = () => {
  if (planktons.length > 5) {
    setPlanktons(planktons.slice(0, -5));

    // Decrease the counters when planktons decrease, ensuring they don't go below 0
    setFishCount(fishCount > 0 ? fishCount - 1 : 0);
    setWhaleCount(whaleCount > 0 ? whaleCount - 1 : 0);
    setO2Count(oxygenCount > 0 ? oxygenCount - 1 : 0);

    // **Increase** the carbon count when planktons decrease
    setCO2Count(carbonCount + 10);
  }
};

  // Regenerate planktons if all are caught
  useEffect(() => {
    if (planktons.length === 0) {
      setPlanktons(generatePlanktons(5));
    }
  }, [planktons]);

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 flex flex-col justify-center items-center">
  <div className="relative w-11/12 h-5/6  p-3 flex flex-col items-center">
    {/* Game Header */}
    <h1 className="text-center text-4xl font-extrabold text-white mt-6 animate-pulse">
      Catch the Planktons!
    </h1>
    <p className="text-center text-white text-lg mt-4 max-w-md">
      Plankton are vital to the oceans food web. Zooplankton, fish, birds, and marine mammals depend on them for survival. By catching plankton, you are helping sustain the entire marine ecosystem!
    </p>

    {/* Score and Current Fact */}
    <p className="text-center text-white text-2xl mt-4">Score: {score}</p>
    <p className="text-center text-white text-xl mt-2 italic">{currentFact}</p>

    {/* Control Arrows */}
    <div className="absolute top-10 right-10 flex flex-col items-center">
      {/* Up Arrow */}
      <button
        onClick={increasePlanktons}
        className="text-white text-4xl mb-2 hover:text-green-500 transition"
      >
        ⬆️
      </button>
      {/* Down Arrow */}
      <button
        onClick={decreasePlanktons}
        className="text-white text-4xl hover:text-red-500 transition"
      >
        ⬇️
      </button>
    </div>

    {/* Plankton Container */}
    <div className="relative flex-grow w-full max-w-[500px] h-full border-4 border-white rounded-lg overflow-hidden mt-8 bg-[url('/Images/assests/ocean-2.jpg')] bg-cover bg-center">
      {/* Planktons */}
      {planktons.map((plankton) => (
        <div
          key={plankton.id}
          onClick={() => catchPlankton(plankton.id)}
          className="absolute cursor-pointer transform hover:scale-125 transition-transform duration-200"
          style={{
            top: plankton.top,
            left: plankton.left,
          }}
        >
          <Image
            src="/Images/assests/plankton.png" // Path to your plankton image
            alt="Plankton"
            width={50} // Set width and height for the plankton image
            height={50}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Icons Section - Make this appear below on mobile */}
  <div className="relative mt-4 flex space-x-4 md:absolute md:bottom-20 md:left-10 md:space-x-4 flex-wrap justify-left w-19 ">
    {fishVisible && (
      <div className="flex flex-col items-center">
        <p className="text-white text-lg mb-1">{fishCount}</p> {/* Fish counter */}
        <Image
          src="/Images/assests/clown-fish.png"
          alt="Fish representing marine life"
          width={50}
          height={50}
          className="opacity-105"
        />
      </div>
    )}
    {fishVisible && (
      <div className="flex flex-col items-center">
        <p className="text-white text-lg mb-1">{oxygenCount}</p> {/* Oxygen counter */}
        <Image
          src="/Images/assests/o2.png"
          alt="Oxygen representing marine life"
          width={50}
          height={50}
          className="opacity-105"
        />
      </div>
    )}
    {fishVisible && (
      <div className="flex flex-col items-center">
        <p className="text-white text-lg mb-1">{whaleCount}</p> {/* Whale counter */}
        <Image
          src="/Images/assests/whale.png"
          alt="Whale representing marine life"
          width={50}
          height={50}
          className="opacity-105"
        />
      </div>
    )}
    {fishVisible && (
      <div className="flex flex-col items-center">
        <p className="text-white text-lg mb-1">{whaleCount}</p> {/* Whale counter */}
        <Image
          src="/Images/assests/oil-rig.png"
          alt="Oil rig"
          width={50}
          height={50}
          className="opacity-105"
        />
      </div>

      
    )}

    {fishVisible && (
      <div className="flex flex-col items-center">
        <p className="text-white text-lg mb-1">{carbonCount}</p> {/* Whale counter */}
        <Image
          src="/Images/assests/co2.png"
          alt="Oil rig"
          width={50}
          height={50}
          className="opacity-105"
        />
      </div>

      
    )}
  </div>
</div>

  );
};

export default EcosystemGame;
