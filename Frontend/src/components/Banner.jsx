import React from 'react'
import banner_img from '../../public/Banner.png'

function Banner() {
  return (
    <>
    <div className="mx-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row md:my-10">
        <div className='order-2 md:order-1 w-full md:w-1/2 space-y-10 mt-8 md:mt-32 '>
            <div className=' text-4xl md:text-5xl font-bold'>
                <h1>Hello, Welcome here to learn something <span  className='text-yellow-500'>new Everyday!!!</span></h1>
            </div>
            <div>
                <p className='text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus ullam at sapiente. Excepturi eligendi pariatur accusantium, delectus vitae nesciunt!
                </p>
            </div>
            <div  className='space-y-8'>
                <div>
                    <label className="input input-bordered flex items-center gap-2 w-full md:w-2/3 dark:bg-slate-900 dark:text-white dark:border dark:border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
                    <button className="btn btn-warning">Subscribe</button>
                <div>
                </div>
            </div>
        </div>
        {/* <div className='order-1 md:order-2 w-full md:w-1/2 mt-12 pl-10 pt-10'><img src={banner_img} alt="Banner_image" /></div> */}
        <div className="order-1 md:order-2 w-full md:w-1/2 mt-12 ">
            <img src={banner_img} alt="Banner_image" className="w-full h-full object-cover" />
        </div>

    </div>
    </>
  )
}

export default Banner