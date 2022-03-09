import React from 'react'

import * as headerStyles from './header.module.scss'
function Header() {
  return (
    <div className={headerStyles.main}>
        <h1>travel.</h1>
        <div className={headerStyles.nav}>
            <ul className={headerStyles.links}>
                <li className={headerStyles.link} >Destination</li>
                <li className={headerStyles.link} >Hotels</li>
                <li className={headerStyles.link} >Flights</li>
                <li className={headerStyles.link} >Bookings</li>
            </ul>
            <div className={headerStyles.navButton}>
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default Header