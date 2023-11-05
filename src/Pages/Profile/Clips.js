import './Profile.css'
import {FaPlay,FaEye}  from 'react-icons/fa';

const Clips = (props) => {
  return (
    <>
      <div class="col-lg-3 col-sm-6">
            <div className='card-clip'>
                    <div>
                        <img src={props.image} className='photo-clip' alt=''/> 
                        <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank" rel="noreferrer"><FaPlay/><i class="fa fa-play"></i></a>
                    </div>
                <div className='info-clip'>
                    <h5 className='title-clip'> {props.title} </h5>
                    <span><i className='fa fa-eye'><FaEye/></i> {props.viwes}</span>
                </div>
            </div>
    </div>
    </>
  )
}
export default Clips
