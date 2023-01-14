import React, { useState } from 'react'
import styles from './style';
import { Navbar, CardDeal, Courses, Clients, CTA, Stats, Footer, Testimonials, Hero, RegistrationForm, SignIn } from './components';



const App = () => {
  const [currentPage, setCurrentPage] = useState(true)
  function toggle() {
    setCurrentPage(prev => !prev)
  }
  return (
    <div className={"bg-primary text-white w-full"}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar 
            handleClick = {toggle}
          />
        </div>
      </div>
      {currentPage && 
      <div>
        <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero></Hero>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats></Stats>
            <Courses></Courses>
            <RegistrationForm></RegistrationForm>

            <Testimonials></Testimonials>
            <CTA></CTA>
            <Footer></Footer>
            

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