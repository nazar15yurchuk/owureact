import React from 'react';

const SpaceX = ({ship}) => {
    const {mission_name, launch_year} = ship
    return (
        <div>
            <div>
                name: {mission_name}
            </div>

            <div>
                year: {launch_year}
            </div>
            <div>
                <img src = {ship.links.mission_patch_small} alt="ship"/>
            </div>
            <hr/>

        </div>
    );
};

export {SpaceX};