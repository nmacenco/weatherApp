import React from 'react';
import  c from '../Card.module.css' ;
import { Link } from 'react-router-dom';

export default function Card({name , max , min , img , onClose, id }) {
  // acá va tu código
  // console.log(id);
  return (
    <div className={`${c.cardContainer}`}>
      <div className={`${c.iconCrux}`}><i className="fas fa-times" onClick={onClose}  ></i></div>
      
      
      <Link to={ `/ciudad/${id}` }> <h3> {name} </h3>  </Link>
      <div className= {`${c.cardTemperature}`}>
        <div>
          <h6>Min</h6>
          <h6> {min}° </h6>
        </div>
        <div>
          <h6>Max</h6>
          <h6> {max}° </h6>
        </div>
        <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`}  alt='Imagen' /> 
      </div>


    </div>
  )
  // return <div>Card Component</div>
};