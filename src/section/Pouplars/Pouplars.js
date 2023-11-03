import  './Pouplars.css'
import React, { useState } from 'react';
import {Cards,  Warppers} from '../../component/index'

import Popular_01 from '../../assets/imgs/popular-01.jpg'
import Popular_02 from '../../assets/imgs/popular-02.jpg'
import Popular_03 from '../../assets/imgs/popular-03.jpg'
import Popular_04 from '../../assets/imgs/popular-04.jpg'
import Popular_05 from '../../assets/imgs/popular-05.jpg'
import Popular_06 from '../../assets/imgs/popular-06.jpg'
import Popular_07 from '../../assets/imgs/popular-07.jpg'
import Popular_08 from '../../assets/imgs/popular-08.jpg'




function Pouplars() {

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Warppers>
        <h1 className='m-p-n'>
          <span className='under-line'>Most popular</span>
          <span className='heade'> Right Now </span>
        </h1>
        <div className='most-poular-items'>
          <Cards imge={Popular_01} title='Fortnite' category='sandbox' rate='9.2' download='8k' />
          <Cards imge={Popular_02} title='Pubg' category='stream' rate='9.8' download='10k' />
          <Cards imge={Popular_03} title='Dota2' category='Legendary' rate='7.0' download='5.3K' />
          <Cards imge={Popular_04} title='CS-GO' category='Battle' rate='8.1' download='6.8K' />
          {showMore && (
            <>
              <Cards imge={Popular_05} title='Mini Craft' category='Matrix Games' rate='4.8' download='2.3K' />
              <Cards imge={Popular_06} title='Eagles Fly' category='Battle' rate='8.1' download='6.3K' />
              <Cards imge={Popular_07} title='Warface' category='Max 3D' rate='7.1' download='4.8K' />
              <Cards imge={Popular_08} title='Warcraft' category='Legend' rate='8.1' download='3.8K' />
            </>
          )}
        </div>
        <button className='btn-primar' onClick={handleToggle}>
          {showMore ? 'Hidden' : 'Show More'}
        </button>
      </Warppers>
    </>
  );
}


export default Pouplars