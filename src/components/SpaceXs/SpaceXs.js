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
            {ships.map(ship => <SpaceX key = {ship.flight_number} ship = {ship}/>)}

        </div>
    );
};

export {SpaceXs};