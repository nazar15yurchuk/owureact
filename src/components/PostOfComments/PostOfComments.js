import React from 'react';

const PostOfComments = ({post}) => {
    const {userId, id, title} = post

    return (
        <div>

            <div>
                userId: {userId}
            </div>
            <div>
                id: {id}
            </div>
            <div>
                title: {title}
            </div>
            <hr/>
        </div>
    );
};

export {PostOfComments};