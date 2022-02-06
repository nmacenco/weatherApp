import React , {useState} from 'react';
import c from '../SearchBar.module.css' ;
import Cards from './Cards';

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city , setCity] = useState();
  function handleChange (e) {
    setCity(e.target.value) ;
  }
  return (
    <form onSubmit={ (e) => {
      e.preventDefault() ;
      onSearch(city) ;
      <Cards cities = {city} /> ;
      e.target.reset() ;

    }} 
    className={`${c.searchBar}`}>
      <input onChange={handleChange} placeholder='Ciudad...'></input>
      <button>Agregar</button>
    </form>
  )
  // return <div>Search Bar Component</div>
};