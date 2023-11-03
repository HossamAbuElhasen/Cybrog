import './Container.css'

const Container = (props) => {
  return (
    <div className='Container main-Container'>
      {props.children}
    </div>
  )
}

export default Container
