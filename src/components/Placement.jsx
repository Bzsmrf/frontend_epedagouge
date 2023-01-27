import React from 'react'

const Placement = ({show1,setShow1 }) => {
    const handleClose1 = () => setShow1(false);
  
    if (!show1) return null;
    return (
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] flex flex-col'>
          <button className='text-white place-self-end' onClick={handleClose1}>X</button>
          <div className='bg-white p-2 rounded text-black'>
            Palcement
          </div>
        </div>
      </div>
    )
  }

export default Placement