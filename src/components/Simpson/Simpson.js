const Simpson = (props) => {
    const {name, surname, image} = props
    return (
        <div>
            <div>
                name: {name}
            </div>

            <div>
                surname: {surname}
            </div>

            <img src={image} alt={name}/>
        </div>
    );
};

export{Simpson};