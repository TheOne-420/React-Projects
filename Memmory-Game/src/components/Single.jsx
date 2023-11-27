
import  PropTypes from 'prop-types';

    function Single({card, handleChoice, flipped, disabled})
    {
      
       
        return (
            <div className='cards'>
            <div className={flipped? 'flipped' : ""}> 
                <img src={card.src} className='front' alt='front' />
                <img src="./imgs/cover.png" 
                 className='back'
                 alt='back'
                 onClick={()=>
                    {
                        if(!disabled)
                        {
                            handleChoice(card)
                        }
                        
                    }
                     
                  }               
                  />
                
            </div>
            </div>
        );
    }
  Single.propTypes={
    card: PropTypes.object,
    handleChoice: PropTypes.func,
    flipped: PropTypes.bool,
    disabled: PropTypes.bool
  }



export default Single;