// في ملف EditIdea.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const EditIdea = ({ match }) => {
    const { id } = useParams();
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  useEffect(() => {
    axios.get(`https://6572ffb0192318b7db415faf.mockapi.io/Ideas/${id}`)
      .then(res => {
        setEditedTitle(res.data.title);
        setEditedDescription(res.data.des);
      })
      .catch(error => console.error("Error fetching idea data:", error));
  }, [id]);

  const handleUpdate = () => {
    axios.put(`https://6572ffb0192318b7db415faf.mockapi.io/Ideas/${id}`, {
        title: editedTitle,
        des: editedDescription,
    })
    .then(() => {
      console.log('Idea updated successfully');
    })
    .catch(error => console.error("Error updating idea:", error));
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
      <div className='flex flex-col items-center justify-center p-20'>
      <input
      className='border w-80'
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        placeholder='Title'
      />
      <textarea
      className='border w-80 h-80'
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
        placeholder='Description'
      />
      <div className='flex flex-row'>
      <button 
      className='font-bold border p-1 bg-green-400 rounded-lg'
      onClick={handleUpdate}>Update</button>
      <Link to={'/Home'}>
      <button 
      className='font-bold border p-1 bg-blue-400 rounded-lg'
      >Back</button>
      </Link>
      </div>
      </div>
      <div className='flex items-center justify-evenly bg-[#3876BF] w-full h-12 rounded-t-full max-sm:h-12'>
        <div className='text-center font-bold text-xl max-sm:text-xs text-white'>
          <h1>© 2023</h1>
        </div>
      </div>
    </>
  );
};
export default EditIdea;