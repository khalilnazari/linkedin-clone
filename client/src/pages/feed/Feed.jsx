import React, { useEffect } from 'react';
import CreatePost from '../../components/createPost/CreatePost';
import DisplayPost from '../../components/displayPost/DisplayPost';
import './feed.scss'
import LeftCol from './leftCol/LeftCol';
import RightCol from './rightCol/RightCol';
import { fetchPosts} from '../../redux/api'
import {getPosts} from '../../redux/reducers/postSlice'
import { useSelector, useDispatch} from 'react-redux';

const Feed = () => {
    const { posts } = useSelector(state => state.posts);
    const dispatch = useDispatch(); 

    // getposts data fetch posts
    const getPostsData = async () => {
        try {
            const res = await fetchPosts();
            dispatch(getPosts(res.data)); 
        } catch (error) {
            alert(error.response.statusText + ". Please try again later!"); 
        }
    }

    useEffect(() => {
        // Once page is loaded fetch data from API
        getPostsData();
    }, [dispatch]);

    // jsx
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