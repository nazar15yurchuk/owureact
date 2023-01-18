import {Simpson} from "./components/Simpson/Simpson";
import {RickAndMorty} from "./components/RickAndMorty/RickAndMorty";

const App = () => {
  return (
      <div>
          <p className={'paragraph1'}>Simpsons Family</p>
        <Simpson name = {'Homer'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
        <Simpson name = {'Marge'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
        <Simpson name = {'Bart'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
        <Simpson name = {'Lisa'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
        <Simpson name = {'Maggie'} surname = {'Simpson'} image = {'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
        <p className={'paragraph2'}> Rick and Morty</p>
          <RickAndMorty id = {1} name = {'Rick Sanchez'} status = {'Alive'} species = {'Human'} gender = {'Male'} image = {'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
          <RickAndMorty id = {2} name = {'Morty Smith'} status = {'Alive'} species = {'Human'} gender = {'Male'} image = {'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
          <RickAndMorty id = {3} name = {'Summer Smith'} status = {'Alive'} species = {'Human'} gender = {'Female'} image = {'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
          <RickAndMorty id = {4} name = {'Beth Smith'} status = {'Alive'} species = {'Human'} gender = {'Female'} image = {'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
          <RickAndMorty id = {5} name = {'Jerry Smith'} status = {'Alive'} species = {'Human'} gender = {'Male'} image = {'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
          <RickAndMorty id = {6} name = {'Abadango Cluster Princess'} status = {'Alive'} species = {'Alien'} gender = {'Female'} image = {'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
      </div>
  );
}

export{App};

