import React from "react";
import Image from "next/image";
import Link from "next/link";

function AdventureCard({img, title, url}: {img: string, title: string, url: string}) {
  return (
    <Link href={`/${url}`}>
      <div>
        <Image src={`/${img}`} alt="card image" width={200} height={250} className="rounded-3xl shadow-lg shadow-dark-700/70" />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default AdventureCard;
