import './Profile.css'
import Prof from './Prof'
import Clips from './Clips'
import clip_01 from '../../assets/imgs/clip-01.jpg'
import clip_02 from '../../assets/imgs/clip-02.jpg'
import clip_03 from '../../assets/imgs/clip-03.jpg'
import clip_04 from '../../assets/imgs/clip-04.jpg'

import profile_01 from '../../assets/imgs/profile.jpg'




const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='pr-co'>
      <Prof imge={profile_01} statue="Online" title="Alan Smithee" detils="You Haven't Gone Live yet. Go Live By Touching The Button Below" />
      </div>

      <div className='row'>
        <div className='col-lg-12 p-clip'>
          <h1><span className='tit-cl-h'> Your Most</span>  <span className='s-t-c'> Popular Clips </span> </h1>

        </div>

        <Clips  image={clip_01} title="First Clip" viwes="250"/>
        <Clips  image={clip_02} title="second Clip" viwes="180"/>
        <Clips  image={clip_03} title="third Clip" viwes="120"/>
        <Clips  image={clip_04} title="fourth Clip" viwes="90"/>


      </div>
      <div className='bt-cl'>
      <button className='btn-primar'> More </button>

      </div>

    </div>
  );
}

export default Profile;
