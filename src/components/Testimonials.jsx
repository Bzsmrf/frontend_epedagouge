import React from 'react'
import styles from '../style'
import { features, testimonial } from '../constants'
import { people01, PLACEMENT } from '../assets'
const Testimonials = () => {
  return (
    <section id="placement" >
      <div className={`${styles.flexCenter}`}>
        <h2 className='font-poppins font-semibold px-16 text-4xl text-white mt-10 '>Placement</h2>
      </div>
      <div>
        <div className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} md:flex-1`}>
          <h1 className='text-4xl text-left max-w-[500px]'>We have transformed the career of  <span className='text-gradient font-semibold'>5000+ </span>students in the past two years with a  <span className='text-gradient font-semibold'>100%</span> success rate.</h1>
          <img src={PLACEMENT} alt="sign" className='w-[500px]' />
        </div>

        <div className={`h-auto overflow-x-auto flex container::-webkit-scrollbar  text-black `}>
          {testimonial.map((feature) => (
            <div className={`${styles.boxfix} font-poppins justify-items-center mx-1 min-w-m bg-secondary rounded-lg py-2 px-2 xs:py-2 px-2 text-black-700 hover:text-black-900  `}>
              {/* <h1 className="  text-[12px]  xs:text-[15px] font-poppins px-4 py-2 font-semibold text-black bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue  ">
          {feature.title}
            
          </h1> */}
              <img src={feature.img} className='w-[400px]'></img>
              <p className={`${styles.paragraph} text-black text-left max-w-[450px]`}>
                {feature.content}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Testimonials