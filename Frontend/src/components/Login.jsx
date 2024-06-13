import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
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
      email :data.email,
      password :data.password
    }
    await axios
    .post("http://localhost:3000/user/login", userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Login Successfully!');
        document.getElementById('my_modal_3').close();
        navigate(from ,{replace:true});
        setTimeout(()=>{
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        },1000)
      }
    }).catch((err)=> {
      if(err.response){
        console.log("Error: "+err);
        toast.error(err.response.data.message);
      }
    })
  }

  return (
    <>
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
            <h3 className="font-bold text-2xl text-center">Login</h3>
            <div className='flex flex-col'>
              <label className='pt-3 pb-1'>Email</label>
              <input type='email' placeholder='Enter your email' className='md:w-96 border rounded-md p-2 outline-none focus:border-gray-500 dark:bg-slate-900 dark:text-white dark:focus:border-yellow-300'
              {...register("email", { required: true })} />
              {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div className='flex flex-col pt-5'>
              <label className='p-1'>Password</label>
              <input type='password' placeholder='Enter your password' className='md:w-96 border rounded-md p-2 outline-none focus:border-gray-500 dark:bg-slate-900 dark:text-white dark:focus:border-yellow-300'
              {...register("password", { required: true })} />
              {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-between items-center mt-6 px-2 md:pr-6'>
            <button type='submit' className="btn btn-warning">Login</button>
            <span>Not registered? <Link to='/signup' className='cursor-pointer underline text-blue-500'>Signup</Link> </span>
            </div>
            </form>
        </div>
        </dialog>
    </>
  )
}

export default Login