import React from 'react'

import * as servicesStyles from './services.module.scss'

function Services(props) {
  return (
    <div className={servicesStyles.main}>
        <div className={servicesStyles.image}><i className={props.image}></i></div>
        <div className={servicesStyles.title}>{props.title}</div>
        <div className={servicesStyles.description}>{props.description}</div>
    </div>
  )
}

export default Services