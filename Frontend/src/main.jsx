import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProcvider from './context/AuthProcvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProcvider>
      <div className='dark:bg-slate-900 dark:text-white'>
        <App />
      </div>
    </AuthProcvider>
  </BrowserRouter>
)
