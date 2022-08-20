import React, { useEffect, useState } from 'react'
import './login.scss'; 
import {signup, signIn} from '../../redux/api'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // state 
    const navigate = useNavigate(); 
    const [inputForm, setInpurtForm] = useState(true);
    const [user, setUser] = useState({}); 
    const [passwordErr, setPasswordErr] = useState(false); 
    const [message, setMessage] = useState('')
    const [errMessage, setErrMessage] = useState('')

    // documentMounted
    useEffect(()=> {
        // if login redirect to feed page
        const isLogin = JSON.parse(localStorage.getItem("linkedinUser"))
        if(isLogin !== null) {
            navigate('/feed'); 
        }
    })

    // password match validation
    const handlePassword = (e) => {
        if(e.target.value !== user.password) {
            setPasswordErr(true); 
        } else {
            setPasswordErr(false); 
        }
    }

    // toggle forms 
    const handleForms = () => {
        setInpurtForm(prev => !prev); 
        setUser({})
    }

    // signup api call
    const registerUser = async (userData) => {
        try {
            const response = await signup(userData);
            console.log(response)
            const {status, data} = response;
            if(status === 201) {
                setMessage(data.message); 
                setErrMessage(""); 
                setInpurtForm(true)
            }

        } catch (error) {
            setErrMessage(error.response.data); 
            setMessage("")
            console.log(error.response.data)
        }
    }

    // sigin api call
    const loginUser = async (userData) => {
        try {
            const response = await signIn(userData);
            localStorage.setItem("linkedinUser", JSON.stringify(response.data)); 
            navigate("/feed");
        } catch (error) {
            error.response.status === 500 && setErrMessage("Server Error. Try again later!"); 
            error.response.status === 404 && setErrMessage("Server Router not found");
        }
    } 

    // handle input changes 
    const handleChnage = (e) => {
        setUser({...user, [e.target.name] : e.target.value }); 
    }

    // Sign up submit
    const handleSignup = (e) => {
        e.preventDefault();
        registerUser(user)
    }

    // sing in
    const handleSignin = (e) => {
        e.preventDefault();
        loginUser(user)
    }

    // jsx
    return (
        <div className='login-wrapper'>
            <div className="container">
                <main>
                    <div className="error-wrapper">
                        {message && <p className='message success'>{message}</p>}
                        {errMessage && <p className='message error'>{errMessage}</p>}
                    </div>

                    {inputForm ? (
                        <div className='login-form-wrapper'>
                            <div className='header'>
                                <h2>Sign In</h2>
                                <p>Stay updated on your professional world</p>
                            </div>
                            <form onSubmit={handleSignin}>
                                <input type='email' name="email" placeholder='Email' onChange={e=>handleChnage(e)} autoComplete="true" />
                                <input type='password' name="password" placeholder='Password' onChange={e=>handleChnage(e)} autoComplete="true"/>
                                <button type="submit">Login</button>
                            </form>
                            <div className='change-form'>
                                <h5 onClick={handleForms}>Create Account</h5>
                            </div>
                        </div>

                        ) : (

                        <div className='login-form-wrapper'>
                            <div className='header'>
                                <h2>Create Account</h2>
                                <p>Stay updated on your professional world</p>
                            </div>
                            <form onSubmit={handleSignup}>
                                <input type='text' name="email" placeholder='Email' onChange={e=>handleChnage(e)}/>
                                <input type='text' name="firstName" placeholder='First Name' onChange={e=>handleChnage(e)}/>
                                <input type='text' name="lastName" placeholder='Last Name' onChange={e=>handleChnage(e)}/>
                                <input type='text' name="profileImg" placeholder='Profile image link' onChange={e=>handleChnage(e)}/>
                                <input type='password' name="password" placeholder='Password' onChange={e=>handleChnage(e)} autoComplete="true"/>
                                <input type='password' name="passwordConfirm" placeholder='Confirm Password' onChange={handlePassword} autoComplete="true"/>
                                <p>{passwordErr ? "Passwords does not match" : ""}</p>
                                <button type="submit">Sign up</button>
                            </form>

                            <div className='change-form'>
                                <h5 onClick={handleForms}>Login</h5>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}

export default Login