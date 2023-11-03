import './Cardgaming.css'
import { ButtonSecondarr } from '../Buttons/Button'

const Cardgaming = (props) => {
  return (
    <div className='gaming-libary-card'>
        <ul>
            <li><img src={props.image}  className='img-itm' alt='' /></li>
            <li><h4> <span className='info-itm'>{props.title}</span> </h4> <span> {props.category} </span> </li>
            <li><h4> <span className='info-itm'>Data Added </span>  </h4> <span> {props.data_added} </span> </li>
            <li><h4><span className='info-itm'>Hours played </span></h4><span>{props.hours_played}</span></li>
            <li><h4 ><span className='info-itm'>Currently </span> </h4><span>{props.download}</span></li>
            <ButtonSecondarr> Download </ButtonSecondarr>
        </ul>
    </div>
  )
}

export default Cardgaming
