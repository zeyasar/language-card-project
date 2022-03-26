import './Item.css'
import { useState } from 'react';

const Item = ({card}) => {

  const [showLogo, setShowLogo] = useState(true);

  

  return (
    <div className='card' onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
      <div>
        <img src={card.img} alt="img-lang" className='card-logo' />
        <h3 className='card-title'>{card.name}</h3>
      </div>
      ) : (
      <ul className="list">
        {
          card.options.map((option, index) => {
            return <li key={index}>{option}</li>
          })
        }
      </ul>
      )}
    </div>
  )
}

export default Item