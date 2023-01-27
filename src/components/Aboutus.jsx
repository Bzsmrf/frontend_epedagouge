import React from 'react'
import styles from '../style';
import { summer } from '../assets';
import {cardsData} from '../constants'

const Aboutus = ({show,setShow }) => {
  const handleClose = () => setShow(false);

  if (!show) return null;
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center `}>
      <div className='w-[600px] flex flex-col h-full overflow-y-scroll  container::-webkit-scrollbar '>
        
        <div className={`flex-1 flex-col font-poppins bg-white p-2 rounded text-black ${styles.boxWidth}  ${styles.paddingX} ${styles.paddingY}`}>
        <button className='text-white place-self-end bg-red rounded py-2 px-2 ' onClick={handleClose}>close</button>
          <h1 className={`font-semibold ss:text-[68px] text-[52px] ${styles.flexCenter}`}>ePedagogue</h1>
          
          <div>

          <div className='grid grid-cols-2 gap-4'>
          
          <h1 className={`flex justify-start items-start ml-[20px]  font-semibold leading-[20px] border-t-[1px] border-t-[#3F3E45] text-[18px]`}><br/>Let's <br/> do study<br/> with expert teacher's</h1>
          <img src={summer}></img>
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[30px]">
             {cardsData.map((card, index) => (
                <div className='justify-centre' key={index}>
                 <h1 className="text-lg font-medium  ">{card.title}</h1>
                <p className={`text-black-700 text-[10px] bg-secondary rounded-lg py-[10px] px-[10px] ${styles.boxfix}`}>{card.description}</p>
                </div>
              ))}
          </div>
         
          </div>
        </div>
      </div>
    </div>
    
  )
}


export default Aboutus