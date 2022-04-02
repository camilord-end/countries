import { useState } from "react";
import { CountryDetails } from "./CountryDetails";
import "../styles/CountryList.css";

export const CountryList = ({ data }) => {
  const [displayDetails, setDisplayDetails] = useState(false);

  const handleDisplay = () => {
    setDisplayDetails(!displayDetails);
  };

  return (
    <>
      <div className="country-item">
        <div className="list-text">{data.name.common}</div>
        <div className="list-button">
          <button className="list-button" onClick={handleDisplay}>
            {displayDetails ? "Hide details" : "Show Details"}
          </button>
        </div>
      </div>
      <div className="country-details-container">
        {displayDetails && (
          <CountryDetails
            key={data.ccn3}
            name={data.name.common}
            capital={data.capital}
            languages={data.languages}
            flag={data.flag}
            region={data.region}
            subregion={data.subregion}
            area={data.area}
            population={data.population}
            borders={data.borders}
          />
        )}
      </div>
    </>
  );
};
