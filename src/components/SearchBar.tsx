type Props = {
  city: string;
  setCity: (value: string) => void;
  getWeather: () => void;
  loading: boolean;
};

export default function SearchBar({
  city,
  setCity,
  getWeather,
}: Props) {

  return (

    <div>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getWeather();
          }
        }}
        type="text"
        placeholder="Digite uma cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-3 rounded-xl bg-zinc-700 outline-none"
      />

      <button
        onClick={getWeather}
        className="cursor-pointer w-full bg-blue-500 p-3 rounded-xl mt-4 hover:bg-blue-600 transition"
      >
        Buscar
      </button>
    </div>
  );
}