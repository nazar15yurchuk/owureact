import React from 'react';
import Cat from "../Cat/Cat";

const Cats = ({cats}) => {
    return (
        <div>
            {cats.map((cat, index) => <Cat key={index} cat={cat}/>)}
        </div>
    );
};

export default Cats;