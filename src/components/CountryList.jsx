import { useState } from 'react'
import { CountryDetails } from './CountryDetails'
import '../styles/CountryList.css'
import { FaPlus, FaMinus } from 'react-icons/fa'

export const CountryList = ({
  data: {
    name,
    ccn3,
    capital,
    languages,
    flag,
    region,
    subregion,
    area,
    population,
    borders
  }
}) => {
  const [displayDetails, setDisplayDetails] = useState(false)

  const handleDisplay = () => {
    setDisplayDetails((prevDisplay) => !prevDisplay)
  }

  return (
    <>
      <div className='country-item'>
        <div className='list-text'>{name.common}</div>
        <button className='list-button' onClick={handleDisplay}>
          {displayDetails ? <FaMinus size={15} /> : <FaPlus size={15} />}
        </button>
      </div>
      <div className='country-details-container'>
        {displayDetails && (
          <CountryDetails
            key={ccn3}
            name={name.common}
            capital={capital}
            languages={languages}
            flag={flag}
            region={region}
            subregion={subregion}
            area={area}
            population={population}
            borders={borders}
          />
        )}
      </div>
    </>
  )
}
