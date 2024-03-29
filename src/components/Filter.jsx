import '../styles/Filter.css'

export const Filter = ({ handler, value }) => {
  return (
    <div className='filter-container'>
      Country:{' '}
      <input
        id='input-filter'
        type='text'
        onChange={handler}
        placeholder='type country name in english'
        value={value}
      />
    </div>
  )
}
