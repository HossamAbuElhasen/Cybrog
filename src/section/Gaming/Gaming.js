import './Gaming.css';
import { Cardgaming,  Warppers } from '../../component/index';

import GamingLibrary_01 from '../../assets/imgs/game-01.jpg'
import GamingLibrary_02 from '../../assets/imgs/game-02.jpg'
import GamingLibrary_03 from '../../assets/imgs/game-03.jpg'
const Gaming = () => {


  return (
    <>
      <Warppers>
        <div className='gam-title'>
        <h1> Gaming  <span className='heade'> libary</span></h1>

        </div>
        <div className='gaming-libary-cards'>
       
        <Cardgaming image={GamingLibrary_01} title='Fortnite'category ='sandbox'  data_added="22/4/2023" hours_played="56 H 30 Min" download="Downloaded"/>
        <Cardgaming image={GamingLibrary_02} title='Pubg' category ='stream' data_added="19/7/2022" hours_played="77 H 30 Min" download="Downloaded"/>
        <Cardgaming image={GamingLibrary_03} title='Dota2'category ='Legendary'data_added="04/8/2021" hours_played="96 H 30 Min" download="Downloaded" />                        
       </div>
      </Warppers>
    </>
  );
}

export default Gaming;
