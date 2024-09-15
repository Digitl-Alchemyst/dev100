import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineApps } from "react-icons/md";
export default function Home() {
  return (
    <div className='bg-light-400'>
      <div className="flex h-screen bg-gradient-to-tl from-accent1-500/40 to-accent2-500/50">
        <div className='w-7/12 relative flex items-center justify-center h-full rounded-r-3xl shadow-2xl '>
          <Image
            src='/wanderlust.jpg'
            alt='Description'
            fill
            className='object-cover rounded-r-3xl blur-sm'
          />
          <h2 className="absolute top-10 left-10 flex items-center justify-center text-4xl font-bold text-accent1-500">Wander Lust</h2>
          <div className='absolute flex items-center justify-center flex-col text-dark-900 space-y-6 px-12'>
            <h1 className='text-5xl font-bold'>Travel the most amazing places in the world</h1>
            <p className='text-xl font-semibold'>Adventure awaits you.</p>
            <button className='bg-accent2-300 px-4 py-3 rounded-lg border border-accent2-600'>Book your Trip</button>
          </div>
        </div>
        <div className=' w-5/12 flex flex-col justify-between pb-6 px-6 mb-20'>
          <header className='py-3 flex justify-between w-full items-center'>
            <div className='w-3/5 flex space-x-4 items-center'><MdOutlineApps className='h-8 w-8 text-dark-700' /><LuMapPin className='h-7 w-7 text-dark-700' /></div>
            <div className='flex justify-between flex-1 w-2/5 items-center '>
              <button>Gallery</button>
              <button>Stories</button>
              <button><Image
                src='/profile.webp'
                alt='profile'
                width={45}
                height={45}
                className='rounded-full border border-accent2-400'
              /></button>
            </div>
          </header>
          <div className='flex flex-col space-y-4'><h1 className='text-2xl'>Discover Adventure</h1>
            <div>Adventure Selector</div>
          </div>
            <div className='flex space-x-6'>
              <div>Card</div>
              <div>Card</div>
              <div>Card</div>
            </div>
          <div>
            <h3 className='text-4xl flex space-x-6'>Types of Travel</h3>
            <button>Group</button><button>Solo </button><button>Nature </button><button>Luxury</button>
          </div>
        </div>
      </div>
    </div>
  );
}