import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/about/about';
import Detail from './components/Detail/Detail';
import Error404 from './components/notFound/NotFound';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) =>{
      let repeat = true;
      characters.forEach(elem => {
         if(elem.id === parseInt(id)){
            repeat=false;
         }
      })
      if(repeat){
         axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
         })
            .catch(error => alert('¡No hay personajes con este ID!'));
      }else alert('Este Personaje esta repetido')
   }
   const onClose = (id) =>{
      setCharacters(characters.filter(elem => elem.id !== parseInt(id)))
   }

   function NotFoundRedirect() {
      const navigate = useNavigate();

      useEffect(() => {
         navigate('/notFound');
      }, [navigate]);
   }

   return (

      
   <div className={styles.App}>
      <h1 className={styles.titulo}>Rick and Morty</h1>
      <p className={styles.autor}>By Facundo Echavarria</p>
      <Nav onSearch={onSearch}/>
      
      <Routes>
         <Route path='/home' element={
            <Cards
            characters = {characters}
            onClose = {onClose}
            />
         }/>
         <Route path='/' element={
            <Cards
            
            characters = {characters}
            onClose = {onClose}
            />
         }/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='*' element={<NotFoundRedirect />}/>
         <Route path='/notFound' element={<Error404 />}/>
      </Routes>
   </div>

   );
}

export default App;
