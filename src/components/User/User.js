import React from 'react';

const User = ({user, setUserId}) => {

    const{id, name, username} = user

    return (
        <div>
            <div>
                id: {id}
            </div>
            <div>
                name: {name}
            </div>
            <div>
                username: {username}
            </div>

            <button onClick={() => setUserId(id)}>Users Posts</button>
        </div>
    );
};

export {User};