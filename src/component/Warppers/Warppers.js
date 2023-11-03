import './Warppers.css'

const Warppers = (props) => {
  return (
    <div className='section-wrapper'>
      {props.children}
    </div>
  )
}

export default Warppers
