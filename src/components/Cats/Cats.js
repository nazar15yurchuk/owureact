import React from 'react';
import Cat from "../Cat/Cat";

const Cats = ({cats, dispatch}) => {
    return (
        <div>
            {cats.map((cat, index) => <Cat key={index} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export default Cats;