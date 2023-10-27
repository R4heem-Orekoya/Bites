import React from 'react'

const Newsletter = () => {
  return (
    <section className='py-16 w-[1000px] max-w-[90%] mx-auto text-center'>
        <h2 className='text-4xl max-md:text-3xl font-bold mt-4 leading-[1.4]'>Subscribe To Our Newsletter</h2>
        <p className='w-[min(350px,100%)] mx-auto mt-4 text-lg max-lg:text-base max-md:text-sm font-medium my-10'>
            Get notification about tips, new Food and exclusive promo news just for you.
        </p>

        <form action="#" className='form flex max-sm:flex-col gap-2 p-2 w-[min(500px,100%)] mx-auto bg-white rounded-lg'>
            <input type="email" placeholder='Enter your email address' className='flex-1 p-3 text-lg'/>
            <button type='submit' className='max-sm:flex-1 px-4 py-3 bg-yellow-400 hover:bg-red-500 duration-300 text-lg font-bold text-white rounded-md'>SUBSCRIBE</button>
        </form>
    </section>
  )
}

export default Newsletter
