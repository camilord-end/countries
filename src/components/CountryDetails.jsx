import { Detail } from "./Detail.jsx";
import { Languages } from "./Languages.jsx";
import { CountryTittle } from "./CountryTittle.jsx";
import { Weather } from "./Weather.jsx";

export const CountryDetails = ({
  name,
  capital,
  languages,
  region,
  subregion,
  flag,
  area,
  population,
}) => {
  return (
    <>
      <CountryTittle name={name} flag={flag} />
      <div className="country-details">
        <Detail detail={capital} text="Capital" />
        <Detail detail={population} text="Population" />
        <Detail detail={region} text="Region" />
        <Detail detail={subregion} text="Subregion" />
        <Detail detail={area} text="Area" />
      </div>
      <Languages languages={languages} />
      <Weather city={capital}/>
    </>
  );
};
