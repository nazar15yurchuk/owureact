import React from 'react';

const Post = ({post}) => {
    const {userId, id, title} = post
    return (
        <div>
            <div>
                userId : {userId}
            </div>
            <div>
                id: {id}
            </div>
            <div>
                title: {title}
            </div>
        </div>
    );
};

export {Post};