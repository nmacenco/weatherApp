import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import c from "../CityDetail.module.css";

const ApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function CityDetail() {
  const [city, setCity] = useState();
  const { ciudadId } = useParams();
  console.log(city);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=${ApiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) =>
        // console.log(data)
        {
          if (data !== undefined) {
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
            // console.log({ciudad});
            setCity(ciudad);
          }
        }
      );
  }, [ciudadId]);
  return (
    <div className={`${c.cardContainer}`}>
      {city === undefined ? (
        <div>
          <h4>Cargando... </h4>
        </div>
      ) : (
        <div>
          <h2>{city.name}</h2>
          <div>
            <div className={`${c.data}`}>Temperatura: {city.temp} ºC</div>
            <div className={`${c.data}`}>Clima: {city.weather}</div>
            <div className={`${c.data}`}>Viento: {city.wind} km/h</div>
            <div className={`${c.data}`}>Cantidad de nubes: {city.clouds}</div>
            <div className={`${c.data}`}>Latitud: {city.latitud}º</div>
            <div className={`${c.data}`}> Longitud: {city.longitud}º</div>
            <div className={`${c.data}`}> Provincia: {city.longitud}º</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityDetail;
