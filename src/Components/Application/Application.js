import React, { useState, useEffect } from 'react'
import './Application.css'
import Aos from 'aos';
import { FetchWeather } from '../../Api/FetchWeather';

const Application = () => {
    useEffect(() =>{
        Aos.init({duration: 1000})
    }, [])
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({})

    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await FetchWeather(query);
            setWeather(data);
            setQuery('')
            console.log(data);
        }
    }
return (
    <div className='container'>
        <div className="Search">
            <input type="text"
                placeholder='Search...'
                className='search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
        </div>
        {
            weather.main && (
                <div className="city">
                    <div className="info">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
                    </div>
                    <div className="details">
                        <h2 className="cityName">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="cityTemp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>
        )}
    </div>
)
}

export default Application
