import { useState } from 'react';
import axios from 'axios';
import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';


function App() {
   // const example = [{
   //    id: 1,
   //    name: 'Rick Sanchez',
   //    status: 'Alive',
   //    species: 'Human',
   //    gender: 'Male',
   //    origin: {
   //       name: 'Earth (C-137)',
   //       url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // }];

   const [characters, setCharacters] = useState([]);

   // const onSearch = () =>{
   //    setCharacters(characters.concat(example));
   // }
   function onSearch(id) {
      
      let repeat = true;
      characters.forEach(elem => {
         if(elem.id === parseInt(id)){
            repeat=false;
         }
      })
      if(repeat){
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }else alert('Este Personaje esta repetido')

   }
   const onClose = (id) =>{
      setCharacters(characters.filter(elem => elem.id !== parseInt(id)))
   }

   return (
      <div className={styles.App}>
         <h1 className={styles.titulo}>Rick and Morty</h1>
         <p className={styles.autor}>By Facundo Echavarria</p>
         <Nav onSearch={onSearch}/>
         <Cards
            characters = {characters}
            onClose = {onClose}
         />
      </div>
   );
}

export default App;
