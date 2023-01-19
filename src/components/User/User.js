import React from 'react';

const User = ({post, setDetails}) => {

    const {userId, id, title, body} = post
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
            <div>
                body: {body}
            </div>
            <button onClick={() => setDetails(post)}>Details</button>
        </div>
    );
};

export {User};