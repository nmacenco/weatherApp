import React from 'react';
import Card from './Card';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  // console.log(cities);
  return (
      cities.map ( city => (
       <Card
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => onClose(city.key)}
          id = {city.key}
          key = {city.key}
       /> 
      ))

  )
  // return <div>Cards Component</div>
};