import React from 'react'
import styles from './style';
import { Navbar, Billing, CardDeal,Business,Clients,CTA,Stats,Footer,Testimonials,Hero} from './components';


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
           <Billing></Billing>
           <CardDeal></CardDeal>
           <Business></Business>
           <Clients></Clients>
           <CTA></CTA>       
           <Stats></Stats>
           <Footer ></Footer>
           <Testimonials></Testimonials>  
         </div>
      </div>
    </div>
  );


export default App