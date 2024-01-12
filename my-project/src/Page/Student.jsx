import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Student() {
  const [ideas, setIdeas] = useState([]);
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = () => {
    axios.get("https://6572ffb0192318b7db415faf.mockapi.io/Ideas")
      .then(res => setIdeas(res.data))
      .catch(error => console.error("Error fetching data:", error));
  };

  const handleSend = () => {
    axios.post('https://6572ffb0192318b7db415faf.mockapi.io/Ideas', {
      title: title,
      des: des,
      status: 'Pending',
    })
    .then(response => {
      console.log(response.data);
      fetchIdeas();
    })
    .catch(error => {
      console.error("Error sending data:", error);
    });

    setTitle('');
    setDes('');
  };

  return (
    <>
    <div className='flex items-center justify-evenly bg-[#3876BF] w-full h-12 max-sm:h-12 rounded-b-full'>
          <Link to={'/'}>
            <div className='text-center font-bold text-xl max-sm:text-xs text-white'>
              <h1>LogOut</h1>
            </div>
          </Link>
        </div>
        <div className='flex justify-evenly p-8 max-sm:flex-col'>
      <div className='flex flex-col items-center space-y-2'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border w-80 p-2'
          placeholder='Title'
        />
        <textarea
          value={des}
          onChange={(e) => setDes(e.target.value)}
          className='border w-80 h-80 p-2'
          placeholder='Description'
        />
        <button className='w-32 border rounded-full bg-[#F3F0CA] p-2 font-bold ' onClick={handleSend}>Send</button>
      </div>
      <div className='h-screen overflow-y-auto'>
        <div className='flex flex-col items-center justify-evenly'>
          <div className='flex flex-col space-y-2'>
            {ideas.map((item, index) => (
              <div key={index} className='border flex flex-col w-80 bg-[#F3F0CA] rounded-lg'>
                <div>
                  <h1 className='text-center font-bold text-xl p-2'>{item.title}</h1>
                  <p className='text-center text-sm p-4'>{item.des}</p>
                  <p className='text-center text-sm p-2'>Status: {item.status}</p>
                  {item.status === 'Rejected' && (
  <p className='text-center text-sm text-red-500'>Reason for Rejection: {item.reason}</p>
)}
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default Student;
