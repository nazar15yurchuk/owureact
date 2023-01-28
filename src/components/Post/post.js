import React from 'react';

const Post = ({post, setDetails}) => {
    const {id, title} = post

    return (

        <div style={{marginLeft: '10px'}}>
            <div>
                id: {id}
            </div>
            <div>
                title: {title}
            </div>
            <button onClick={() => {
                setDetails(post)
            }}>Details about post</button>
            <hr/>
        </div>
    );
};

export {Post};