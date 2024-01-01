import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './signUp'
import Admin from './Admin'
import Student from './Student'
import EditIdea from './EditIdea'
function Rout() {
  return (
    <div className=''>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/LogIn" element={<Login/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/HomeUser' element={<Student/>}/>
            <Route path='/Home' element={<Admin/>}/>
            <Route path="/edit-idea/:id" element={<EditIdea/>} />
        </Routes>
    </div>
  )
}

export default Rout