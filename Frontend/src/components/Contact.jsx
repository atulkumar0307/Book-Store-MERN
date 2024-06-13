import React from 'react'
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='max-w-screen-sm pb-10 container mx-auto pt-[100px] px-10'>
        <h1 className="text-3xl font-bold mb-6 ">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
                <label className='block text-lg font-medium'>Name</label>
                <input type="text" placeholder='Enter your name' className='w-full border rounded-md p-2 outline-none focus:border-gray-500 dark:bg-slate-900 dark:text-white dark:focus:border-yellow-300' {...register("text", { required: true })}/>
                {errors.text && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div>
                <label className='block text-lg font-medium'>Email</label>
                <input type="email" placeholder='Enter your email' className='w-full border rounded-md p-2 outline-none focus:border-gray-500 dark:bg-slate-900 dark:text-white dark:focus:border-yellow-300' {...register("email", { required: true })}/>
                {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div>
                <label className='block text-lg font-medium'>Message</label>
                <textarea name='message' placeholder='Enter your message' rows="6" className='w-full border rounded-md p-2 outline-none focus:border-gray-500 dark:bg-slate-900 dark:text-white dark:focus:border-yellow-300'{...register("message", { required: true })}></textarea>
                {errors.message && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div>
                <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Contact