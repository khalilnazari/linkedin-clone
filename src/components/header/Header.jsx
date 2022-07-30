import React from 'react'; 
import './header.scss'; 


function Header() {

    const NavItem = ({text, icon, url, active, classOhter}) => (
        <div class={`nav-item ${classOhter}`}> 
            <a href={url} class={`nav-link ${active && "active"}`}> 
                <i class={`fa-solid ${icon} nav-link-icon`}></i> 
                <span class="nav-link-text">{text}</span> 
            </a> 
        </div> 
    ); 


    return (
    <header className='header-top'>
        <div class="container"> 
            <div class="nav-wrapper"> 
                <div class="left-col"> 
                    <div class="left-col-wrapper"> 
                        <a class="logo"><i class="fa-brands fa-linkedin"></i></a> 
                        <div class="search-field"> 
                            <input type="text" class="search-input"/> 
                            <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        </div> 
                    </div> 
                </div> 


                <div className='right-col'>
                    <div class="right-col-wrapper"> 
                        <div class="navbar">
                            <div class={`nav-item search-item`}> 
                                <div class={`nav-link`}> 
                                    <i class="fa-solid fa-magnifying-glass nav-link-icon"></i>
                                    <span class="nav-link-text">Search</span> 
                                </div> 
                            </div> 
                            <NavItem 
                                text="Home"
                                icon="fa-house-chimney"
                                href="#"
                                active={true}
                            />
                            <NavItem 
                                text="My Network"
                                icon="fa-user-group"
                                href=""
                            />
                            <NavItem 
                                text="Jobs"
                                icon="fa-briefcase"
                                href=""
                            />
                            <NavItem 
                                text="Messaging"
                                icon="fa-comment-dots"
                                href=""
                            />
                            <NavItem 
                                text="Notifications"
                                icon="fa-bell"
                                href=""
                            />
                            <div class="user-avatar"> 
                                <div class="nav-link user-avatar-wrapper"> 
                                    <i class="fa-solid fa-circle-user avatar-icon"></i> 
                                    <div class="user-avatar-text"> 
                                        <span class="nav-link-text">Me</span>   
                                        <i class="fa-solid fa-caret-down"></i> 
                                    </div> 
                                </div> 
                            </div>  

                            <div class="user-avatar dropdown-premium"> 
                                <div class="nav-link user-avatar-wrapper"> 
                                    <i class="fa-solid fa-ellipsis avatar-icon"></i>
                                </div> 
                            </div>  
                        </div>
                        
                        <div class="premium-section">
                            <div class="user-avatar work-item"> 
                                <div class="nav-link user-avatar-wrapper"> 
                                    <i class="fa-solid fa-bars work-icon"></i> 
                                    <div class="user-avatar-text">
                                        <span class="nav-link-text">Work</span>   
                                        <i class="fa-solid fa-caret-down"></i> 
                                    </div> 
                                </div> 
                            </div> 

                            <div class="premium-link"> 
                                <a href="#"> 
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