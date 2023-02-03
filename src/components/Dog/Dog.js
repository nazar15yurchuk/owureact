import React from 'react';

const Dog = ({dog}) => {
    const [name] = dog
    return (
        <div>
            name: {name}
        </div>
    );
};

export default Dog;