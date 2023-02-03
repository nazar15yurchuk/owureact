import React from 'react';

const Cat = ({cat}) => {
    const [name] = cat
    return (
        <div>
            name: {name}
        </div>
    );
};

export default Cat;