import React from 'react'
import styles from './style';
import { Navbar, CardDeal,Courses,Clients,CTA,Stats,Footer,Testimonials,Hero,RegistrationForm,SignIn} from './components';


const App = () =>  (
    <div className={"bg-primary text-white w-full"}>
      <div className={`${styles.paddingX} ${styles.flexCenter}` }>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>
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
    </div>
  );


export default App