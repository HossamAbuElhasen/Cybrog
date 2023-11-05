import './Browse.css'
import { FaStar, FaDownload } from 'react-icons/fa';

const Feature = (props) => {
  return (
    <div className='popular-itemm'>
        <div className='container'>
          <div className='card-wrapperr'>
              <img src={props.image} alt=''/>
                <div className='item-contentt'>
                   <h3 className='item-titlee'>{props.title}</h3>
                    <ul>
                        <li>Rate : <FaStar className='icS' /> <span>{props.rate}</span> </li> 
                        <li>download :<FaDownload className='icD' /> <span>{props.download}</span> </li>
                    </ul>
                 </div>
             </div>        
        </div>
        
    </div>    
    
  );
}
export default Feature;



