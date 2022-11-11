import '../styles/Languajes.css'

export const Languages = ({ languages }) => {
  const langArray = Object.entries(languages)
  return (
    <div className='languages-container'>
      <div className='languages-tittle'>Languages: </div>
      <ul className='languages-list'>
        {langArray.map((lang) => {
          return <li key={lang[1]}>{lang[1]}</li>
        })}
      </ul>
    </div>
  )
}
