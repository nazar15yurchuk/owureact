import {Comments, Posts} from "./components";
import {useReducer, useRef} from "react";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";

    const reducer = (state, action) => {
        switch (action.type) {
            case 'cat':
                return {...state, cats: [...state.cats, action.payload]}
            case 'dog':
                return {...state, dogs: [...state.dogs, action.payload]}
            default:
                return state
        }
    };

const App = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})
    const cat = useRef(null)
    const dog = useRef(null)

  return (
    <div>
        {/*<Posts/>*/}
        {/*<Comments />*/}
        <div style={{display: 'flex'}}>
        <div>Add Cat: <input type={'text'} placeholder={'cat name'} ref={cat}/>
            <button onClick={() => dispatch({type: 'cat', payload: cat.current.value})}>Save</button></div>
        <div style={{paddingLeft: '15px'}}>Add Dog: <input type={'text'} placeholder={'dog name'} ref={dog}/>
            <button onClick={() => dispatch({type: 'dog', payload: dog.current.value})}>Save</button></div>
        </div>
        <div>
            <div>Cats: {<Cats cats={state.cats}/>}</div>
            <div>Dogs: {<Dogs dogs={state.dogs}/>}</div>
        </div>
    </div>
  );
}

export{App};
