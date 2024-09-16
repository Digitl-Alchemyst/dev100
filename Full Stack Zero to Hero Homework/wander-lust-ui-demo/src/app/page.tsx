import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineApps } from "react-icons/md";
import AdventureCard from "@/components/AdventureCard";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import TravelOptions from "@/components/TravelOptions";
export default function Home() {
  return (
    <div className="bg-light-400">
      <div className="flex h-screen bg-gradient-to-tl from-accent1-500/40 to-accent2-500/50">
        <div className="w-7/12 relative flex items-center justify-center h-full rounded-r-3xl shadow-2xl ">
          <Image
            src="/wanderlust.jpg"
            alt="Description"
            fill
            className="object-cover rounded-r-3xl opacity-70"
          />
          <h2 className="absolute top-10 left-10 flex items-center justify-center text-4xl font-bold text-accent1-500">
            Wander Lust
          </h2>
          <div className="absolute flex items-center justify-center flex-col text-dark-900 space-y-6 px-12">
            <h1 className="text-5xl font-bold">
              Travel the most amazing places in the world
            </h1>
            <p className="text-xl font-semibold">Adventure awaits you.</p>
            <button className="bg-accent2-300 px-4 py-3 rounded-lg border border-accent2-600">
              Book your Trip
            </button>
          </div>
        </div>

        {/* Right Side  */}
        <div className="w-5/12 flex flex-col justify-between  px-6 h-screen">
          {/* Header */}
          <header className="py-3 flex justify-between w-full items-center">
            <div className="w-3/5 flex space-x-4 items-center">
              <MdOutlineApps className="h-8 w-8 text-dark-700" />
              <LuMapPin className="h-7 w-7 text-dark-700" />
            </div>
            <div className="flex justify-between flex-1 w-2/5 items-center">
              <button>Gallery</button>
              <button>Stories</button>
              <button>
                <Image
                  src="/profile.webp"
                  alt="profile"
                  width={45}
                  height={45}
                  className="rounded-full border border-accent2-400"
                />
              </button>
            </div>
          </header>

          {/* Main Content */}
          <div className="space-y-20 mt-12">
            <div className="flex flex-col space-y-8 flex-grow">
              <h1 className="text-4xl font-bold">Discover</h1>
              <div className="flex space-x-8 text-lg font-semibold">
                <p className="border-b-2 border-dark-500">Popular</p>
                <p className="border-b-2 border-dark-500">Adventure</p>
                <p className="border-b-2 border-dark-500">Tours</p>
              </div>
              <div className="flex space-x-6 overflow-scroll scrollbar-hide px-3 py-6">
                <AdventureCard img="ballon.avif" title="" url="" />
                <AdventureCard img="tower.avif" title="" url="" />
                <AdventureCard img="mountain.avif" title="" url="" />
              </div>
            </div>

            {/* Bottom Section (not footer) */}
            <div className=" flex flex-col w-full justify-start items-center">
              <h3 className="text-3xl font-semibold mb-4 place-self-start border-b border-dark-400">
                Travel Packages
              </h3>
              <div className="flex space-x-12 px-4">
                <TravelOptions emoji="👬" title="Group" />
                <TravelOptions emoji="🌴" title="Safari" />
                <TravelOptions emoji="🚆" title="Train" />
                <TravelOptions emoji="🛳️" title="Cruise" />
                <TravelOptions emoji="💎" title="Luxury" />
                <TravelOptions emoji="⛰️" title="Retreat" />
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="text-sm mt-auto pt-4 pb-2 flex justify-between items-center">
            <p>&copy; 2024 Travel Adventures</p>
            <div className="flex space-x-4 items-end">
              <BsTwitterX />
              <BsFacebook />
              <BsYoutube />
              <BsInstagram />
              <BsTiktok />
            </div>
            <div className="flex space-x-2 items-end">
              <p>Privacy </p>
              <p>Terms of Service </p>
              <p>About </p>
              <p>Contact</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
