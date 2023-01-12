import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
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
    <form id = "form" onSubmit={handleSubmit} className="bg-black-gradient leading-[20px] mt-10 p-6 rounded-lg sm:max-w-[300px] justify-centre ">
      <h2 className="text-lg font-medium mb-4">Registration Form</h2>
      <div className="mb-4">
        <label className="block text-white-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input 
          className="border-2 border-white-300 rounded-lg w-full py-2 px-3" 
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
          className="border-2 border-white-300 rounded-lg w-full py-2 px-3" 
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
        className="border-2 border-white-300 rounded-lg w-full py-2 px-3" 
          type="phone" 
          name="phone" 
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your Phone Number"
          required
        />
      </div>
      <div>
      <button className="  text-[12px]  xs:text-[15px] font-poppins px-4 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue  ">
         Submit
        </button>
      </div>
      </form>)
}
export default RegistrationForm