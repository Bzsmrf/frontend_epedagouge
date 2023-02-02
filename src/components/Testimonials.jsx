import { React, useState, useRef, useEffect } from 'react'
import styles from '../style'
import { review, testimonial } from '../constants'
import { PLACEMENT } from '../assets'
import Placement from './Placement'
const Testimonials = () => {
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
    <section id="placement" >
      <div className={`${styles.flexCenter}`}>
        <h2 className='font-poppins font-semibold px-16 text-4xl text-white mt-10 '>Placement</h2>
      </div>
      <div>
        <div className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} md:flex-1`}>
          <h1 className='text-4xl text-left max-w-[500px]'>We have transformed the career of  <span className='text-gradient font-semibold'>5000+ </span>students in the past two years with a  <span className='text-gradient font-semibold'>100%</span> success rate.</h1>
          <img src={PLACEMENT} alt="sign" className='w-[500px]' />
        </div>

        <Placement/>

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
            {review.map((feature, index) => (
              <div key={index} className={`${styles.boxfix} font-poppins justify-items-center mx-1 min-w-m  rounded-lg py-2 px-2 xs:py-2 px-2 text-black-700 hover:text-black-900  `}>
                <img src={feature.img} className='w-[400px]'></img>
                <p className={`${styles.paragraph} text-black text-left max-w-[450px]`}>
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default Testimonials