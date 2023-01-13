import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg" id='signin'>
            <h2 className="text-lg font-medium mb-4">Sign in</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="border-2 border-gray-300 rounded-lg w-full py-2 px-3"
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
                <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                    Password
                </label>
            </div>
        </form>
    )
}
export default SignIn