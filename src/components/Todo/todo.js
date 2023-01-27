import React from 'react';

const Todo = ({todo}) => {
    const {userId, id, completed, title} = todo

    return (
        <div>
            <div>
                userId: {userId}
            </div>
            <div>
                id: {id}
            </div>
            <div>
                completed: {completed.toString()}
            </div>
            <div>
                title: {title}
            </div>
            <hr/>
        </div>
    );
};

export {Todo};