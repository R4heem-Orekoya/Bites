import React from 'react'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
const Socials = () => {
  return (
    <ul className='fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 px-4 py-8 max-md:hidden bg-yellow-400 text-white rounded-l-lg z-50'>
        <li>
            <a href="#"><Instagram size={25} strokeWidth={1.5}/></a>
        </li>
        <li>
            <a href="#"><Facebook size={25} strokeWidth={1.5}/></a>
        </li>
        <li>
            <a href="#"><Twitter size={25} strokeWidth={1.5}/></a>
        </li>
        <li>
            <a href="#"><Youtube size={25} strokeWidth={1.5}/></a>
        </li>
    </ul>
  )
}

export default Socials
