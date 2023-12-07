import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className='bg-gray-600 text-white text-3xl p-4'>
            User: {userid} 
        </div>
    </div>
  )
}

export default User