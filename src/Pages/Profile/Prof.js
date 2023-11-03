import './Profile.css';
import { ButtonSecondarr } from '../../component';


const Prof = (props) => {
  return (
    <div className='prof-container'>
      <div>
        <img src={props.imge} className='photo' alt='' />
      </div>
      <div className='info-container'>
        <div className='status'>
          <h5>{props.statue}</h5>
        </div>
        <h4 className='title'>{props.title}</h4>
        <p className='description'>{props.detils}</p>

         <ButtonSecondarr>Start Live Stream</ButtonSecondarr>

      </div>
      <div className='side-container'>
        <p className='side-text'>Games download : <span className='side-span'>4</span></p>
        <hr />
        <p className='side-text'>Friends Online : <span className='side-span'>16</span></p>
        <hr />
        <p className='side-text'>Live Streams : <span className='side-span'>None</span></p>
        <hr />
        <p className='side-text'>Clips : <span className='side-span'>28</span></p>
      </div>
    </div>
  );
}

export default Prof;
