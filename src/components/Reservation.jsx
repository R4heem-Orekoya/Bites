import React, { useState } from 'react'
// import ReservationImage from '../assets/reservation-image.png'
import ReservationImage from '../assets/hero2.png'
import { ChevronDown } from 'lucide-react'

const Reservation = () => {
    const [number, setNumber] = useState(2)
  return (
    <section className='py-16 w-[min(1000px,90%)] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4'>
        <div className='aspect-square'>
            <img src={ReservationImage} alt="reservation-image" className='w-full h-full object-cover max-md:object-contain max-sm:object-cover'/>
        </div>

        <div className='flex flex-col items-center'>
            <h2 className='text-[2.8rem] max-md:text-3xl max-md:text-center max-sm:text-2xl font-bold'>
                Do You Have Any Diner Plan Today? Reserve Your Table. 
            </h2>

            <div className='flex items-center gap-3 flex-wrap mt-10'>
                <div className='relative group py-2'>
                    <button className='flex items-center gap-4 px-4 py-2 my-auto rounded-3xl ring-2 ring-red-500 text-lg font-bold cursor-pointer'>
                        {number} people <ChevronDown size={15}/>
                    </button>

                    <ul className='absolute top-[60px] left-1/2 -translate-x-1/2  z-50 bg-white w-[95%] rounded-xl p-2 ring-2 ring-red-500 shadow-md hidden group-hover:block' >
                        <li onClick={() => setNumber(2)} className='hover:bg-stone-50 cursor-pointer rounded-lg py-1 px-2 text-sm'>
                            2 people
                        </li>
                        <li onClick={() => setNumber(3)} className='hover:bg-stone-50 cursor-pointer rounded-lg py-1 px-2 text-sm'>
                            3 people
                        </li>
                        <li onClick={() => setNumber(4)} className='hover:bg-stone-50 cursor-pointer rounded-lg py-1 px-2 text-sm'>
                            4 people
                        </li>
                        <li onClick={() => setNumber(5)} className='hover:bg-stone-50 cursor-pointer rounded-lg py-1 px-2 text-sm'>
                            5 people
                        </li>
                        <li onClick={() => setNumber(6)} className='hover:bg-stone-50 cursor-pointer rounded-lg py-1 px-2 text-sm'>
                            6 people
                        </li>
                    </ul>
                </div>
                <input type="date" className='ring-2 ring-red-500 px-3 py-2 rounded-3xl text-lg font-bold'/>
                <input type="time" className='ring-2 ring-red-500 px-3 py-2 rounded-3xl text-lg font-bold'/>
            </div>
        </div>
    </section>
  )
}

export default Reservation
