import styles from "../style";
import { arrowUp } from "../assets";
import { forms } from "../constants";

const Aplynow = () => 
   (
    <div className={`${styles.flexCenter} w-[100px] h-[100px] rounded-full bg-discount-gradient p-[5px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-sky-100 hover:bg-sky-300 w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium hover:text-[20px] text-center text-[18px] leading-[23.4px]">
          <span className="text-primary font-bold">
          {forms.map ((fr)=>(
            <a href={`#${fr.id}`}>Apply<br/>Now</a>
          ))}
          </span>
          
        </p>
        
      </div>
      
      {/* <p className="font-poppins font-medium hover:text-[20px] text-[18px] leading-[23.4px]">
    <span className="text-primary font-bold">
    {forms.map ((fr)=>(
            <a href={`#${fr.id}`}>Now</a>
          ))}
    </span>
      </p> */}
    </div>
  </div>
  )


export default Aplynow