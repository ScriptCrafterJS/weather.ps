import { useState, useEffect } from "react";
import axios from "axios";

export function MainPage() {
  const [weather, setWeather] = useState(null);
  const API_KEY = "9e371fce691e4186a88113516251002";

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5&aqi=yes&alerts=no`
      );

      // Ensure data structure exists before setting state
      if (response.data && response.data.current) {
        setWeather(response.data);
      } else {
        console.error("Unexpected API response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // setLocation({ lat: latitude, lon: longitude });
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      {weather ? (
        <>
          <h2>Weather in {weather.location.country}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Condition: {weather.current.condition.text}</p>
        </>
      ) : (
        "loading..."
      )}
    </>
  );
}
