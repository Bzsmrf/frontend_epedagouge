import React from 'react'
import styles from '../style';
import {cardsData1} from '../constants'
import { call } from '../assets';
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
        <div className="grid grid-cols-1 md:grid-row-2 lg:grid-row-2 gap-4 ">
             {cardsData1.map((card, index) => (
                <div className={`${styles.flexCenter}  `} key={index}>
                <div className='grid grid-cols-1 xs:grid-cols-2 '>
                <div className='h-[200px] w-[200px] mr-[10px] '> <img src={card.img}></img></div>
               
                 <div className='h-[200px] w-[200px] '>
                 <h1 className="text-lg font-medium  ">{card.title}
                 <p className={`text-black-700 text-[11px] bg-secondary rounded-lg py-[10px] px-[10px] ${styles.boxfix}`}>{card.description}</p>
                 </h1>
                 </div>
                
                </div>
                </div>
              ))}
          </div>
       </div>
      </div>
    </div>
  )
}

export default Contactus