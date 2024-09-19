"use client";

import React, { useState } from "react";
import AdventureCard from "./AdventureCard";

interface Adventure {
  id: string;
  img: string;
  title: string;
  url: string;
  category: string;
}

const adventures: Adventure[] = [
  {
    id: "1",
    img: "ballon.avif",
    title: "Hot Air Balloon Ride",
    url: "hot-air-balloon",
    category: "popular",
  },
  {
    id: "2",
    img: "mountain.avif",
    title: "Mountain Retreat",
    url: "mountain-retreat",
    category: "popular",
  },
  {
    id: "3",
    img: "tower.avif",
    title: "Eiffel Tower",
    url: "eiffel-tower",
    category: "popular",
  },
  {
    id: "4",
    img: "hike.avif",
    title: "Mountain Hiking",
    url: "mountain-hiking",
    category: "adventure",
  },
  {
    id: "5",
    img: "ski.avif",
    title: "Ski Retreat",
    url: "ski-retreat",
    category: "adventure",
  },
  {
    id: "6",
    img: "canyon.avif",
    title: "Wildlife Safari",
    url: "wildlife-safari",
    category: "adventure",
  },
  {
    id: "7",
    img: "snow.avif",
    title: "Highest Peaks",
    url: "everest",
    category: "tours",
  },
  {
    id: "8",
    img: "bay.avif",
    title: "Beach Paradise",
    url: "beach-paradise",
    category: "tours",
  },
  {
    id: "9",
    img: "city.avif",
    title: "City Tour Packages",
    url: "city-tour",
    category: "tours",
  },
];

function Adventures() {
  const [activeCategory, setActiveCategory] = useState("popular");

  const filteredAdventures = adventures.filter(
    (adventure) => adventure.category === activeCategory
  );

  return (
    <>
      <div className="flex space-x-8 text-lg font-semibold">
        {["popular", "adventure", "tours"].map((category) => (
          <p
            key={category}
            className={`cursor-pointer border-b-2  ${
              activeCategory === category
                ? "border-accent2-500 text-accent2-400 font-bold"
                : "border-dark-500 text-dark-400 font-semibold"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
        ))}
      </div>
      <div className="flex space-x-6 px-3">
        {filteredAdventures.map((adventure) => (
          <AdventureCard
            key={adventure.id}
            img={adventure.img}
            title={adventure.title}
            url={adventure.url}
          />
        ))}
      </div>
    </>
  );
}

export default Adventures;
