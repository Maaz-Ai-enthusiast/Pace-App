"use client";  // Ensures this component is a Client Component

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component for optimization

// Define the Plankton type
interface Plankton {
  id: number;
  top: string;
  left: string;
}

// Facts about plankton and the food web
const foodWebFacts = [
  "Plankton form the base of the ocean's food web!",
  "Zooplankton rely on plankton as their primary food source.",
  "Fish, birds, and marine mammals depend on plankton for survival.",
  "Healthy plankton populations support the entire marine ecosystem.",
  "Catching plankton helps sustain the oceanic food chain!"
];

const PlanktonGame = () => {
  const [planktons, setPlanktons] = useState<Plankton[]>(generatePlanktons(5)); // 5 planktons initially
  const [score, setScore] = useState<number>(0);
  const [currentFact, setCurrentFact] = useState<string>("Catch plankton to help marine life!");

  // Function to generate random planktons
  function generatePlanktons(num: number): Plankton[] {
    return Array.from({ length: num }, () => ({
      id: Math.random(),
      top: Math.random() * 80 + "vh",
      left: Math.random() * 80 + "vw",
    }));
  }

  // Function to handle clicking on planktons
  const catchPlankton = (id: number) => {
    setPlanktons(planktons.filter((plankton) => plankton.id !== id));
    setScore(score + 1);

    // Show a new fact when plankton is caught
    const newFact = foodWebFacts[Math.floor(Math.random() * foodWebFacts.length)];
    setCurrentFact(newFact);
  };

  // Regenerate planktons if all are caught
  useEffect(() => {
    if (planktons.length === 0) {
      setPlanktons(generatePlanktons(5));
    }
  }, [planktons]);

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700">
      {/* Introductory Description */}
      <h1 className="text-center text-4xl font-extrabold text-white mt-6 animate-pulse">
        Catch the Planktons!
      </h1>
      <p className="text-center text-white text-lg mt-4 max-w-md mx-auto">
        Plankton are vital to the ocean's food web. Zooplankton, fish, birds, and marine mammals depend on them for survival. By catching plankton, you're helping to sustain the entire marine ecosystem!
      </p>
      
      {/* Score and Current Fact */}
      <p className="text-center text-white text-2xl mt-4">Score: {score}</p>
      <p className="text-center text-white text-xl mt-2 italic">{currentFact}</p>

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
            src="/images/assests/plankton.png"  // Path to your plankton image
            alt="Plankton"
            width={50}  // Set width and height for the plankton image
            height={50}
            className="rounded-full"
          />
        </div>
      ))}

      <p className="text-center mt-8 text-white text-sm">
        Keep catching the planktons to increase your score and help marine life thrive!
      </p>
    </div>
  );
};

export default PlanktonGame;
