import React, { useEffect, useState } from 'react'
import Pizza from './Tabs/Pizza';
import Burger from './Tabs/Burger';
import Drink from './Tabs/Drink';
import Desert from './Tabs/Desert';
import HotDog from './Tabs/HotDog';

const tabs = {
    pizza: Pizza,
    burger: Burger,
    drink: Drink,
    desert: Desert,
    hotdog: HotDog,
}

const Menu = () => {
    const [currentTab, setCurrentTab] = useState('pizza');
    const Tab = tabs[currentTab]
  return (
    <section id='menu' className='py-16 w-[min(1000px,90%)] mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-4'>
        <div>
            <h2 className='text-[2.8rem] max-md:text-3xl max-md:text-center max-sm:text-2xl font-extrabold'>Our Regular Menu</h2>
            <p className='text-lg font-medium my-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Voluptatem delectus sequi atque dolores quis? Tenetur soluta 
                voluptatem quod dolorem. Voluptatem.
            </p>
            <div className='flex gap-4 flex-wrap my-8'>
                <button onClick={() => setCurrentTab('pizza')} className={`px-7 py-2 ring-2 ring-red-600 rounded-3xl text-lg font-bold hover:bg-red-600 hover:text-white ${currentTab === 'pizza'? 'text-white bg-red-600': 'text-red-600'}  duration-300`}>Pizza</button>
                <button onClick={() => setCurrentTab('burger')} className={`px-7 py-2 ring-2 ring-red-600 rounded-3xl text-lg font-bold hover:bg-red-600 hover:text-white ${currentTab === 'burger'? 'text-white bg-red-600': 'text-red-600'}  duration-300`}>Burger</button>
                <button onClick={() => setCurrentTab('drink')} className={`px-7 py-2 ring-2 ring-red-600 rounded-3xl text-lg font-bold hover:bg-red-600 hover:text-white ${currentTab === 'drink'? 'text-white bg-red-600': 'text-red-600'}  duration-300`}>Drink</button>
                <button onClick={() => setCurrentTab('desert')} className={`px-7 py-2 ring-2 ring-red-600 rounded-3xl text-lg font-bold hover:bg-red-600 hover:text-white ${currentTab === 'desert'? 'text-white bg-red-600': 'text-red-600'}  duration-300`}>Desert</button>
                <button onClick={() => setCurrentTab('hotdog')} className={`px-7 py-2 ring-2 ring-red-600 rounded-3xl text-lg font-bold hover:bg-red-600 hover:text-white ${currentTab === 'hotdog'? 'text-white bg-red-600': 'text-red-600'}  duration-300`}>Hot Dog</button>
            </div>
        </div>

        <div>
            <Tab />
        </div>
    </section>
  )
}



export default Menu
