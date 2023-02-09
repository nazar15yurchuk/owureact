import React from 'react';
import {useDispatch} from "react-redux";
import {postActions} from "../redux";

const Post = ({post}) => {
    const dispatch = useDispatch()
    const {userId, id, title, body} = post

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => dispatch(postActions.setSelectedPost(post))}>Select Post</button>
            <hr/>
        </div>
    );
};

export default Post;