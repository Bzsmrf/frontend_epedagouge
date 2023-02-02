import React, { useState } from 'react';
import { SIGNIN } from '../assets';
import styles from '../style';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pass: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission, such as sending data to an API
    console.log(formData);
  }

  return (
    <section id='register' className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} md:flex-1 mt-5`}>
      <div>
        <img src={SIGNIN} alt="signin" className='w-[600px] h-[350px]' />
        <h1 className='text-xl text-right md:mr-[10rem] mt-[2rem] mb-[2rem]'> A opportunity to stand out from others...<br />
        <span className='text-gradient font-semibold'>Start doing the job already...</span>
          <br /><span className='text-xl font-bold'>Register Now</span></h1>
      </div>
      <form id="form" onSubmit={handleSubmit} className={`bg-secondary leading-[20px] w-[300px] ml-[2rem]  p-6 rounded-lg md:w-[300px] sm:max-w-[300px] justify-centre text-black`}>
        <h2 className="text-xl font-medium mb-4  font-bold">Registration Form</h2>
        <div className="mb-4">
          <label className="block text-white-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 border-white-300 rounded-lg w-full py-2 px-3 text-black"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 border-white-300 rounded-lg w-full py-2 px-3 text-black"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white-700 font-medium mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="border-2 border-white-300 rounded-lg w-full py-2 px-3 text-black"
            type="phone"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white-700 font-medium mb-2" htmlFor="pass">
            Password
          </label>
          <input
            className="border-2 border-white-300 rounded-lg w-full py-2 px-3 text-black"
            type="pass"
            name="pass"
            id="pass"
            value={formData.pass}
            onChange={handleChange}
            placeholder="Enter your Password"
            required
          />
        </div>
        <div>
          <button className="  text-[12px]  xs:text-[15px] font-poppins px-4 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue  ">
            Submit
          </button>
        </div>
      </form>
    </section>)
}
export default RegistrationForm