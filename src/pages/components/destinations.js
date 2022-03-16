import React from 'react'

import * as destinationStyles from './destination.module.scss'

function Destinations(props) {
  return (
    <div className={destinationStyles.main}>
        <div className={destinationStyles.image}><img src={props.image}/></div>
        <div className={destinationStyles.description}>
          <div className={destinationStyles.text}>
            <h5>{props.destination}</h5>
            <p>{props.price}</p>
          </div>
          <div className={destinationStyles.icons}>
            <i className='bi bi-send-fill'></i>
            <i className='bi bi-heart-fill'></i>
          </div>
        </div>
    </div>
  )
}

export default Destinations