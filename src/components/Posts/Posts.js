import React, {useEffect} from 'react';
import {postService} from "../../services/postService";
import {useDispatch, useSelector} from "react-redux";
import {postActions} from "../redux";
import Post from "../Post/Post";

const Posts = () => {
    const dispatch = useDispatch()
    const {posts, errors, loading} = useSelector(state => state.posts)

    useEffect(() => {
        // postService.getAll().then(({data}) => dispatch(postActions.getAll(data)))
        dispatch(postActions.getAll())
    }, [dispatch])
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {errors && JSON.stringify(errors)}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;