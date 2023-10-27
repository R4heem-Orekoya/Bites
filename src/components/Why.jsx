import React from 'react'
import Order from '../assets/order.png'
import Reservation from '../assets/reservation.png'
import Support from '../assets/support.png'
import Kitchen from '../assets/kitchen.png'
import Superchef from '../assets/superchef.png'
import why from '../assets/why.jpg'

const Why = () => {
  return (
    <section className='py-16 w-[1000px] max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-8'>
        <div className='aspect-square'>
            <img src={why} alt="food-image" className='md:w-[96%] w-full h-full object-cover'/>
        </div>
        <div>
            <h2 className='text-4xl max-lg:text-3xl font-bold'>Why Should You Try</h2>
            <p className='text-lg max-lg:text-base max-md:text-sm font-medium my-10 '>
                This is a type of restaurant which typically serves
                food and drinks, in addition to light refreshments such 
                as baked goods or snacks. The term comes from the rench 
                meaning food. 
            </p>

            <div className='flex gap-6 flex-wrap items-center'>
                <div className='flex items-center gap-3'>
                    <div className='w-[50px] aspect-square rounded-full grid place-items-center p-3 border-dashed border-2 border-yellow-400'>
                        <img src={Order} alt="order-icon"/>
                    </div>
                    <h3 className='text-xl font-bold'>Online Order</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-[50px] aspect-square rounded-full grid place-items-center p-3 border-dashed border-2 border-yellow-400'>
                        <img src={Reservation} alt="order-icon"/>
                    </div>
                    <h3 className='text-xl font-bold'>Pre Reservation</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-[50px] aspect-square rounded-full grid place-items-center p-3 border-dashed border-2 border-yellow-400'>
                        <img src={Support} alt="support-icon"/>
                    </div>
                    <h3 className='text-xl font-bold'>24/7 Support</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-[50px] aspect-square rounded-full grid place-items-center p-3 border-dashed border-2 border-yellow-400'>
                        <img src={Kitchen} alt="kitchen-icon"/>
                    </div>
                    <h3 className='text-xl font-bold'>Organized Food Place</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-[50px] aspect-square rounded-full grid place-items-center p-3 border-dashed border-2 border-yellow-400'>
                        <img src={Kitchen} alt="kitchen-icon"/>
                    </div>
                    <h3 className='text-xl font-bold'>Clean Kitchen</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-[50px] aspect-square rounded-full grid place-items-center p-3 border-dashed border-2 border-yellow-400'>
                        <img src={Superchef} alt="order-icon"/>
                    </div>
                    <h3 className='text-xl font-bold'>Super Chefs</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Why
