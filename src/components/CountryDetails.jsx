import { Detail } from './Detail.jsx'
import { Languages } from './Languages.jsx'
import { CountryTittle } from './CountryTittle.jsx'
import { Weather } from './Weather.jsx'
import '../styles/CountryDetails.css'

export const CountryDetails = ({
  name,
  capital,
  languages,
  region,
  subregion,
  flag,
  area,
  population
}) => {
  return (
    <>
      <div className='country-details'>
        <CountryTittle name={name} flag={flag} />
        <Detail detail={population} text='Population' />
        <Detail detail={region} text='Region' />
        <Detail detail={subregion} text='Subregion' />
        <Detail detail={area} text='Area in km²' />
        <Languages languages={languages} />
        <div className='capital-container'>
          <Detail detail={capital} text='Capital' />
          <Weather city={capital} />
        </div>
      </div>
    </>
  )
}
