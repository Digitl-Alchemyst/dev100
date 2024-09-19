"use client";

import React from "react";

function TravelOptions({
  emoji,
  title,
  active,
  onClick,
}: {
  emoji: string;
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick} // Trigger the parent's onClick handler
      className={`flex flex-col justify-center items-center rounded-full w-20 h-32 shadow-md shadow-mid-800/60 cursor-pointer ${
        active ? "bg-accent1-500" : "bg-accent2-200"
      }`}
    >
      <p
        className={`text-2xl rounded-full p-2 m-4 ${
          active ? "bg-accent1-200/60" : "bg-accent1-600/20"
        }`}
      >
        {emoji}
      </p>
      <p
        className={`text-lg font-semibold pb-1 ${
          active ? "text-accent2-200" : "text-accent1-500"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default TravelOptions;
