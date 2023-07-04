import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styles from './App.module.css'
import About from './components/about/about';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Error404 from './components/notFound/NotFound';
import Favorites from './components/Favorites/favorites';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';

function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const dispatch = useDispatch()

   const navigate = useNavigate()
   const EMAIL = 'facundo@gm.com'
   const PASSWORD = 'boca10'

   const login = (userData) =>{
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert('Los datos son incorerctos')
      }
   }
   const logout = () =>{
         setAccess(false);
         navigate('/');
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
      dispatch(removeFav(id))
   }

   let location = useLocation()

   return (

      
   <div className={styles.App}>

      {(location.pathname === '/' || location.pathname === '/notFound') ? null : <Nav onSearch={onSearch} logout={logout}/> }
      
      <Routes>
         <Route path='/' element={<Form login = {login}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
         <Route path='/home' element={
            <Home
            characters = {characters}
            onClose = {onClose}
            />
         }/>
         <Route path='/notFound' element={<Error404 />}/>
         <Route path='*' element={<Error404 />}/>
      </Routes>
   </div>

   );
}

export default App;
