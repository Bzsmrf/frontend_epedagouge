import React from 'react'
import styles from '../style';
const Contactus = ({show3,setShow3 }) => {
  const handleClose3 = () => setShow3(false);

  if (!show3) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
      <div className='w-[600px] flex flex-col h-full overflow-y-scroll  container::-webkit-scrollbar '>
      <div className={`flex-1 flex-col font-poppins bg-white p-2 rounded text-black ${styles.boxWidth}  ${styles.paddingX} ${styles.paddingY}`}>
      <button className='text-white place-self-end bg-red rounded py-2 px-2 ' onClick={handleClose3}>close</button>
        <h1 className={`font-semibold ss:text-[68px] text-[52px] ${styles.flexCenter}`}>
          Contact Us
        </h1>
       </div>
      </div>
    </div>
  )
}

export default Contactus