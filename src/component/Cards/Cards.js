import './Cards.css'
import { FaStar, FaDownload } from 'react-icons/fa'; 

const Cards = (props) => {
  return (
    <div className='popular-item'>
    <div className='card-wrapper'>
   <img className='image-item' src={props.imge} alt=""/>
   <div className='item-content'>
       <h4 className='item-title'> 
       {props.title} 
       <br/> <span> {props.category} </span>
       </h4>
       <ul>
           <li> <FaStar className='icS'/> <span> {props.rate} </span> </li>
           <li><FaDownload className='icD'/> <span>{props.download}</span> </li>

       </ul>
   </div>

   </div>
</div>      
  )
}

export default Cards
