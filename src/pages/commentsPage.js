import React from 'react';
import {Comments} from "../components";
import {Outlet} from "react-router-dom";


const CommentsPage = () => {
    return (
        <div>
            <h3>Post of Comment</h3>
            <Outlet/>
            <h3>Comment</h3>
            <Comments/>
        </div>
    );
};

export {CommentsPage};