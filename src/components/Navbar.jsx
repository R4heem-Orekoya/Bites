import React, { useState } from 'react'
import { Menu, X, UtensilsCrossed } from 'lucide-react'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <header className='w-screen h-[80px] bg-white sticky top-0 z-50 shadow-sm'>
        <nav className='w-[1000px] max-w-[90%] mx-auto flex justify-between items-center h-full'> 
            <a href="#" className="text-3xl font-bold flex items-center flex-row-reverse gap-2">
                Bites
                <UtensilsCrossed size={35} strokeWidth={2.5} className='text-yellow-400'/>
            </a>

            <ul className={`max-md:fixed max-md:top-[80px] max-md:border-b-[2px] max-md:border-b-slate-300 max-md:border-t-[2px] max-md:border-t-slate-300 ${isNavOpen ? 'max-md:left-0' : 'max-md:left-[-110%]'} duration-300 z-30 max-md:bg-stone-100 max-md:w-screen max-md:p-[5%] flex max-md:flex-col gap-6`}>
                <li><a href="#" className='text-lg font-medium text-slate-900 hover:text-yellow-400 duration-300'>Home</a></li>
                <li><a href="#" className='text-lg font-medium text-slate-900 hover:text-yellow-400 duration-300'>About</a></li>
                <li><a href="#" className='text-lg font-medium text-slate-900 hover:text-yellow-400 duration-300'>Menu</a></li>
                <li><a href="#" className='text-lg font-medium text-slate-900 hover:text-yellow-400 duration-300'>Reviews</a></li>
                <li><a href="#" className='text-lg font-medium text-slate-900 hover:text-yellow-400 duration-300'>Blog</a></li>
                <li><a href="#" className='text-lg font-medium text-slate-900 hover:text-yellow-400 duration-300'>Contact</a></li>
            </ul>

            <div className='cursor-pointer hover:text-yellow-400 md:hidden' onClick={() => setIsNavOpen(!isNavOpen)}>
                {isNavOpen? <X size={30}/> : <Menu size={30}/>}
            </div>
        </nav>
    </header>
  )
}

export default Navbar
