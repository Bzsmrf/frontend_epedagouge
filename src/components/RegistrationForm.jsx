import React, { useState } from 'react';
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
    <section className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
    <form id = "form" onSubmit={handleSubmit} className={`bg-secondary leading-[20px] mt-10 p-6 rounded-lg sm:max-w-[300px] justify-centre text-black`}>
      <h2 className="text-lg font-medium mb-4">Registration Form</h2>
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
          placeholder="Enter a password u can remember"
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