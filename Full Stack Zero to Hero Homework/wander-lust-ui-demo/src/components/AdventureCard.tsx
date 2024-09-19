import React from "react";
import Image from "next/image";
import Link from "next/link";

function AdventureCard({
  img,
  title,
  url,
}: {
  img: string;
  title: string;
  url: string;
}) {
  return (
    <Link href={`/${url}`}>
      <div className="flex flex-col items-center">
        <Image
          src={`/${img}`}
          alt={title}
          width={200}
          height={250}
          className="rounded-3xl shadow-lg shadow-dark-700/70 hover:shadow-mid-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:blur-[1px] hover:opacity-90"
        />
        <h2 className="mt-4 text-center font-semibold text-dark-700 text-lg">{title}</h2>
      </div>
    </Link>
  );
}

export default AdventureCard;
