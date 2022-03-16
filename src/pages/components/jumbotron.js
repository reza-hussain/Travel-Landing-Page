import React from 'react'
import Destinations from './destinations'

import * as jumbotronStyles from './jumbotron.module.scss'
import Services from './services'
import Testimonials from './testimonials'

function Jumbotron() {
  return (
    <>
    <div className={jumbotronStyles.mainDiv}>
        <div className={jumbotronStyles.main}
        style={{
            backgroundImage: `url(https://source.unsplash.com/hFXZ5cNfkOk/1920x2911)`,
            backgroundSize: 'cover'
    }}
        >
            <div className={jumbotronStyles.description}>
                <h1>Travel, enjoy and live a new and full life</h1>
                <p>
                    Online estate agency, the modern way to sell your own home.<br />
                    You can use griffin residential to market your property
                </p>
                <button>Find out more</button>
            </div>
        </div>

        {/* ----------------------------Next Content------------------------*/}

        <div className={jumbotronStyles.services}>
            <div>
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

        {/* ----------------------------Next Content------------------------*/}
        <div className={jumbotronStyles.destination}>
            <div>
                <h2>Top Destinations</h2>
                <p>Places you can't resist going to</p>
            </div>
            <div className={jumbotronStyles.destinationContent}>
                <Destinations image='https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                destination='Santorini, Greece'
                price='$5.4k'/>
                
                <Destinations image='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                destination='Santorini, Greece'
                price='$5.4k'/>

                <Destinations image='https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                destination='Santorini, Greece'
                price='$5.4k'/>
            </div>
        </div>

        {/* ----------------------------Next Content------------------------*/}
        <div className={jumbotronStyles.book}>
            <div className={jumbotronStyles.bookLeft}>
                <h1>Book your next trip in 3 easy steps</h1>
                <p>It's super easy and surprisingly fast</p>
                <div>
                    <i className='bi bi-search'></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div>
                    <i className='bi bi-cash'></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div>
                    <i className='bi bi-bicycle'></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>

            <div className={jumbotronStyles.bookRight}>
                <div className={jumbotronStyles.bookRightRow}>
                    <div className={jumbotronStyles.bodyImage}><img src="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" /></div>
                    <h3>Trip to Greece</h3>
                    <p>24th March 2022</p>
                    <div className={jumbotronStyles.bookRightIcons}>
                        <div className={jumbotronStyles.locationIcon}><i className='bi bi-geo-alt-fill'></i></div>
                        <div className={jumbotronStyles.mapIcon}><i className='bi bi-map'></i></div>
                        <div className={jumbotronStyles.planeIcon}><i className='bi bi-send-fill'></i></div>
                    </div>
                    <div className={jumbotronStyles.bookRightIcons2}>
                    <div className={jumbotronStyles.saveIcon}><i className="bi bi-save"></i></div>
                    <p>24 people going</p>
                    <div className={jumbotronStyles.heartIcon}><i className="bi bi-heart"></i></div>
                    </div>
                </div>
            </div>
            
        </div>

        {/* ----------------------------Next Content------------------------*/}
        <div className={jumbotronStyles.testimonials}>
            <div>
                <h1>What people say about Us.</h1>
            </div>
            <div className={jumbotronStyles.testimonialsContent}>
                <Testimonials image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
                />
                <Testimonials image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
                />
                <Testimonials image='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
                />
            </div>
        </div>

        {/* ----------------------------Next Content------------------------*/}
        
        <div className={jumbotronStyles.clients}>
            <div><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" alt="" /></div>
            <div><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" alt="" /></div>
            <div><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" alt="" /></div>
            <div><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" alt="" /></div>
        </div>
        

        {/* ----------------------------Next Content------------------------*/}
        <div className={jumbotronStyles.subscription}>
            <p>Subscribe to get information, latest news and other <br/> interesting offers about travel.</p>
            <div>
                <input type='email' placeholder='Your-email'></input>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Jumbotron