import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='flex items-center justify-around bg-[#3876BF] w-full h-12 rounded-b-full max-sm:h-12'>
        <div>
        <img
        className='w-12'
        src='https://cdn-icons-png.flaticon.com/512/4946/4946348.png'
        />
        </div>
        <div>
          <br></br>
        </div>
        <div>
          <br></br>
        </div>
        <div className='flex space-x-12 '>
        <Link to={'/SignUp'}>
          <div className='text-center font-bold text-xl max-sm:text-xs text-white'>
            <h1>SignUp</h1>
          </div>
        </Link>
        <Link to={'/LogIn'}>
          <div className='text-center font-bold text-xl max-sm:text-xs text-white'>
            <h1>LogIn</h1>
          </div>
        </Link>
        </div>
      </div>

      <div className='flex justify-around items-center max-sm:flex-col'>
      <div>
        <h1 className='text-6xl font-bold max-sm:text-4xl pl-12'>Project</h1>
        <h1 className='text-6xl font-bold max-sm:text-4xl max-sm:p-2 pl-12'>Management</h1>
        </div>
        <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/744/860/original/project-management-illustration-vector.jpg"
          className='max-w-full max-h-screen'
          alt="Project Management"
        />
        </div>
      </div>

      <div className='flex items-center justify-evenly bg-[#3876BF] w-full h-12 rounded-t-full max-sm:h-12'>
        <div className='text-center font-bold text-xl max-sm:text-xs text-white'>
          <h1>© 2023</h1>
        </div>
      </div>
    </>
  );
}

export default Home;