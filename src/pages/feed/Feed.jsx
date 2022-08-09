import React, { useEffect, useState } from 'react';
import CreatePost from '../../components/createPost/CreatePost';
import DisplayPost from '../../components/displayPost/DisplayPost';
import './feed.scss'
import LeftCol from './leftCol/LeftCol';
import RightCol from './rightCol/RightCol';
import {fetchPosts} from '../../redux/api'
import {getPosts} from '../../redux/slices/postSlice'
import { useSelector, useDispatch} from 'react-redux';

const Feed = () => {
    const [err, setErr] = useState([]);
    const {posts} = useSelector(state => state.posts);
    
    const dispatch = useDispatch(); 

    // getposts data fetch posts
    const getPostsData = async () => {
        try {
            const res = await fetchPosts();
            dispatch(getPosts(res.data)); 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPostsData();
    
        
        posts.reverse(); 
    }, [dispatch]);

    
    
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
                            {err && <p>{err}</p>}
                            {posts.map(post => <DisplayPost post={post} key={post._id}/>)}
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