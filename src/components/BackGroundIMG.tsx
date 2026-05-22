import Image from "next/image";

type Prop = {
    weatherCondition? : string;
}

export function BackGroundIMG({weatherCondition}:Prop){

  
  let backgroundImage = "/default.jpg";

  switch (weatherCondition) {
    case "Clear":
      backgroundImage = "/clear.jpg";
      break;

    case "Rain":
      backgroundImage = "/rain.jpg";
      break;

    case "Clouds":
      backgroundImage = "/cloud.jpg";
      break;

    case "Snow":
      backgroundImage = "/snow.jpg";
      break;

    default:
      backgroundImage = "/default.jpg";
  }

  return(
    <div className="absolute inset-0 -z-10">
        <Image
        src={backgroundImage}
        alt="Background"
        fill
        priority
        className="object-cover transition-all duration-500"
        />
    </div>
    );
}