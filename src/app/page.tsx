"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { BackGroundIMG } from "../components/BackGroundIMG";
import Loading from "../components/Loading";

export type WeatherData = {
  weather: {
    main: string;
    description: string;
    icon: string
  }[];

  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };

  wind: {
    speed: number;
  };

  name: string;
};


export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {

    if (!city) return;

    try {
      setLoading(true);

      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
      );


      const data = await response.json();
      console.log(data);

      if (data.cod === "404") {
        setError("Cidade não encontrada");
        setWeather(null);
        return;
      }

      setError("");
      setWeather(data);
    } catch (error) {
      setError("Erro ao buscar clima");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const weatherCondition = weather?.weather?.[0]?.main;

  return (
    <main className="relative min-h-screen text-white flex items-center justify-center">

      <BackGroundIMG weatherCondition={weatherCondition}/>
      <div className="bg-zinc-800/70 backdrop-blur-md p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Clima em Tempo Real
        </h1>

        <SearchBar
          city={city}
          setCity={setCity}
          getWeather={getWeather}
          loading={loading}
        />
        
        {loading && <Loading/>}

        {error && (
          <p className="text-red-400 mt-4 text-center">
            {error}
          </p>
        )}

        {weather?.main && <WeatherCard weather={weather} />}
      </div>

    </main>
  );
}