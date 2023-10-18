import React, { useEffect, useState } from 'react'

const WeatherCard = ({ tempInfo }) => {
    const [weatherStatus, setweatherStatus] = useState("weathermood");
    const { temp,
        humidity,
        pressure,
        weathermood,
        name,
        country,
        sunset,
        speed, } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case 'clouds': setweatherStatus('wi-day-cloudy')
                    break;
                case 'Haze': setweatherStatus('wi-fog')
                    break;
                case 'Clear': setweatherStatus('wi-day-sunny')
                    break;
                case 'Smoke': setweatherStatus('wi-smoke')
                    break;
                default: setweatherStatus('wi-day-sunny')

                    break;
            }
        }
    }, [weathermood]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherStatus}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weathermood}</div>
                        <div className='place'>{name} , {country}</div>
                    </div>
                </div>
                <div className='date'>{new Date().toLocaleString()}</div>


                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr} PM <br /> sunset

                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity}
                                <br />
                                humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure}
                                <br />
                                pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed}
                                <br />
                                speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard
