import React, { useContext, useState } from 'react'
import UserContext from '../../Context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault
        setUser({username, password})
    }

  return (

                <div className='login mb-8 dark:text-white'>
                    <h1 className=" text-xl text-gray-900 dark:text-white font-md md:text-2xl mb-6">Login</h1>
                    <input type='text' className='p-2 rounded-sm border-2 mr-2 mb-3'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'></input>
                    <input type='text' className='p-2 rounded-sm border-2 mr-2 mb-3'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'></input>
                    <button className='text-white items-center px-6 py-3 font-medium bg-blue-500 rounded-lg hover:opacity-75' onClick={handleSubmit}>Submit</button>
                </div>
  
  )
}

export default Login