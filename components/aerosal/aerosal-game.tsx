"use client"; // Ensures this component is a Client Component

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component for optimized images





// Define the Aerosol type
interface Aerosol {
  id: number;
  top: string;
  left: string;
}

const aerosolFacts = [
  "Aerosols can reflect sunlight and cool the Earth.",
  "Human activities such as industrial emissions contribute to aerosol levels.",
  "Natural events like volcanic eruptions release aerosols into the atmosphere.",
  "Aerosols can negatively impact air quality and human health.",
  "Tiny particles in aerosols can travel long distances through the atmosphere.",
  "Reducing aerosol pollution is key to improving air quality.",
  "Aerosols are vital for cloud formation, impacting the Earth's weather systems.",
  "Some aerosols, like black carbon, can accelerate global warming.",
  "Aerosols in the stratosphere can affect the Earth's climate for years.",
  "Airborne aerosols can reduce visibility, creating hazy skies.",
  "Indoor air pollution can also be caused by aerosols from household products.",
  "Aerosols are often associated with respiratory issues and lung diseases.",
  "Fine particulate matter (PM2.5) is one of the most harmful types of aerosols.",
  "Reducing aerosol emissions can help slow climate change.",
  "Natural ecosystems can also be affected by changes in aerosol concentrations."
];

