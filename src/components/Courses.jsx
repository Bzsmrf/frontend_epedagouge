import { React, useState, useRef, useEffect } from 'react'
import { features, } from '../constants'
import styles, { layout } from '../style'
import buttons from './buttons'
import { COURSES, quiz, SIGNIN } from '../assets'
const Courses = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
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

        <div className={`h-auto overflow-x-auto relative overflow-hidden flex container::-webkit-scrollbar  text-black `}>
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled('prev')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled('next')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="carousel-container relative text-center flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {features.map((feature, index) => (
              <div key={index}
                className={`${styles.boxfix} font-poppins justify-items-center mx-1 min-w-m bg-secondary rounded-lg py-2 px-2 xs:py-2 px-2 text-black-700 hover:text-black-900  `}>
                <img src={feature.img} alt="sign" className='' />
                <button className="mt-5  text-[12px]  xs:text-[15px] font-poppins px-4 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue  ">
                  <a href='#register'>{feature.title}</a>
                </button>

                {/* <p className={`font-poppins text-[12px]  xs:text-[15px] sm:text-overflow-hidden py-2 px-2 `}>
                {feature.content}
              </p> */}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default Courses