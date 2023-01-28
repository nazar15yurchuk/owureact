import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import {Post} from "../Post/post";
import {DetailPost} from "../DetailPost/detailPost";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [details, setDetails] = useState([])

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            {<DetailPost details={details}/>}
            <hr/>
            <h2 style={{textAlign: 'center'}}>All Posts</h2>
            {posts.map(post => <Post key={post.id} post={post} setDetails={setDetails}/>)}
        </div>
    );
};

export {Posts};