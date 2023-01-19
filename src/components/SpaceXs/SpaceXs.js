import React, {useEffect, useState} from 'react';
import {SpaceX} from "../SpaceX/SpaceX";

const SpaceXs = () => {
    const [ships, setShips] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(info => info.json())
            .then(data => setShips(data))
    }, [])

    return (
        <div>
            {ships.filter((ship => ship.launch_year !== '2020')).map((ship, index) => <SpaceX key = {index} ship = {ship}/>)}

        </div>
    );
};

export {SpaceXs};