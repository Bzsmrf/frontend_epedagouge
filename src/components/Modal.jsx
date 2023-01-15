import React from 'react'

const Modal = ({show,setShow }) => {
  const handleClose = () => setShow(false);

  if (!show) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] flex flex-col'>
        <button className='text-white place-self-end' onClick={handleClose}>X</button>
        <div className='bg-white p-2 rounded'>
          Modal
        </div>
      </div>
    </div>
  )
}


export default Modal