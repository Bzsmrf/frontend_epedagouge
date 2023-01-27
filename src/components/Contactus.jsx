import React from 'react'

const Contactus = ({show3,setShow3 }) => {
  const handleClose3 = () => setShow3(false);

  if (!show3) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] flex flex-col'>
        <button className='text-white place-self-end' onClick={handleClose3}>X</button>
        <div className='bg-white p-2 rounded text-black'>
          Contactus
        </div>
      </div>
    </div>
  )
}

export default Contactus