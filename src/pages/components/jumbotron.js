import React from 'react'

import * as jumbotronStyles from './jumbotron.module.scss'
import Services from './services'

function Jumbotron() {
  return (
    <>
    <div className={jumbotronStyles.main}>
        <div className={jumbotronStyles.description}>
            <h1>Travel, enjoy and live a new and full life</h1>
            <p>
                Online estate agency, the modern way to sell your own home.<br />
                You can use griffin residential to market your property
            </p>
            <button>Find out more</button>
        </div>
        <div className={jumbotronStyles.mainImage}>
            <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" alt="" />
        </div>
    </div>

    {/* ------ Next Content*/}

    <div className={jumbotronStyles.services}>
        <div className={jumbotronStyles.servicesTitle}>
            <h2>We Offer Best Services</h2>
            <p>Check them out here</p>
        </div>
        <div className={jumbotronStyles.servicesContent}>
            <Services
            title='Calculated Weather'
            description='Built wicket longer admire do barton lets do weathet wow'
            image='bi bi-cloud-sun-fill'/>

            <Services
            title='Best Flights'
            description='Built wicket longer admire do barton lets do weathet wow'
            image='bi bi-send'/>

            <Services
            title='Calculated Weather'
            description='Built wicket longer admire do barton lets do weathet wow'
            image='bi bi-cloud-sun-fill'/>

            <Services
            title='Calculated Weather'
            description='Built wicket longer admire do barton lets do weathet wow'
            image='bi bi-cloud-sun-fill'/>
        </div>
    </div>
    </>
  )
}

export default Jumbotron