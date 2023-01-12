import React from 'react'
import styles from '../style'
import { discount, hero,} from '../assets'
import Aplynow from './Aplynow'
const Hero = () =>  (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
       <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
       <p className={`${styles.paragraph} ml-2`}> 
       <span className='text-white'>10% </span>
       Diccount  {" "}
       <span className='text-white'>Before 15 January</span>
       </p>
       
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
        Digital <br className='sm:block hidden' />{"  "}
        <span className='text-gradient'>Education
        </span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
            <Aplynow />
          </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
         At Your Palm
      </h1>
      <h2 className='font-poppins font-semibold text-[18px]  max-w-[470px] mt-5'> 
      Welcome to <span className='text-gradient'>ePedagogue </span>
      </h2>
      <p className='font-poppins leading-[20px] max-w-[470px] mt-2 '>
      <span className='text-gradient font-semibold'>Best Software Testing </span>Course Provider in <span className='text-gradient font-semibold'>Noida</span>{" "}and <span className='text-gradient font-semibold'>Delhi/Ncr</span>{" "} 
      Today’s education  system in India is not limited to classroom study. We have noticed a vast change from classroom study to digital study. Students must cope with the changing trends. We are engaged to provide highly interactive digital classroom  study.<span className='text-gradient font-semibold'>Students experience</span>{" "}  the  best learning environment  and a lucid way of <span className='text-gradient font-semibold'>teaching with 3-dimensional illustrations.</span> 
      </p>
      
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img 
        src={hero} alt="hero"
        className="w-[100%] h-[100%] relative z-[5]" 
        />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Aplynow/>
      </div>
      
    </section>
  )


export default Hero