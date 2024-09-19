import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineApps } from "react-icons/md";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import TravelOptions from "@/components/TravelOptions";
import Adventures from "@/components/Adventures";
export default function Home() {
  return (
    <div className="flex h-full bg-gradient-to-tl from-accent1-500/40 to-accent2-500/50 w-full ">
      <div className="w-full min-h-screen xl:flex items-center justify-center rounded-r-3xl shadow-2xl hidden relative ">
        <Image
          src="/wanderlust.jpg"
          alt="Description"
          fill
          className="object-cover rounded-r-3xl opacity-70 w-full absolute bg-gradient-to-b from-opacity-100 to-opacity-0"
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
      <div className=" flex flex-col justify-between  px-6 w-full max-w-3xl">
        {/* Header */}
        <header className="py-3 flex justify-between  items-center">
          <div className='flex flex-grow'>

            <MdOutlineApps className="h-8 w-8 text-dark-700" />
          </div>
          <div className=" flex space-x-4 items-center">
            <LuMapPin className="h-7 w-7 text-dark-700" />
          </div>
          <div className="flex justify-between flex-1 items-center">
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
        <div className="space-y-20 mt-8">
          <div className="flex flex-col space-y-8 flex-grow">
            <h1 className="text-4xl font-bold">Discover</h1>
            <Adventures />
          </div>

          {/* Bottom Section (not footer) */}
          <div className=" flex flex-col w-full justify-start items-center">
            <h3 className="text-3xl font-semibold mb-4 place-self-start border-b border-dark-400">
              Travel Packages
            </h3>
            <div className="flex space-x-12 px-4 mb-4 ">
              <TravelOptions />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="text-sm mt-auto pt-4 pb-2 flex justify-between items-center">
          <p>&copy; 2024 Travel Adventures</p>
          <div className="flex space-x-4 items-end">
            <BsTwitterX className="hover:text-accent2-600 hover:-translate-y-[5px] transition-all duration-300 ease-in-out cursor-pointer" />
            <BsFacebook className="hover:text-accent2-600 hover:-translate-y-[5px] transition-all duration-300 ease-in-out cursor-pointer" />
            <BsYoutube className="hover:text-accent2-600 hover:-translate-y-[5px] transition-all duration-300 ease-in-out cursor-pointer" />
            <BsInstagram className="hover:text-accent2-600 hover:-translate-y-[5px] transition-all duration-300 ease-in-out cursor-pointer" />
            <BsTiktok className="hover:text-accent2-600 hover:-translate-y-[5px] transition-all duration-300 ease-in-out cursor-pointer" />
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
  );
}
