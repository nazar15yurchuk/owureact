import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../Post/post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getById().then(({data}) => setPosts([...data]))
    }, [])

    return (
        <div>
            {posts.map(post => <Post key = {post.id} post = {post}/>)}
        </div>
    );
};

export {Posts};