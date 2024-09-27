import React, { useContext, useState } from 'react'
import userContext from '../Context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password})
        console.log("Handle Submit")
    }

  return (
    <div className='mb-4'>
        <input 
            className='border-2 border-gray-300 rounded-lg overflow-hidden px-2 mr-4'
            type="text" 
            placeholder='Username' 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
        />
        <input 
            className='border-2 border-gray-300 rounded-lg overflow-hidden px-2 mr-4'
            type="text" 
            placeholder='Password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        />
        <button 
            className='bg-blue-500 text-white rounded-lg py-1 px-3 '
            onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login