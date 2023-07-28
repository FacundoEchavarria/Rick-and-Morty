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

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const response = await axios(URL + `?email=${email}&password=${password}&name=facundo`)
         const { access } = response.data;
         setAccess(response.data);
         access && navigate('/home');
      } catch (error) {
         alert('Datos incorrectos')
      }
   }
   const logout = () =>{
         setAccess(false);
         navigate('/');
   }
   useEffect(() => {
      !access && navigate('/');
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);

   const onSearch = async (id) =>{
      let repeat = true;
      characters.forEach(elem => {
         if(elem.id == id){
            repeat=false;
         }
      })
      if(repeat){
         try {
            const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            const data = response.data
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } 
         } catch (error) {
            alert('¡No hay personajes con este ID!')
         }
      }else alert('Este Personaje esta repetido')
   }
   const onClose = (id) =>{
      setCharacters(characters.filter(elem => elem.id !== id))
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
