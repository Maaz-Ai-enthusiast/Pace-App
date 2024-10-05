"use client"; // Ensures this component is a Client Component

import { useState } from "react";
import '../cloud/style.css'; // Ensure this path is correct

const cloudFacts = [
  "Clouds are made up of tiny water droplets or ice crystals.",
  "There are many types of clouds, including cumulus, stratus, and cirrus.",
  "Clouds play a critical role in the Earth's water cycle.",
  "Some clouds can produce precipitation, such as rain or snow.",
  "The color of clouds can indicate weather conditions; dark clouds often mean rain.",
  "Clouds can reflect sunlight, which helps cool the Earth's surface.",
  "High-altitude clouds can be composed of ice crystals.",
  "Clouds can form at different altitudes, affecting weather patterns.",
  "Fog is a type of cloud that forms near the Earth's surface.",
  "Clouds can influence climate change by trapping heat in the atmosphere.",
  "Different cloud formations can indicate different types of weather.",
  "Some clouds can lead to severe weather conditions, such as thunderstorms.",
  "Clouds can cover large areas, impacting temperature and sunlight.",
  "The amount and type of clouds can change rapidly, indicating dynamic weather.",
  "Cloud seeding is a technique used to modify weather by inducing rainfall."
];

// Define the CloudGame component
const CloudGame = () => {
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [cloudVisible, setCloudVisible] = useState(false);
  const [currentCloudFact, setCurrentCloudFact] = useState("");

  // Function to create clouds based on humidity and pressure
  const createCloud = () => {
    console.log("Humidity:", humidity, "Pressure:", pressure); // Log values
    if (humidity > 70 && pressure < 50) {
      setCloudVisible(true);
      console.log("Cloud created!"); // Log cloud creation
      setCurrentCloudFact(getRandomFact(cloudFacts)); // Set a random cloud fact
    } else {
      setCloudVisible(false);
      console.log("Cloud not created."); // Log failed attempt
    }
  };

  // Function to get a random fact from an array
  const getRandomFact = (facts: string[]): string => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
};


// Function to simulate rain
const makeItRain = () => {
  const rainContainer = document.getElementById("rain-container");
  const cloudImage = document.querySelector("img[alt='Cloud']"); // Get the cloud image

  if (cloudImage) {
      const cloudRect = cloudImage.getBoundingClientRect(); // Get cloud's position
      const cloudBottom = window.innerHeight - cloudRect.top; // Distance from top of viewport to bottom of the cloud

      if (rainContainer && cloudVisible) {
          // Increase the number of raindrops by changing the loop iteration
          for (let i = 0; i < 100; i++) { // Change from 20 to 100 for more raindrops
              const rainDrop = document.createElement("div");
              rainDrop.className = "rain w-1 h-4 bg-blue-500 absolute"; // Style for each raindrop
              rainDrop.style.left = Math.random() * 100 + "vw"; // Random horizontal position across full width
              rainDrop.style.animationDuration = Math.random() * 1 + 0.5 + "s"; // Random duration
              rainDrop.style.bottom = (cloudBottom + 10) + "px"; // Start just below the cloud
              rainContainer.appendChild(rainDrop); // Append raindrop to container

              // Remove the raindrop after its animation
              setTimeout(() => {
                  rainDrop.remove();
              }, 4000); // Remove after 1500ms (1.5 seconds)
          }

          // Update the cloud fact when it rains
          const newFact = getRandomFact(cloudFacts); // Get a new random cloud fact
          setCurrentCloudFact(newFact); // Set the new fact in state
      } else {
          alert("Create a cloud first!");
      }
  }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black p-4 w-full">
      <h1 className="text-center text-4xl font-extrabold text-white mt-6 animate-pulse"> Play the Game</h1>
      <h1 className="text-3xl font-bold mb-4 text-white">Cloud Creator & Rain Simulator</h1>

      {/* Instructions Section */}
      <div className="mb-4 text-white text-lg">
        <h2 className="font-bold">How to Play:</h2>
        <ul className="list-disc ml-6">
          <li>Adjust the sliders for Temperature, Humidity, and Pressure.</li>
          <li>Click on "Create Cloud" to generate a cloud if conditions are met.</li>
          <li>Press "Make It Rain" to simulate rain falling from the cloud.</li>
        </ul>
      </div>

      {/* Current Cloud Fact Display */}
      {currentCloudFact && (
        <div className="text-white mb-4 p-2 border border-white rounded">
          <h2 className="font-bold">Did you know?</h2>
          <p>{currentCloudFact}</p>
        </div>
      )}

      <div className="flex flex-col space-y-4 mb-4 bg-gray-900 p-4 rounded-lg shadow-lg w-full max-w-md">
        <label className="flex flex-col text-white">
          Temperature:
          <input
            type="range"
            min="0"
            max="100"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
            className="mt-2 w-full" // Adjust width of slider
          />
        </label>
        <label className="flex flex-col text-white">
          Humidity:
          <input
            type="range"
            min="0"
            max="100"
            value={humidity}
            onChange={(e) => setHumidity(Number(e.target.value))}
            className="mt-2 w-full" // Adjust width of slider
          />
        </label>
        <label className="flex flex-col text-white">
          Pressure:
          <input
            type="range"
            min="0"
            max="100"
            value={pressure}
            onChange={(e) => setPressure(Number(e.target.value))}
            className="mt-2 w-full" // Adjust width of slider
          />
        </label>
      </div>
      <button
        onClick={createCloud}
        className="bg-green-500 text-white p-2 rounded mb-2 hover:bg-green-600"
      >
        Create Cloud
      </button>
      <button
        onClick={makeItRain}
        className="flex items-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        <img 
          src="/Images/assests/c/rain.png" // Path to your button image
          alt="Rain Icon"
          className="w-6 h-6 mr-2" // Adjust size as needed
        />
        Make It Rain
      </button>
      
      {/* Conditional rendering of the cloud image */}
      {cloudVisible && (
        <img 
          src="/Images/assests/c/h2.png" // Replace with the path to your cloud image
          alt="Cloud"
          className="w-50 h-40 my-4" // Adjust size as needed
        />
      )}

      <div id="rain-container" className="relative h-60 w-full justify-center"></div>
    </div>
  );
};

export default CloudGame;
