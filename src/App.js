import './App.css';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <h1 className="titulo">Rick and Morty</h1>
         <p className='autor'>By Facundo Echavarria</p>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
