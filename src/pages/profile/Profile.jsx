import React, { useEffect, useState } from 'react'
import './profile.scss'
import {Link} from 'react-router-dom'
import { DisplayPost } from '../../components'
import { useSelector } from 'react-redux'
import { updateProfile } from '../../redux/api'; 


const Profile = () => {
    const {firstName, lastName, email, occupation, phoneNumber, profileImg, _id} = JSON.parse(localStorage.getItem("linkedinUser"))
    const [profileData, setProfileData] = useState({}); 
    const {posts} = useSelector(state => state.posts); 
    
    const handleChange = (e) => {
        setProfileData({...profileData, [e.target.name]: e.target.value})
    }

    const updateUser = async (data) => {
        try {
            const response = await updateProfile(data, _id); 
            console.log(response.data); 
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault(); 
        // console.log(profileData)
        updateUser(profileData); 
    }

    // jsx
    return (
        <div className='profile'>
            <div className='container'>
                <div className='profile-hero'>
                    <div className="container">
                        <div className="hero">
                            <div className='profile-img'>
                                <img src={profileImg} className="profile-avatar"/>
                            </div>

                            <div className='profile-header'>
                                <div className='detail'>
                                    <h3>{firstName} {lastName}</h3>
                                    <p>{occupation}</p>
                                </div>

                                <div className='action-buttons'>
                                    <button className='edit-btn'><i className="fa-solid fa-pen"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='form-wrapper'>
                    <h3>Profile Details</h3>
                    <form className='update-profile' onSubmit={handleUpdateProfile}>
                        <div className='form-control'>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id='firstName' className='input-control' onChange={handleChange} placeholder={firstName? firstName : "First Name"}/>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id='lastName' className='input-control' onChange={handleChange} placeholder={lastName? lastName : "Last Name"}/>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id='email' className='input-control' onChange={handleChange} placeholder={email? email : "Email Address"}/>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="occupation">Occupation</label>
                            <input type="text" name="occupation" id='occupation' className='input-control' onChange={handleChange} placeholder={occupation ? occupation : "Occupation"}/>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" name="phoneNumber" id='phoneNumber' className='input-control' onChange={handleChange} placeholder={phoneNumber ? phoneNumber : "Phone Number"}/>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="profileImg">Profile image (link)</label>
                            <input type="text" name="profileImg" id='profileImg' className='input-control' onChange={handleChange} placeholder="Paste new profile image link"/>
                        </div>
                        <div className='form-control'>
                            <button type="submit" className='input-control'>Submit</button>
                        </div>
                    </form>
                </div>
              

                <div className='activities-wrapper'>
                    <h3>Activites</h3>
                    
                    <div className='activites'>
                        {posts.map(post => <DisplayPost post={post}  key={post._id}/>)}
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Profile