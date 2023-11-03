import './Browse.css'
import featured_01 from '../../assets/imgs/featured-01.jpg'
import featured_02 from '../../assets/imgs/featured-02.jpg'
import featured_03 from '../../assets/imgs/featured-03.jpg'
import game_01 from '../../assets/imgs/game-01.jpg'
import game_02 from '../../assets/imgs/game-02.jpg'
import game_03 from '../../assets/imgs/game-03.jpg'
import stream_01 from '../../assets/imgs/stream-01.jpg'
import stream_02 from '../../assets/imgs/stream-02.jpg'
import stream_03 from '../../assets/imgs/stream-03.jpg'
import stream_04 from '../../assets/imgs/stream-04.jpg'
import imgli_01 from '../../assets/imgs/avatar-01.jpg'
import imgli_02 from '../../assets/imgs/avatar-02.jpg'
import imgli_03 from '../../assets/imgs/avatar-03.jpg'
import imgli_04 from '../../assets/imgs/avatar-04.jpg'


import {Feature,Side} from'../index'

import 'bootstrap/dist/css/bootstrap.min.css';
import Stream from './Stream'

const Browser = () => {

    return (

        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-8">
                <div className="sect col-lg-12">
                    <Feature image={featured_02} title='Cs-Go' rate='9.5' download='9.7' />
                    <Feature image={featured_03} title='Island' rate='8.6' download='7.6K' />
                    <Feature image={featured_01} title='Gamzer' rate='7.9' download='8.8K' />
                </div>
              </div>
            <div className="col-lg-4">
                <div className="sidebar">
                    <h1 className='hh' >  <span className='under-line'>Top</span> <br/> <span className='headee'> Download </span> </h1>
                    <Side image={game_01} title="Fortnint" category='sandbox'  rate='7.9' download='8.8K' />
                    <Side image={game_02} title="CS-Go" category='Legendary'  rate='9.5' download='9.7' />
                    <Side image={game_03} title="Pubg" category='Battle Royale' rate='8.6' download='7.6K' />
                </div>
  
            </div>
        </div>

        <div className='titl'>
            <h1> <span className='under-line'>Most popular</span>  <span className='headee'>Live Stream </span>  </h1>
            </div>
        <div className='col-lg-12 str' >

            <div className='streami'>
                <Stream image={stream_01} imgli={imgli_01} title="KenganC" pr="Just Talking With Fans"/>
                <Stream image={stream_02} imgli={imgli_02} title=" LunaMa" pr="S-GO 36 Hours Live Stream"/>
                <Stream image={stream_03} imgli={imgli_03} title="Areluwa" pr="Live Streaming  Morning"/>
                <Stream image={stream_04}  imgli={imgli_04} title="GangTm" pr="Maybe Nathej Allnight "/>

            </div>


        </div>





    </div>
    );
}

export default Browser;


