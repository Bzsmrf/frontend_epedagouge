import React from 'react'

const Career = ({show2,setShow2 }) => {
    const handleClose2 = () => setShow2(false);
  
    if (!show2) return null;
    return (
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] flex flex-col'>
          <button className='text-white place-self-end' onClick={handleClose2}>X</button>
          <div className='bg-white p-2 rounded text-black'>
            Career
          </div>
        </div>
      </div>
    )
  }
export default Career