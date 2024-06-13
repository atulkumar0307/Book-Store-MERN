import React from 'react'
import { useAuth } from '../context/AuthProcvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = ()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logged out Successfully")
            // document.getElementById('my_modal_3').close(); 
            setTimeout(()=>{        
                window.location.reload();
            },1000)
        }catch(err){
            toast.error(err.message);
        }
    }
    return (
    <div>
        <button className="bg-red-500 text-white px-4 py-2  rounded-md cursor-pointer hover:bg-red-600 duration-300"
        onClick={handleLogout}>Logout</button>
    </div>
    )
}

export default Logout