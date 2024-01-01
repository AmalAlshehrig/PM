import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
function Login() {
    const[UserName,setUserName]=useState('')
    const[Password,setPassword]=useState('')
    const[data,setdata]=useState([])
    const nav=useNavigate()
    useEffect(() => {
     axios.get(`https://6572ffb0192318b7db415faf.mockapi.io/user`)
     .then(res=>setdata(res.data))
    }, [])
    const handleSubmit=()=>{
        const user=data.find(user=>user.UserName==UserName&&user.Password==Password)
        if(user){
            if(UserName=='AmalAlshehri'){
                nav('/Home')
            }else{
                nav('/HomeUser')
            }
        }else{
            alert("User Name or Password is not true")
        }
    }
  return (
    <div className='flex flex-row justify-between'>
       <div className='flex flex-col items-center justify-center bg-[#3876BF] h-screen max-sm:w-96 w-[90%] rounded-r-full space-y-4'>
       <input 
        value={UserName}
        onChange={(e)=>{setUserName(e.target.value)}} 
        placeholder='UserName' 
        className='border rounded-lg p-2'
        />
        <input 
        type='password'
        value={Password}
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder='Password' 
        className='border rounded-lg p-2'
        />
        <button
        onClick={handleSubmit}
        className='font-bold text-2xl text-white'
        >Submit</button>
    </div>
    <div className='flex flex-col items-end p-32 max-sm:p-0'>
      <img
      src="https://static.vecteezy.com/system/resources/previews/002/744/860/original/project-management-illustration-vector.jpg"
      className='w-[90%] max-sm:hidden'
      />
      </div>
    </div>
  )
}

export default Login