import React from 'react'; 
import './header.scss'; 
import {Link, useNavigate} from 'react-router-dom'; 

function Header() {
    const navigate = useNavigate(); 

    // local components
    const NavItem = ({text, icon, url, active, classOhter}) => (
        <div className={`nav-item ${classOhter}`}> 
            <a href={url} className={`nav-link ${active && "active"}`}> 
                <i className={`fa-solid ${icon} nav-link-icon`}></i> 
                <span className="nav-link-text">{text}</span> 
            </a> 
        </div> 
    ); 
    
    // logout 
    const handleLogout = () => {
        localStorage.removeItem("linkedinUser");
        navigate("/"); 
    }

    // Check if login 
    const isLogin = JSON.parse(localStorage.getItem("linkedinUser"));
    console.log(isLogin) 


    return (
    <header className='header-top'>
        <div className="container"> 
            <div className="nav-wrapper"> 
                <div className="left-col"> 
                    <div className="left-col-wrapper"> 
                        <a className="logo" href='/'><i className="fa-brands fa-linkedin"></i></a> 
                        {isLogin && (
                        <div className="search-field"> 
                            <input type="text" className="search-input" placeholder='Search'/> 
                            <i className="fa-solid fa-magnifying-glass search-icon"></i>
                        </div> 
                        ) }
                        
                    </div> 
                </div> 

                <div className='right-col'>
                    <div className="right-col-wrapper"> 
                        <div className="navbar">
                            <div className={`nav-item search-item`}> 
                                <div className={`nav-link`}> 
                                    <i className="fa-solid fa-magnifying-glass nav-link-icon"></i>
                                    <span className="nav-link-text">Search</span> 
                                </div> 
                            </div> 
                            { isLogin && <NavItem  text="Home" icon="fa-house-chimney" href="/" active={true} /> }
                            { isLogin && <NavItem  text="My Network" icon="fa-user-group" href="/" /> }
                            <NavItem  text="Jobs" icon="fa-briefcase" href="/" /> 
                            
                            { isLogin && <NavItem  text="Messaging" icon="fa-comment-dots" href="/"/> }
                            { isLogin && <NavItem  text="Notifications" icon="fa-bell" href="/"/> }

                            {isLogin && (
                                <div className="user-avatar"> 
                                    <div className="nav-link user-avatar-wrapper"> 
                                        <i className="fa-solid fa-circle-user avatar-icon"></i> 
                                        <div className="user-avatar-text"> 
                                            <span className="nav-link-text">Me</span>   
                                            <i className="fa-solid fa-caret-down"></i> 
                                        </div> 
                                    </div> 

                                    <div className='user-dropdown-menu'>
                                        <Link to='/profile' className='menu-link'>Profile</Link>
                                        <Link to="/" className='menu-link' onClick={handleLogout}>Logout</Link>
                                    </div>
                                </div>
                            )}

                            <div className="user-avatar dropdown-premium"> 
                                <div className="nav-link user-avatar-wrapper"> 
                                    <i className="fa-solid fa-ellipsis avatar-icon"></i>
                                </div> 
                            </div>  
                        </div>
                        
                        <div className="premium-section">
                            {isLogin ? (
                                <>
                                <div className="user-avatar work-item"> 
                                    <div className="nav-link user-avatar-wrapper"> 
                                        <i className="fa-solid fa-bars work-icon"></i> 
                                        <div className="user-avatar-text">
                                            <span className="nav-link-text">Work</span>   
                                            <i className="fa-solid fa-caret-down"></i> 
                                        </div> 
                                    </div> 
                                </div> 

                                <div className="premium-link"> 
                                    <a href="/"> 
                                        Reactivate Premium: 50% Off
                                    </a> 
                                </div> 
                                </>
                            ): (
                                <div className='login-btn-wrapper'>
                                    <Link to="/" className='signup-btn btn '>Register</Link>
                                    <Link to="/" className='signin-btn btn'>Login</Link>
                                </div>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header