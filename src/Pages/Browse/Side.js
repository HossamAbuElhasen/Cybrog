import './Side.css'
import { FaStar, FaDownload} from 'react-icons/fa';


const Side = (props) => {
  return (
    <div>
      <div className='conten'>
        <div className='img-do'>
        <img src={props.image} alt=''/> 
        </div>
        <div className='infor'>
        <h5> {props.title} </h5> 
         <h6> {props.category} </h6> 
        <FaStar className='icSS' /> <span>{props.rate}</span> 
        <FaDownload className='icDD' /> <span>{props.download}</span>
        </div>
 
        <div className='download'> 
       <a href='/#'><FaDownload/><i class="FaDownload"></i> </a> 
       </div>
      

      </div>
    </div>
  )
}

export default Side