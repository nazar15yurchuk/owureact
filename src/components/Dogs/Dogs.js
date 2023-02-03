import React from 'react';
import Dog from "../Dog/Dog";

const Dogs = ({dogs}) => {
    return (
        <div>
            {dogs.map((dog, index) => <Dog key={index} dog={dog}/>)}
        </div>
    );
};

export default Dogs;