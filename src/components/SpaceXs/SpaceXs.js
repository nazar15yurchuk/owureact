
// є API от SpaceXs
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import React, {useEffect, useState} from 'react';
import axios from "axios";

const SpaceXs = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        axios.get("https://api.spacexdata.com/v4/launches/")
            .then(value => value.data)
            .then(value => setVehicles([...value]))

    }, [])

    return (
        <div>
            {vehicles.map(vehicle =>)}
        </div>
    );
};

export {SpaceXs};