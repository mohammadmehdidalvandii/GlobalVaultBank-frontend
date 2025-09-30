import React from 'react'
import { Link } from 'react-router-dom'

const NotFound:React.FC = ()=>{
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
            <h1 className="text-4xl font-bold font-interBold rtl:font-danaBold">404</h1>
            <p className="text-xl text-gray-600 mb-4">Oops ! Page not found</p>
            <Link to='/' className='text-blue-500 hover:text-blue-700 underline'>Return to Dashboard</Link>
        </div>
    </div>
  )
}

export default NotFound