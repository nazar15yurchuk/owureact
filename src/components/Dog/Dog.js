import React from 'react';

const Dog = ({dog, dispatch}) => {

    return (
        <div>

            name: {dog.name} <button onClick={() => dispatch({type: 'deleteDog', payload: dog})}>Delete</button>
        </div>
    );
};

export default Dog;