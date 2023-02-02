import React from 'react'
import styles from '../style';
import { cR } from '../constants';
import Formcareer from './Formcareer'; 
import { useState } from "react";
const Career = ({show2,setShow2}) => {
  const [show6, setShow6] = useState(false);
  const handleShow6 = () => setShow6(true);
    
  const handleClose2 = () => setShow2(false);
    
    if (!show2) return null;
    return (
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
      <div className='w-[600px] flex flex-col h-full overflow-y-scroll  container::-webkit-scrollbar '>
      <div className={`flex-1 flex-col font-poppins bg-white p-2 rounded text-black ${styles.boxWidth}  ${styles.paddingX} ${styles.paddingY}`}>
      <button className='text-white place-self-end bg-red rounded py-2 px-2 ' onClick={handleClose2}>close</button>
        <h1 className={`font-semibold ss:text-[68px] text-[52px] ${styles.flexCenter}`}>
          Career
        </h1>
        <div className={`overflow-y-scroll flex-cols container::-webkit-scrollbar  text-black `}>
      {cR.map((feature) =>  (
        <div className={` font-poppins justify-items-center mx-1 mt-[50px] min-w-m bg-secondary rounded-lg py-2 px-2 xs:py-2 px-2 text-black-700 hover:text-black-900  `}>
           
          <p className={`font-poppins text-[12px]  xs:text-[15px] sm:text-overflow-hidden py-2 px-2 `}>
             Job Profile :  
            {feature.content}
          </p>
          <button className=" float-right  text-[12px]  xs:text-[15px] font-poppins px-4 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue  " onClick={handleShow6}>
           {feature.title}
            
          </button>
          
        </div>
      ))}
    </div>
    <Formcareer show6={show6} setShow6={setShow6}></Formcareer>
       </div>
      </div>
    </div>
    )
  }
export default Career