const AerosolGame = () => {
  // Define state for aerosolAmount
  const [aerosolAmount, setAerosolAmount] = useState<number>(5); // Start with 5 aerosols
  const [aerosols, setAerosols] = useState<Aerosol[]>(generateAerosols(5)); // Start with 5 aerosols
  const [score, setScore] = useState<number>(0);
  const [currentFact, setCurrentFact] = useState<string>("Catch aerosols to clean the air!");
  const [factoryVisible, setFactoryVisible] = useState<boolean>(false); // Show factories or smog when aerosols increase

  // State to manage counts of trees, factories, and smog icons
  const [treeCount, setTreeCount] = useState<number>(0);
  const [factoryCount, setFactoryCount] = useState<number>(0);
  const [smogCount, setSmogCount] = useState<number>(0);
  const [airQualityIndex, setAirQualityIndex] = useState<number>(50); // Represents air quality

  // Function to generate random aerosols within the container
  function generateAerosols(num: number): Aerosol[] {
    const containerHeight = 500; // Set container height
    const containerWidth = 500;  // Set container width
  
    return Array.from({ length: num }, () => ({
      id: Math.random(),
      top: Math.random() * (containerHeight - 50) + "px", // Prevent going out of bounds
      left: Math.random() * (containerWidth - 50) + "px", // Prevent going out of bounds
    }));
  }

  // Function to handle catching aerosols
  const catchAerosol = (id: number) => {
    setAerosols(aerosols.filter((aerosol) => aerosol.id !== id));
    setScore(score + 1);

    // Decrease counts of factories, smog, and increase tree count as aerosols are caught
    setFactoryCount(factoryCount > 0 ? factoryCount - 1 : 0);
    setSmogCount(smogCount > 0 ? smogCount - 1 : 0);
    setTreeCount(treeCount + 1);
    
    // Decrease the air quality index when an aerosol is caught (better air quality)
    setAirQualityIndex(airQualityIndex > 0 ? airQualityIndex - 5 : 0);

    // Show a new fact when an aerosol is caught
    const newFact = aerosolFacts[Math.floor(Math.random() * aerosolFacts.length)];
    setCurrentFact(newFact);
  };

  // Function to increase aerosols (up arrow click)
  const increaseAerosols = () => {
    setAerosols([...aerosols, ...generateAerosols(5)]); // Add 5 more aerosols
    setFactoryVisible(true); // Show factories when aerosols increase

    // Increment the counts of factories and smog, and worsen air quality
    setFactoryCount(factoryCount + 1);
    setSmogCount(smogCount + 1);
    setAirQualityIndex(airQualityIndex + 10);
  };

  // Function to decrease aerosols (down arrow click)
  const decreaseAerosols = () => {
    if (aerosols.length > 5) {
      setAerosols(aerosols.slice(0, -5));

      // Decrease the counters when aerosols decrease, ensuring they don't go below 0
      setFactoryCount(factoryCount > 0 ? factoryCount - 1 : 0);
      setSmogCount(smogCount > 0 ? smogCount - 1 : 0);
      setTreeCount(treeCount > 0 ? treeCount - 1 : 0);

      // Improve air quality index when aerosols decrease
      setAirQualityIndex(airQualityIndex > 0 ? airQualityIndex - 10 : 0);
    }
  };

  // Regenerate aerosols if all are caught
  useEffect(() => {
    if (aerosols.length === 0) {
      setAerosols(generateAerosols(5));
    }
  }, [aerosols]);

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700 flex flex-col justify-center items-center">
      <div className="relative w-11/12 h-5/6 p-3 flex flex-col items-center">
        {/* Game Header */}
        <h1 className="text-center text-4xl font-extrabold text-white mt-6 animate-pulse">
          Clean the Air!
        </h1>
        <p className="text-center text-white text-lg mt-4 max-w-md">
          Aerosols are tiny particles that affect the climate and air quality. Catch aerosols to clean the atmosphere and help improve air quality for the planet!
        </p>

        {/* Score and Current Fact */}
        <p className="text-center text-white text-2xl mt-4">Score: {score}</p>
        <p className="text-center text-white text-xl mt-2 italic">{currentFact}</p>

              // Slider to control aerosol levels
      <div className="absolute top-10 right-10 flex flex-col items-center">
        <input
          type="range"
          min="5" // Minimum number of aerosols
          max="50" // Maximum number of aerosols
          value={aerosolAmount}
          onChange={(e) => {
            const newAerosolAmount = Number(e.target.value);
            setAerosolAmount(newAerosolAmount);

            // Adjust aerosols based on slider value
            if (newAerosolAmount > aerosols.length) {
              setAerosols([...aerosols, ...generateAerosols(newAerosolAmount - aerosols.length)]);
              setFactoryVisible(true);
              setFactoryCount(factoryCount + 1);
              setSmogCount(smogCount + 1);
              setAirQualityIndex(airQualityIndex + 10);
            } else if (newAerosolAmount < aerosols.length) {
              setAerosols(aerosols.slice(0, newAerosolAmount));
              setFactoryCount(factoryCount > 0 ? factoryCount - 1 : 0);
              setSmogCount(smogCount > 0 ? smogCount - 1 : 0);
              setTreeCount(treeCount > 0 ? treeCount - 1 : 0);
              setAirQualityIndex(airQualityIndex > 0 ? airQualityIndex - 10 : 0);
            }
          }}
          className="w-48"
        />
      </div>


        {/* Aerosol Container */}
        <div className="relative flex-grow w-full max-w-[500px] h-full border-4 border-white rounded-lg overflow-hidden mt-8 bg-[url('/Images/assests/sky.jpg')] bg-cover bg-center">
          {/* Aerosols */}
          {aerosols.map((aerosol) => (
            <div
              key={aerosol.id}
              onClick={() => catchAerosol(aerosol.id)}
              className="absolute cursor-pointer transform hover:scale-125 transition-transform duration-200"
              style={{
                top: aerosol.top,
                left: aerosol.left,
              }}
            >
              <Image
                src="/Images/assests/aerosol.png" // Path to your aerosol image
                alt="Aerosol"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Icons Section - Make this appear below on mobile */}
      <div className="relative mt-4 flex space-x-4 md:absolute md:bottom-20 md:left-10 md:space-x-4 flex-wrap justify-left w-19">
        {factoryVisible && (
          <div className="flex flex-col items-center">
            <p className="text-white text-lg mb-1">{factoryCount}</p> {/* Factory counter */}
            <Image
              src="/Images/assests/factory.png"
              alt="Factory representing pollution"
              width={50}
              height={50}
              className="opacity-105"
            />
          </div>
        )}
        {factoryVisible && (
          <div className="flex flex-col items-center">
            <p className="text-white text-lg mb-1">{smogCount}</p> {/* Smog counter */}
            <Image
              src="/Images/assests/smog.png"
              alt="Smog cloud"
              width={50}
              height={50}
              className="opacity-105"
            />
          </div>
        )}
        <div className="flex flex-col items-center">
          <p className="text-white text-lg mb-1">{treeCount}</p> {/* Tree counter */}
          <Image
            src="/Images/assests/tree.png"
            alt="Tree representing clean air"
            width={50}
            height={50}
            className="opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default AerosolGame;
