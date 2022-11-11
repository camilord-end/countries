import '../styles/Detail.css'

export const Detail = ({ text, detail }) => {
  return (
    <div className='detail-container'>
      <div className='text'>{text}:</div>
      <div className='detail'>{detail}</div>
    </div>
  )
}
