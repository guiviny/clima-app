import Image from "next/image";
import { WeatherData } from "../app/page";

type Props = {
  weather: WeatherData;
};

export default function WeatherCard({ weather }: Props) {
  const icon = weather.weather[0].icon;

  return (
    <div
      className="
        mt-6
        text-center
        animate-fadeIn
        bg-white/10
        backdrop-blur-md
        rounded-2xl
        p-4"
    >
      <h2 className="text-2xl font-bold">
        {weather.name}
      </h2>

      <Image 
      width={120}
      height={120}
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="Ícone do clima"
      className="mx-auto"
      />

      <p className="text-5xl mt-4">
        {Math.round(weather.main.temp)}°C
      </p>

      <p className="capitalize mt-2">
        {weather.weather[0].description}
      </p>

      <div className="mt-4 space-y-2">
        <p>Umidade: {weather.main.humidity}%</p>

        <p>Vento: {weather.wind.speed} km/h</p>

        <p>
          Sensação térmica:
          {" "}
          {Math.round(weather.main.feels_like)}°C
        </p>
      </div>
    </div>
  );
}