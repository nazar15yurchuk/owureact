import React from 'react';

const Cat = ({cat, dispatch}) => {


    return (
        <div>

            name: {cat.name} <button onClick={() => dispatch({type: 'deleteCat', payload: cat})}>Delete</button>
        </div>

    );
};

export default Cat;