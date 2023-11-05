import './Details.css';
import {FaPlay,FaHdd,FaGamepad,FaDownload,FaStar}  from 'react-icons/fa';

import details_01 from '../../assets/imgs/feature-right.jpg'
import details_1 from '../../assets/imgs/details-01.jpg'
import details_2 from '../../assets/imgs/details-02.jpg'
import details_3 from '../../assets/imgs/details-03.jpg'


const Details = () => {
  return (
    <>
      <div className='col-lg-12 img-con'>
            <div>
                <img src={details_01} className='photo-detlis' alt='' />
                <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank" rel="noreferrer"><FaPlay/><i class="fa fa-play"></i></a>
            </div>
        </div>
            <div className="col-lg-12 tit-dat">
               <h1> <span className='s-f'>FORTNITE </span>   <span className='s-dat'> DETAILS </span> </h1>
            </div>
            <div className='details-container'>
            <div className="container">
    <div className="row">
        <div className="col-lg-6">
        <div className="det-info">
            <div className="d-flex justify-content-between">
            <h5>Fortnint</h5>
            <div className="d-flex align-items-center">
                <FaStar className="icS" />
                <p className='f-de'>8.5</p>
            </div>
            </div>
            <div className="d-flex justify-content-between s-n-b">
            <p>sandbox</p>
            <div className="d-flex align-items-center">
                <FaDownload className="icD" />
                <p className='f-de'>10 k</p>
            </div>
            </div>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="det-ic">
            <div className="row">
            <div className="col-3">
                <div className="text-center">
                <FaStar className="icS" />
                <p>8.5</p>
                </div>
            </div>
            <div className="col-3">
                <div className="text-center">
                <FaDownload className="icD" />
                <p>6k</p>
                </div>
            </div>
            <div className="col-3">
                <div className="text-center">
                <FaHdd className="icH" />
                <p>2GB</p>
                </div>
            </div>
            <div className="col-3">
                <div className="text-center">
                <FaGamepad className="icG" />
                <p>2k</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4 mb-3">
        <img src={details_1} className="img-det mx-auto" alt="" />
        </div>
        <div className="col-md-4 mb-3">
        <img src={details_2} className="img-det mx-auto" alt="" />
        </div>
        <div className="col-md-4 mb-3">
        <img src={details_3} className="img-det mx-auto" alt="" />
        </div>
    </div>
    </div>
  <div className='row'>
    <div className='col-md-12 txt-det'>
      <p className='p-d'>
        Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.
        You can make a small contribution via PayPal to info at templatemo.com and thank you for supporting.
        If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur 
        es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
      </p>
    </div>
  </div>
  <div className='row'>
    <div className='col-md-12 text-center'>
      <button className='btn-primar'> Download Fortnint Now </button>
    </div>
  </div>
</div>
    </>
  )
}

export default Details

