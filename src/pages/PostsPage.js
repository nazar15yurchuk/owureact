import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../services";
import {PostOfComments} from "../components";


const PostsPage = () => {
    let {id} = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        postsService.getById(id).then(value => value.data).then(value => setPost({...value}))
    }, [id])
    return (
        <div>
            {<PostOfComments key={post.id} post={post}/>}
        </div>
    );
};

export {PostsPage};