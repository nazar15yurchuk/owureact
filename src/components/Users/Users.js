// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача
// (довільно обрану інформацію)


import React, {useEffect, useState} from 'react';
import {User} from "../User/User";
import axios from "axios";

const Users = () => {
    const [posts, setPosts] = useState([])

    const [details, setDetails] = useState(null)

    useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(value => value.data)
        .then(value => setPosts([...value]))

    }, [])


    return (
        <div>
            <h2>Details about post</h2>
            {details && <User post = {details}/>}
            <hr></hr>
            <h2>Posts</h2>
            {posts.map(post => <User key={post.id} post = {post} setDetails = {setDetails}/>)}
        </div>
    );
};

export {Users};