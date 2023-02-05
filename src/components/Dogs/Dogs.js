import React from 'react';
import Dog from "../Dog/Dog";

const Dogs = ({dogs, dispatch}) => {

    return (
        <div>
            {dogs.map((dog, index) => <Dog key={index} dog={dog} dogs={dogs} dispatch={dispatch}/>)}
        </div>
    );
};

export default Dogs;