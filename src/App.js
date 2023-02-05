import {Comments, Posts} from "./components";
import {useReducer, useRef} from "react";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";


const reducer = (state, action) => {
    switch (action.type) {
        case 'cat':
            const [lastCat] = state.cats.slice(-1)
            const idCat = lastCat ? lastCat.idCat + 1 : 0
            return {...state, cats: [...state.cats, {idCat, name: action.payload}]}
        case 'dog':
            const [lastDog] = state.dogs.slice(-1)
            const idDog = lastDog ? lastDog.idDog + 1 : 0
            return {...state, dogs: [...state.dogs, {idDog, name: action.payload}]}
        case 'deleteCat':
            for (let c = 0; c < state.cats.length; c++) {
                if (state.cats[c].idCat === action.payload.idCat) {
                    state.cats.splice(c, 1)
                }
            }
            return{...state}

        case 'deleteDog':
            for(let d = 0; d < state.dogs.length; d++ ){
                if(state.dogs[d].idDog === action.payload.idDog){
                    state.dogs.splice(d, 1)
                }
            }
            return {...state}

        default:
            return state
    }
};

const App = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})
    const cat = useRef()
    const dog = useRef()

    const resetDog = () => {
        dispatch({type: 'dog', payload: dog.current.value})
        dog.current.value = ''
    }

    const resetCat = () => {
        dispatch({type: 'cat', payload: cat.current.value})
        cat.current.value = ''
    }

    return (
        <div>
            {/*<Posts/>*/}
            {/*<Comments />*/}
            <div style={{display: 'flex'}}>
                <div>Add Cat: <input type={'text'} placeholder={'cat name'} ref={cat}/>
                    <button onClick={resetCat}>Save</button>
                </div>
                <div style={{paddingLeft: '15px'}}>Add Dog: <input type={'text'} placeholder={'dog name'} ref={dog}/>
                    <button onClick={resetDog}>Save</button>
                </div>
            </div>
            <div>
                <div>Cats: {<Cats cats={state.cats} dispatch={dispatch}/>}</div>
                <div>Dogs: {<Dogs dogs={state.dogs} dispatch={dispatch}/>}</div>
            </div>
        </div>
    );
}

export {App};
