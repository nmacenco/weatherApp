
import React , {useState}  from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import c from './App.module.css';
import 'normalize.css'

import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx' ;
import CityDetail from './components/CityDetail.jsx'

const ApiKey = process.env.REACT_APP_WEATHER_API_KEY

function App() {
  
  
  const [cities , setCities] = useState([]);
  // const apiKey = '4ae2636d8dfbdc3044bede63951a019b' ;

  function onSearch (ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${ApiKey}&units=metric`)
    .then(response => response.json()) 
    .then(data => {
      if (data.main !== undefined ) {
        const ciudad = {
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max),
          img: data.weather[0].icon,
          key: data.id,
          id: data.id,
          wind: data.wind.speed,
          temp: data.main.temp,
          name: data.name,
          weather: data.weather[0].main,
          clouds: data.clouds.all,
          latitud: data.coord.lat,
          longitud: data.coord.lon,

        };
        // console.log(ciudad);
        if (cities.find( c => c.key === ciudad.key)){
          alert ('La ciudad ya se encuentra en la lista') ;
        } else {
          setCities (oldCities => [...oldCities , ciudad]) ;

        }
      } else {
        alert ('La ciudad no existe')
      }
    })

    

  }
  function onClose (id) {
    setCities( oldCities =>  oldCities.filter( city => city.key !== id ) )
  }

  // function onFilter (id) {
  //   let ciudad = cities.filter( c => c.id === parseInt(id))
  //   if(ciudad.length > 0) {
  //     // console.log(ciudad[0]);
  //     return ciudad[0]
  //   } else {
  //     return null ; 
  //   }
  // }

  return (
    <div className={`${c.app}`}>
      <Route 
        path= '/'
        render = {()=> <Nav onSearch={onSearch}/> }
      />
        
      <hr />
      <div className={`${c.cardContainer}`} >
        <Route
          path= '/'
          exact
          render={() => <Cards cities={cities} onClose = {onClose} /> }
        />
      </div>
      <hr />
      <Route 
        path= '/about'
        exact
        component = {About}
      />
      <div className={`${c.cardContainer}`} >
      <Route
        exact path= '/ciudad/:ciudadId'
        render = {({match}) => 
        // console.log(match)
        <CityDetail />
        }
        // render= { ( {match}) => {
        //   const city = cities.find(
        //     (c) => c.id === Number (match.params.ciudadId)
        //   );
        //   return <CityDetail city={city}
        // }}
      />
      </div>
    </div>
  );
}

export default App;
