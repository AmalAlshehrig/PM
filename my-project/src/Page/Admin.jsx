import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const [Ideas, setIdeas] = useState([]);
  const [User, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getIdeas();
    getUser();
  }, []);

  const getIdeas = () => {
    axios.get("https://6572ffb0192318b7db415faf.mockapi.io/Ideas")
      .then(res => setIdeas(res.data))
      .catch(error => console.error("Error fetching ideas data:", error));
  };

  const getUser = () => {
    axios.get(`https://6572ffb0192318b7db415faf.mockapi.io/user`)
      .then(res => setUser(res.data))
      .catch(error => console.error("Error fetching user data:", error));
  };

  const handleAcceptance = (id) => {
    axios.put(`https://6572ffb0192318b7db415faf.mockapi.io/Ideas/${id}`, {
      status: 'Accepted'
    })
      .then(() => {
        getIdeas();
      })
      .catch(error => console.error("Error updating idea:", error));
  };

  const handleRejection = (id) => {
    const reason = prompt("أدخل سبب الرفض:");
    if (reason !== null) {
      axios.put(`https://6572ffb0192318b7db415faf.mockapi.io/Ideas/${id}`, {
        status: 'Rejected',
        reason: reason,
      })
        .then(() => {
          getIdeas();
        })
        .catch(error => console.error("Error updating idea:", error));
    }
  };

  const handleSearch = () => {
    const filteredIdeas = User.filter(item => item.UserName.toLowerCase().includes(searchTerm.toLowerCase()));
    setUser(filteredIdeas);
  };
  const handleDelete = (id) => {
    axios.delete(`https://6572ffb0192318b7db415faf.mockapi.io/user/${id}`)
      .then(() => {
        getUser();
      })
      .catch(error => console.error("Error deleting user:", error));
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
        <div className='flex flex-col items-center'>
          <div className='flex flex-row'>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search for Name'
            />
            <button
              onClick={handleSearch}
              className='font-bold'>Search</button>
          </div>
          <div className='overflow-y-auto'>
            {User.map((item, index) => (
              <div key={index} className='border flex flex-col w-80 bg-[#F3F0CA] my-4 p-4 rounded-lg'>
                <div className='flex flex-col items-center'>
                  <h1 className='text-center font-bold text-xl'>{item.UserName}</h1>
                  <button className='font-bold border p-1 bg-red-400 rounded-lg ' onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className='h-screen overflow-y-auto'>
        <div className='flex flex-col items-center justify-evenly'>
          <div className=''>
            {Ideas.map((item, index) => (
              item.status !== 'Rejected' && (
                <div key={index} className='border flex flex-col w-80 bg-[#F3F0CA] my-4 p-4 rounded-lg'>
                  <div className='flex flex-col items-center'>
                    <h1 className='text-center font-bold text-xl'>{item.title}</h1>
                    <p className='text-center text-sm'>{item.des}</p>
                    <div className='flex flex-row space-x-2 p-2'>
                      <button
                        className='font-bold border p-2 bg-green-400 rounded-lg'
                        onClick={() => handleAcceptance(item.id)}>
                        Acceptance
                      </button>
                      <button
                        className='font-bold border p-2 bg-red-400 rounded-lg'
                        onClick={() => handleRejection(item.id)}>
                        Rejected
                      </button>
                    </div>
                    <Link to={`/edit-idea/${item.id}`} className='font-bold border p-2 bg-blue-400 rounded-lg'>
                      Edit
                    </Link>
                  </div>
                </div>
              )
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

export default Admin;
