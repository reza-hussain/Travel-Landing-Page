import React, { useState } from 'react'

import * as headerStyles from './header.module.scss'
function Header() {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if(window.scrollY >= 20){
      setColorChange(true);
    }
    else{
      setColorChange(false);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className={headerStyles.main}
    style ={{
      background: colorChange ? '#101010' : 'transparent',
      color: colorChange ? '#fafafa' :'#101010'
    }}>
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