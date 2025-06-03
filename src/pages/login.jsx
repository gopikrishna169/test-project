import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function Login() {

    const username = 'Dhoni';

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))

    }

    useEffect(() => {
        console.log("Login Page Mounted...")
        setFormData({
            email: 'dummy@gmail.com',
            password: 'test'
        })
        // const timer = setInterval(() => {
        //     console.log("Tick")
        // }, 10);

        // return () => clearInterval(timer);
    }, [])

    useEffect(() => {
        console.log("Form Changed...", formData);
    }, [formData]);

    useEffect(() => {
        console.log("Form Submitted...", isFormSubmitted);
    }, [isFormSubmitted])

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormSubmitted(true);
        console.log('Form Submitted:', formData );
    }

    const handleOnClear = () => {
        setIsFormSubmitted(false);
        setFormData({
            email: '',
            password: ''
        });
    }

    return (
        <>
            Login Page
            
            <form onSubmit={handleSubmit}>
                <labe>Email:</labe>
                <input 
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input 
                    type='password'
                    name='password'
                    size={10}
                    maxLength={5}
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type='submit'>Submit</button>

            </form>
            <button type='submit' onClick={handleOnClear}>Clear</button>
            {/* {isFormSubmitted && <div>Form Submitted...</div>} */}
            {isFormSubmitted ? <div>Form Submitted</div> : <></>}

            {username || 'Guest'}

        </>
    )
}

export default Login;