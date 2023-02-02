import React, { useState } from 'react'
import styles from './style';
import { Navbar, CardDeal, Courses, Clients, CTA, Stats, Footer, Testimonials, Hero, RegistrationForm, SignIn } from './components';
import axios from "axios";
import Partners from './components/Partners';
const BASE_URL = "http://localhost:8000/api/";

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

const App = () => {
 
  
  const [currentPage, setCurrentPage] = useState(true)
  function toggle() {
    setCurrentPage(prev => !prev)
  }
  return (
    <div className={"bg-primary text-white w-full "}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar 
            handleClick = {toggle}
            currentState = {currentPage}
          />
        </div>
      </div>
      {currentPage && 
      <div className='content-center w-full'>
        <div className={` bg-primary ${styles.paddingX}${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero></Hero>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats/>
            <Courses/>
            <RegistrationForm/>
            <Testimonials/>
            <Partners/>
            <CTA/>
            <Footer/>
          </div>
        </div>
      </div>}
      {!currentPage && 
        <SignIn />
      }
    </div>
  )
}


export default App