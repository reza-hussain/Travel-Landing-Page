import React from 'react'

import * as testimonialStyles from './testimonials.module.scss'

function Testimonials(props) {
  return (
    <div className={testimonialStyles.main}>
        <div className={testimonialStyles.image}>
          <img src={props.image}/>
        </div>
        <h3>Sarah Williams</h3>
        <div className={testimonialStyles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}

export default Testimonials