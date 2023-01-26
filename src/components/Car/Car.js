import {carService} from "../../services";

const Car = ({car, setUpdateCar, cars, setCars}) => {
    const {id, brand, price, year} = car

        const setDeleteById = (car) => {
            console.log(car);
            for (let s = 0; s < cars.length; s++) {
                    if (cars[s].id === car.id) {
                        cars.splice(s, 1)
                        setCars([...cars])
                        carService.deleteById(car.id)
                    }
                }
            }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={() => setDeleteById(car)}>delete</button>
        </div>
    );
};

export {Car};