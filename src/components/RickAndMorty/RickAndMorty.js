const RickAndMorty = (props) => {
    const {id, name, status, species, gender, image} = props
    return (
        <div>
            <div>
                id: {id}
            </div>
            <div>
                name: {name}
            </div>

            <div>
                status: {status}
            </div>
            <div>
                species: {species}
            </div>
            <div>
                gender: {gender}
            </div>
            <img src={image} alt={name}/>
        </div>
    );
};

export{RickAndMorty};