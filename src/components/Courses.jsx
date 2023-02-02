import React from 'react'
import { features, } from '../constants'
import styles, { layout } from '../style'
import buttons from './buttons'
import { COURSES, quiz, SIGNIN } from '../assets'
const Courses = () => {
  return (
    <section id="courses" >
      <div className={`${styles.flexCenter}`}>
        <h2 className='font-poppins font-semibold px-16 text-4xl text-white mt-10 '>Courses</h2>
      </div>
      <div className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} md:flex-1`}>
        <h1 className='text-4xl text-left max-w-[500px]'>There are no secrets to success. <br />It is the result of  <span className='text-gradient font-semibold'>preparation</span>,  <span className='text-gradient font-semibold'><br />hard work</span>, and  <span className='text-gradient font-semibold'>learning</span>.
          <br /><br />We have a team of currently working  <span className='text-gradient font-semibold'> IT Professionals</span> who will guide you to get the desired career.</h1>
        <img src={COURSES} alt="sign" className='w-[500px]' />
      </div>
      <div>

        <div className={`h-auto overflow-x-auto flex container::-webkit-scrollbar  text-black `}>
          {features.map((feature) => (
            <div className={`${styles.boxfix} font-poppins justify-items-center mx-1 min-w-m bg-secondary rounded-lg py-2 px-2 xs:py-2 px-2 text-black-700 hover:text-black-900  `}>
              <button className="  text-[12px]  xs:text-[15px] font-poppins px-4 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue  ">
                <a href='#register'>{feature.title}</a>
              </button>

              <p className={`font-poppins text-[12px]  xs:text-[15px] sm:text-overflow-hidden py-2 px-2 `}>
                {feature.content}
              </p>
            </div>
          ))}
        </div>
        

      </div>

    </section>
  )
}

export default Courses