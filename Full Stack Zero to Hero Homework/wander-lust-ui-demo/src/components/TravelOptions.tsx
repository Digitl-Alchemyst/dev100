import React from "react";

function TravelOptions({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div className="flex flex-col justify-between items-center bg-accent2-200 py-4 px-2 rounded-full w-20 h-32 space-y-4">
      <p className="text-2xl bg-accent1-400 rounded-full p-3">{emoji}</p>
      <p className="text-lg text-accent1-500 font-semibold pb-1">{title}</p>
    </div>
  );
}

export default TravelOptions;
