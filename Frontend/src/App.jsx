import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import Contact from './contacts/Contacts'
import Signup from './components/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProcvider'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/course" element={authUser? <Courses />: <Navigate to ="/signup"/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Toaster />
      </div>
    </> 
  )
}

export default App