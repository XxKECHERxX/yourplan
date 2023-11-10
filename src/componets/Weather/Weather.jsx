import { useEffect, useState } from 'react'
import styles from './Weather.module.css'

const Weather = () => {
  const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch(
      'http://api.openweathermap.org/geo/1.0/direct?q=Белград&appid=244151b87ec73685e0c7cac7d98fb3b4'
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation(data[0])
      })
  }, [])

  useEffect(() => {
    if (location) {
      const lat = location.lat.toFixed(2)
      const lon = location.lon.toFixed(2)

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=244151b87ec73685e0c7cac7d98fb3b4&units=metric&lang=ru`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data))
    }
  }, [location])

  return (
    <div className={styles.frameWeather}>
      {weather && (
        <div className={styles.info}>
          <div className={styles.temp}>{weather.main.temp_max.toFixed()} С</div>
          <div>{weather.weather[0].description}</div>
          <div>Влажность {weather.main.humidity} %</div>
          <div>Давление {(weather.main.pressure / 1.33).toFixed()} мм</div>
        </div>
      )}
    </div>
  )
}

export default Weather
