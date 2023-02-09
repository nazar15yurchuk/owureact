import React, {useEffect} from 'react';
import {userService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../redux";
import User from "../User/User";

const Users = () => {
    const dispatch = useDispatch()
    const {users, errors, loading} = useSelector(state => state.users)

    useEffect(() => {
        // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [dispatch])
    return (
        <div>
            {loading && <div>Loading...</div>}
            {errors && JSON.stringify(errors)}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;