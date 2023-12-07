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

                <div className='login mb-8'>
                    <h1 className='text-2xl text-gray-900 font-bold md:text-4xl mb-6'>Login</h1>
                    <input type='text' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'></input>
                    <input type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'></input>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
  
  )
}

export default Login