import { useState } from "react";

import {eplogo,close,menu} from "../assets"
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-centre navbar">
    <img src={eplogo} alt="ePedagouge" className="w-[55px] h-[40px]" />

    <ul className="list-none sm:flex hidden justify-centre items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-poppins 
          cursor-pointer font-normal
          text-[16px] ml-10`}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
    <div className='sm:hidden flex flex-1 justify-end items-centre'>
     <img 
     src={toggle ?close : menu}
     className="w-[28px] h-[28px] object-contain"
     onClick={()=> setToggle((prev)=>!prev)}
     ></img>
     <div className={`${toggle ? 'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
     <ul className="list-none flex flex-col justify-centre items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-poppins 
          cursor-pointer font-normal
          text-[16px] ${index === navLinks.length - 1 ? 'mr-0' :'mb-4' }`}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
     </div>
    </div></nav>
  )
}

export default Navbar