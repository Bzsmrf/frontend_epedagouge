import styles from "../style";
import { eplogo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import Aboutus from "./Aboutus";
import { useState } from "react";
import Contactus from "./Contactus";
import Placement from "./Placement";
import Career from "./Career";

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);
  const handleShow3 = () => setShow3(true);

  return (

    <section className={`${styles.flexCenter} ${styles.paddingY} content-center flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col ml-[3rem] text-center">
          <img
            src={eplogo}
            alt="ePedagouge"
            className="w-[266px] h-[72.14px] ml-5 object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the learning easy, reliable and quality.
          </p>
        </div>

        <div className="flex-1 w-full md:flex flex-row justify-between flex-wrap md:mt-0 md:ml-0 text-center md:text-left mt-10">

          {/* <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">

            </h4>
            <ul className="list-none mt-4 ">

              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer" ></li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer" ></li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer" ></li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer" ></li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer" ></li>
            </ul>
          </div> */}
          <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Useful Links
            </h4>
            <ul className="list-none mt-4">

              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer" onClick={handleShow}>Aboutus</li>
              {/* <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer" onClick={handleShow1}>Palcement</li> */}
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer" onClick={handleShow2}>Career</li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer" onClick={handleShow3}>Contactus</li>


            </ul>
          </div>
          <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Community
            </h4>
            <ul className="list-none mt-4">

              <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}><a href="https://blog.epedagogue.com/">Blog</a></li>
              <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}></li>

            </ul>
          </div>
        </div>

      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] ">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 ePedagouge. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
      <Aboutus show={show} setShow={setShow}></Aboutus>
      {/* <Placement show1={show1} setShow1={setShow1}></Placement> */}
      <Career show2={show2} setShow2={setShow2}></Career>
      <Contactus show3={show3} setShow3={setShow3}></Contactus>

    </section>
  )
};

export default Footer;