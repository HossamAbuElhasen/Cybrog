import './Button.css'

const ButtonPrimary = (props) => {
  return (
    <div className='button ButtonPrimary'>
        <a href='/#' >{props.children}</a>
    </div>
  )
}
const ButtonSecondarr = (props) => {
    return (
      <div className='button ButtonSecondarr'>
        <a href='/#' >{props.children}</a>
      </div>
    )
  }

export default ButtonPrimary
export {ButtonSecondarr}
