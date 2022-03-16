import React from 'react'

import * as footerStyles from './footer.module.scss'
function Footer() {
  return (
    <div className={footerStyles.main}>
        <div className={footerStyles.logo}><h1>travel.</h1></div>
        <div className={footerStyles.column1}>
            <h4>Company</h4>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
            </ul>
        </div>
        <div className={footerStyles.column2}>
            <h4>Contact</h4>
            <ul>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affiliates</li>
            </ul>
        </div>
        <div className={footerStyles.column3}>
            <h4>More</h4>
            <ul>
                <li>Airline Fees</li>
                <li>Airline</li>
                <li>Low Fare Tips</li>
            </ul>
        </div>
        <div className={footerStyles.column4}>
            <div className={footerStyles.column4Icons}>
                <i className='bi bi-facebook'></i>
                <i className='bi bi-instagram'></i>
                <i className='bi bi-twitter'></i>
            </div>
        </div>
    </div>
  )
}

export default Footer