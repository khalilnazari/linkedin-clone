import React from 'react'; 
import './header.scss'; 


function Header() {

    const NavItem = ({text, icon, url, active, classOhter}) => (
        <div className={`nav-item ${classOhter}`}> 
            <a href={url} className={`nav-link ${active && "active"}`}> 
                <i className={`fa-solid ${icon} nav-link-icon`}></i> 
                <span className="nav-link-text">{text}</span> 
            </a> 
        </div> 
    ); 


    return (
    <header className='header-top'>
        <div className="container"> 
            <div className="nav-wrapper"> 
                <div className="left-col"> 
                    <div className="left-col-wrapper"> 
                        <a className="logo" href='/'><i className="fa-brands fa-linkedin"></i></a> 
                        <div className="search-field"> 
                            <input type="text" className="search-input" placeholder='Search'/> 
                            <i className="fa-solid fa-magnifying-glass search-icon"></i>
                        </div> 
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
                            <NavItem 
                                text="Home"
                                icon="fa-house-chimney"
                                href="/"
                                active={true}
                            />
                            <NavItem 
                                text="My Network"
                                icon="fa-user-group"
                                href="/"
                            />
                            <NavItem 
                                text="Jobs"
                                icon="fa-briefcase"
                                href="/"
                            />
                            <NavItem 
                                text="Messaging"
                                icon="fa-comment-dots"
                                href="/"
                            />
                            <NavItem 
                                text="Notifications"
                                icon="fa-bell"
                                href="/"
                            />
                            <div className="user-avatar"> 
                                <div className="nav-link user-avatar-wrapper"> 
                                    <i className="fa-solid fa-circle-user avatar-icon"></i> 
                                    <div className="user-avatar-text"> 
                                        <span className="nav-link-text">Me</span>   
                                        <i className="fa-solid fa-caret-down"></i> 
                                    </div> 
                                </div> 
                            </div>  

                            <div className="user-avatar dropdown-premium"> 
                                <div className="nav-link user-avatar-wrapper"> 
                                    <i className="fa-solid fa-ellipsis avatar-icon"></i>
                                </div> 
                            </div>  
                        </div>
                        
                        <div className="premium-section">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header