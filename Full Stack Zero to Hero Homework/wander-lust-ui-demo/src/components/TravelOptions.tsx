"use client";

import React, { useState } from "react";
import TravelOptionsButton from "./TravelOptionsButton"; // Importing your TravelOptions component

function TravelOptionsGroup() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track the active button index

  const travelOptions = [
          { emoji: "👬", title: "Group" },
          { emoji: "🌴", title: "Safari" },
          { emoji: "🚆", title: "Train" },
          { emoji: "🛳️", title: "Cruise" },
          { emoji: "💎", title: "Luxury" },
          { emoji: "⛰️", title: "Retreat" }
  ];

  const handleSetActive = (index: number) => {
    setActiveIndex(index); // Set the clicked button as active
  };

  return (
    <div className="flex space-x-4 flex-wrap">
      {travelOptions.map((option, index) => (
        <TravelOptionsButton
          key={index}
          emoji={option.emoji}
          title={option.title}
          active={activeIndex === index}
          onClick={() => handleSetActive(index)} // Pass the click handler with the index
        />
      ))}
    </div>
  );
}

export default TravelOptionsGroup;
