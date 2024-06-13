import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
    
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },  
      } = useForm()
      const onSubmit = async (data) => {
        const userInfo = {
          fullname:data.fullname,
          email :data.email,
          password :data.password
        }
        await axios
        .post("http://localhost:3000/user/signup", userInfo)
        .then((res)=>{
          console.log(res.data);
          if(res.data){
            toast.success('Signup Successfully!');
            navigate(from ,{replace:true});
            setTimeout(()=>{window.location.reload()},1000)
          }
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }).catch((err)=> {
          if(err.response){
            console.log("Error: "+err);
            toast.error(err.response.data.message);

          }
        })
      }
  return (
    <>
        <div className="h-screen flex items-center justify-center bg-gray-200 dark:bg-slate-800">
        <div className=" modal-box border rounded-xl p-4 shadow-md  md:px-8 dark:bg-slate-900 dark:text-white dark:shadow-gray-400 dark:shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-2xl text-center">Signup</h3>
            <div className='flex flex-col'>
              <label className='pt-3 pb-1'>Name</label>
              <input type='fullname' placeholder='Enter your full name' className='md:w-96 border rounded-md p-2 outline-none focus:border-gray-500 dark:bg-slate-900 dark:focus:bg-slate-800 dark:text-white dark:focus:border-yellow-300'
              {...register("fullname", { required: true })}></input>
              {errors.fullname && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div className='flex flex-col'>
              <label className='pt-3 pb-1'>Email</label>
              <input type='email' placeholder='Enter your email' className='md:w-96 border rounded-md p-2 outline-none focus:border-gray-500 dark:bg-slate-900 dark:focus:bg-slate-800 dark:text-white dark:focus:border-yellow-300'
              {...register("email", { required: true })}></input>
              {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div className='flex flex-col pt-5'>
              <label className='p-1'>Password</label>
              <input type='Password' placeholder='Enter your password' className='md:w-96 border rounded-md p-2 outline-none focus:border-gray-500 dark:bg-slate-900 dark:focus:bg-slate-800 dark:text-white dark:focus:border-yellow-300'
              {...register("password", { required: true })}></input>
              {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-between items-center mt-6 px-2 md:pr-6'>
            <button type='submit' className="btn btn-warning">Signup</button>
            <span className='pl-4'>Already registered? <button onClick={()=>document.getElementById('my_modal_3').showModal()} className='cursor-pointer underline text-blue-500'>Login</button> </span>
            </div>
            </form>
            <Login />
        </div>
        </div>
    </>
  )
}

export default Signup