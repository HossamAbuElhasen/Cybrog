import './Hero.css'
import {ButtonPrimary} from '../../component/index'


const Hero = () => {
  return (
    <div className='hero-name'>
      <div className='hero-text'>
        <h6 className='hero-subtitle'> welcome to cybrog</h6>
        <h4 className='hero-title'><em>Browse</em> pouplar game  </h4>

        
        <ButtonPrimary> Browse Now </ButtonPrimary>


      </div>
      
    </div>
  )
}

export default Hero
