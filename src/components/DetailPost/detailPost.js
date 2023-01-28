import React from 'react';

const DetailPost = ({details}) => {
    const{id, userId, title, body} = details
    return (
        <div>
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
            </div>
        </div>
    );
};

export {DetailPost};