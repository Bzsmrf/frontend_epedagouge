import React, { Fragment, useState } from 'react';
import Buttons from './buttons';
import Footer from './Footer';
import styles from '../style';
import { eplogo } from '../assets';
const SignIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission, such as sending data to an API
        console.log(user);
    }
    return (
        <Fragment className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
        <form onSubmit={handleSubmit} className={` flex-col rounded-lg ${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`} id='signin'>
            <div className='w-[74px] h-[74px]'>
               <img src={eplogo}></img>
            </div>
            <h2 className="text-lg font-poppins 
           font-medium mb-4">Sign in</h2>
            <div className="mb-4">
                <label className="block text-white-700 font-poppins font-medium mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 text-black font-poppins"
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white-700 font-poppins font-medium mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 text-black font-poppins"
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <div className='text-discount-gradient font-poppins ' >
               <a href=''>forgot your password ?</a>
            </div>
            <div className='mb-4 mt-4'>
                 <Buttons className="self-place-between">submit</Buttons>
            </div>
        </form>
        <div className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}>
        <Footer/>  
        </div>
        </Fragment>

    )
}
export default SignIn