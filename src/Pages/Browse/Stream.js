import './Stream.css'
const Stream = (props) => {
  return (

    <div className='stream-item'>
    <div className='container'>
      <div className='card-wrappers'>
                 <img src={props.image} className='img-str' alt=''/>
                 <div className='item-contents'>
                    <img src={props.imgli} className='imgli' alt=''/> 
                    <ul>
                        <li><h5 className='item-titles'>{props.title}</h5></li>
                        <li>  <p>{props.pr}</p></li>

                    </ul>


                </div>
            </div>  
                 
           
        
    </div>
    
</div>    

  )
}

export default Stream
