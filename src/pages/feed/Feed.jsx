import React from 'react'
import CreatePost from '../../components/createPost/CreatePost';
import DisplayPost from '../../components/displayPost/DisplayPost';
import './feed.scss'
import LeftCol from './leftCol/LeftCol';
import RightCol from './rightCol/RightCol';

const Feed = () => {
  return (
    <main className="feed"> 
        <div className="container"> 
            <div className="feed-wrapper"> 
                {/* left col */}
                <LeftCol />
                {/* left col end */}

                {/* main col */}
                <div className="feed-main-col"> 
                    {/* createPost */}
                    <CreatePost />

                    <div className="display-post-wrapper">
                        <DisplayPost />
                        <DisplayPost />
                        <DisplayPost />
                    </div>
                </div> 
                {/* main col end */}

                {/* right col */}
                <RightCol />
                {/* right col end */}
            </div> 
        </div> 
    </main> 
  )
}


export default Feed;