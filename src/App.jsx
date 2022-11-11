import { useState, useEffect } from 'react'
import axios from 'axios'
import { Tittle } from './components/Tittle'
import { Filter } from './components/Filter'
import { CountryDetails } from './components/CountryDetails'
import { CountryList } from './components/CountryList'

import './styles/App.css'

function App() {
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }, [input])

  const filteredData = () => {
    return countries.filter((country) => {
      if (country.name.common.toLowerCase().includes(input.toLowerCase())) {
        return true
      }
    })
  }

  return (
    <div className='app-container'>
      <Tittle text='Country Info DB' />
      <Filter handler={handleInputChange} value={input} />
      <div className='results-container'>
        <h2 className='results-tittle'>Results: </h2>
        {filteredData().length < 10 && filteredData().length > 1 ? (
          filteredData().map((country) => {
            return (
              <div key={country.name.common} className='country'>
                <CountryList data={country} />
              </div>
            )
          })
        ) : filteredData().length === 1 ? (
          filteredData().map(
            ({
              ccn3,
              name,
              capital,
              languages,
              flag,
              region,
              subregion,
              area,
              population
            }) => {
              return (
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
                />
              )
            }
          )
        ) : (
          <p id='results-legend'>Be more specific 😀</p>
        )}
      </div>
    </div>
  )
}

export default App
