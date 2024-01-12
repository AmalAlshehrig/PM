import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
function SignUp() {
    const[UserName,setUserName]=useState('')
    const[Password,setPassword]=useState('')
    const[Email,setEmail]=useState('')
    const[PhoneNumber,setPhoneNumber]=useState('')
    const nav =useNavigate();
    const handleSubmit=()=>{
        if(UserName === " "|| Email === " " || Password === " " || PhoneNumber === " "){
            alert("Please fill all fieds")
        }else if(!/^[A-Z0-9._%+-]+@[a-z]+\.[A-Z]{2,4}$/i.test(Email)){
            alert("Please enter valid email")
        }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(Password)){
            alert("Please enter valid password")
        }else if(!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(PhoneNumber)){
            alert("Please enter valid Phone Number")
        }else{
            axios.post(`https://6572ffb0192318b7db415faf.mockapi.io/user`,{
                UserName: UserName,
                Password: Password,
                Email: Email,
                PhoneNumber: PhoneNumber
            })
            .then(res =>{
                console.log(res);
                if(UserName === "AmalAlshehri"){
                    nav('/Home')
                }else{
                    nav('/HomeUser')
                }
            })
        }
    }
  return (
    <div className='flex flex-row'>
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
        <input
        value={Email} 
        onChange={(e)=>{setEmail(e.target.value)}} 
        placeholder='Email' 
        className='border rounded-lg p-2'
        />
        <input
        value={PhoneNumber} 
        onChange={(e)=>{setPhoneNumber(e.target.value)}} 
        placeholder='PhoneNumber' 
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
export default SignUp