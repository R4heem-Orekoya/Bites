import React from 'react'
import { Instagram, Facebook, Twitter, Youtube, UtensilsCrossed } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='py-16 bg-red-500 text-white'>
        <div className='w-[min(1000px,90%)] mx-auto flex flex-wrap gap-8 justify-between items-center'>
            <div className='w-[min(450px,100%)] flex flex-col items-start gap-6'>
                <a href="#" className="text-3xl font-bold flex items-center flex-row-reverse gap-2">
                    Bites
                    <UtensilsCrossed size={35} strokeWidth={2.5} className='text-yellow-400'/>
                </a>
                <p className='text-xl max-sm:textlg font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil 
                    in eius facilis repudiandae corrupti! Eum expedita quidem laboriosam consequuntur?
                </p>
            </div>

            <ul className='flex items-center gap-6'>
                <li>
                    <a href="#"><Instagram size={30} strokeWidth={2} className='hover:text-yellow-400'/></a>
                </li>
                <li>
                    <a href="#"><Facebook size={30} strokeWidth={2} className='hover:text-yellow-400'/></a>
                </li>
                <li>
                    <a href="#"><Twitter size={30} strokeWidth={2} className='hover:text-yellow-400'/></a>
                </li>
                <li>
                    <a href="#"><Youtube size={30} strokeWidth={2} className='hover:text-yellow-400'/></a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
