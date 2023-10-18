import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';
import "./style.css";

const Weather = () => {


    const [searchValue, setsearchValue] = useState("surat");
    const [tempInfo, settempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=2ff70dd50969d5383675e113392e9178`

            const res = await fetch(url);
            const data = await res.json()

            const { temp, humidity, pressure } = data.main
            const { main: weathermood } = data.weather[0]
            const { name } = data
            const { country, sunset } = data.sys
            const { speed } = data.wind

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                country,
                sunset,
                speed,
            };

            settempInfo(myNewWeatherInfo)

        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, []);

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type="search" placeholder='Search' className='searchTerm' value={searchValue} onChange={(e) => {
                        setsearchValue(e.target.value)
                    }} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            <WeatherCard tempInfo={tempInfo} />
        </>
    )
}

export default Weather
