import React from 'react';

const SpaceX = ({mission_name, launch_year}) => {


    return (
        <div>
            <div>
                name: {mission_name}
            </div>
            <div>
                year: {launch_year}
            </div>

        </div>
    );
};

export {SpaceX};