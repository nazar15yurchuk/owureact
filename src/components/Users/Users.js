import React, {useEffect, useState} from 'react';
import {User} from "../User/User";
import {userService} from "../../services";

const Users = ({setUserId}) => {
    const[users, setUser] = useState([])

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUser([...value]))
    }, [])

    return (
        <div>
            {users.map(user => <User key = {user.id} user = {user} setUserId = {setUserId}/>)}
        </div>
    );
};

export {Users};

