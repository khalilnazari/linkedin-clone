import React from 'react'
import './feed.scss'

const Feed = () => {
  return (
    <main className="feed"> 
        <div className="container"> 
            <div className="feed-wrapper"> 
                {/* left col */}
                <div className="feed-left-col"> 
                    <div className="porfile-summary feed-left-col-section"> 
                        <img src="https://millercenter.rutgers.edu/wp-content/uploads/2021/05/Home-Four-Banner-Background-Image.png" className="profile-bunner" alt="profie-summary-photo" /> 
                        <div className="profile-summary-body"> 
                            <img src="https://pbs.twimg.com/profile_images/1508985474211201025/rOBWvn0-_400x400.jpg" className="profile-avatar" alt="profile image" /> 
                            <div className="profile-detail"> 
                                <div className="profile-detail-section"> 
                                    <h4>Khalil Nazari</h4> 
                                </div> 
                                <hr /> 
                                <div className="profile-detail-section"> 
                                    <h4>Viewers</h4> 
                                </div> 
                                <hr /> 
                                <div className="profile-detail-section"> 
                                    <h4>Connections</h4> 
                                </div> 
                            </div> 
                        </div>  
                    </div> 

                    <div className="recent-activities feed-left-col-section"> 
                        <h4>Recent</h4> 
                        <div> 
                            #programming 
                        </div> 
                        <div> 
                            #coding 
                        </div> 
                    </div> 
                </div> 
                {/* left col end */}

                {/* main col */}
                <div className="feed-main-col"> 
                    <div className="create-post"> 
                        <div className="create-post-wrapper"> 
                            <div className="create-post-input"> 
                                <img src="https://pbs.twimg.com/profile_images/1508985474211201025/rOBWvn0-_400x400.jpg" className="create-post-avatar" alt="user profile"/> 
                                <button id="" className="create-post-input-field">Start a post</button> 
                            </div> 
                            <div className="create-post-media-wrapper"> 
                                <div className="ceate-post-media"> 
                                    <i className="fa-solid fa-image media-icon photo"></i> 
                                    <span className="media-text">Photo</span> 
                                </div> 
                                <div className="ceate-post-media"> 
                                    <i className="fa-solid fa-video media-icon video"></i> 
                                    <span className="media-text">Video</span> 
                                </div> 

                                <div className="ceate-post-media"> 
                                    <i className="fa-solid fa-calendar-days media-icon event"></i> 
                                    <span className="media-text">Event</span> 
                                </div> 

                                <div className="ceate-post-media"> 
                                    <i className="fa-solid fa-newspaper media-icon article"></i> 
                                    <span className="media-text">Write Article</span> 
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    
                    <div className="display-post"> 
                        <div className="display-post-header"> 
                            <div className="user-avatar"> 
                                <i className="fa-solid fa-circle-user"></i> 
                            </div> 
                            <div className="user-detail"> 
                                <h4>Use name</h4> 
                                <p>User Title<i className="fa-solid fa-earth-asia"></i></p> 
                            </div> 

                            <div className="menu"> 
                                <i className="fa-solid fa-ellipsis"></i> 
                            </div> 
                        </div> 

                        <div className="display-post-body"> 
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia 
                        </div> 

                        <img src="https://st2.depositphotos.com/4164031/7029/i/600/depositphotos_70298419-stock-photo-deep-space.jpg" className="display-post-media" alt="post media" /> 
                        
                        <div className="display-post-reaction"> 
                            <div className="reaction-btns"> 
                                <div className="like"> 
                                    <button> 
                                        <i className="fa-solid fa-thumbs-up reaction-btn-icon"></i>  
                                        <span className="reaction-btn-text">Like</span> 
                                    </button>  
                                </div> 
                                <div className="comment"> 
                                    <button> 
                                        <i className="fa-solid fa-message reaction-btn-icon"></i> 
                                        <span className="reaction-btn-text">Comemnt</span> 
                                    </button> 
                                </div> 
                                <div className="share"> 
                                    <button> 
                                        <i className="fa-solid fa-share-nodes reaction-btn-icon"></i> 
                                        <span className="reaction-btn-text">Share</span> 
                                    </button> 
                                </div> 
                                <div className="send"> 
                                    <button> 
                                        <i className="fa-solid fa-paper-plane reaction-btn-icon"></i> 
                                        <span className="reaction-btn-text">Send</span> 
                                    </button> 
                                </div> 
                            </div> 
                        </div> 
                    </div>

                    <div className="display-post"> 
                        <div className="display-post-header"> 
                            <div className="user-avatar"> 
                                <i className="fa-solid fa-circle-user"></i> 
                            </div> 
                            <div className="user-detail"> 
                                <h4>Use name</h4> 
                                <p>User Title<i className="fa-solid fa-earth-asia"></i></p> 
                            </div> 

                            <div className="menu"> 
                                <i className="fa-solid fa-ellipsis"></i> 
                            </div> 
                        </div> 

                        <div className="display-post-body"> 
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia 
                        </div> 

                        <img src="https://st2.depositphotos.com/4164031/7029/i/600/depositphotos_70298419-stock-photo-deep-space.jpg" className="display-post-media" alt="post media" /> 
                            <div className="display-post-reaction"> 
                        <div className="reaction-btns"> 
                            <div className="like"> 
                                <button> 
                                    <i className="fa-solid fa-thumbs-up reaction-btn-icon"></i>  
                                    <span className="reaction-btn-text">Like</span> 
                                </button>  
                            </div> 
                            <div className="comment"> 
                                <button> 
                                    <i className="fa-solid fa-message reaction-btn-icon"></i> 
                                    <span className="reaction-btn-text">Comemnt</span> 
                                </button> 
                            </div> 
                            <div className="share"> 
                                <button> 
                                    <i className="fa-solid fa-share-nodes reaction-btn-icon"></i> 
                                    <span className="reaction-btn-text">Share</span> 
                                </button> 
                            </div> 
                            <div className="send"> 
                                <button> 
                                    <i className="fa-solid fa-paper-plane reaction-btn-icon"></i> 
                                    <span className="reaction-btn-text">Send</span> 
                                </button> 
                            </div> 
                        </div> 
                        </div> 
                    </div> 
                </div> 
                {/* main col end */}

                {/* right col */}
                <div className="feed-right-col"> 
                    <div className="feed-right-section"> 
                        <div className="feed-right-header "> 
                            <h4> 
                                Linked uses 
                            </h4> 
                            <i className="fa-solid fa-circle-info"></i> 
                        </div> 
                        <div className="feed-right-item"> 
                            <h5>a title for users</h5> 
                            <p> ome information about the above title</p> 
                        </div> 
                        <div className="feed-right-item"> 
                            <h5>a title for users</h5> 
                            <p> ome information about the above title</p> 
                        </div> 
                    </div> 

                    <div className="feed-right-section"> 
                        <div className="feed-right-header "> 
                            <h4>Liked uses</h4> 
                            <i className="fa-solid fa-circle-info"></i> 
                        </div>
                        <div className="feed-right-item"> 
                            <h5>a title for users</h5> 
                            <p> ome information about the above title</p> 
                        </div> 
                        <div className="feed-right-item"> 
                            <h5>a title for users</h5> 
                            <p> ome information about the above title</p> 
                        </div> 
                    </div> 
                </div> 
                {/* right col end */}
            </div> 
        </div> 
    </main> 
  )
}


export default Feed;