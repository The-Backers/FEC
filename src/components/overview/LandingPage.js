import React from 'react';
import logInteraction from '../shared/logInteraction.js';


let LandingPage = ({currentView, changeView, changeProduct}) => {

  function LogLandingPage(productId) {
    logInteraction(`landing-page-product: ${productId}`, 'everyones')
    changeProduct(productId)
  }

  return (
    <div id='Landing-Page'>
    <button onClick={() => changeView(!currentView)} className='CTA-btn'>SHOP NOW</button>
    <div className='logo-landing'>B<h1 className="fas fa-angle-double-up"></h1>CKERS</div>
    <div className='landing-1'><div id='slogan'><h2><strong>Comfort Backed By Quality</strong></h2></div> <img  width={500} height={400} onClick={(()=> LogLandingPage(11005))}  src='../../../images/Nas.jpeg' alt='lady in front of painting'></img>
    </div>
    <div className='landing-3'> <img  width={500} height={400} onClick={(()=> LogLandingPage(11001))} src='../../../images/David.jpeg' alt='guy with hoodie on'></img>
    </div>
    <div className='landing-4'> <img  width={500} height={400} onClick={(()=> LogLandingPage(11003))}  src='../../../images/Anton.jpeg' alt='guy holding brown sneakers'></img>
    </div>

    </div>
  )
}

export default LandingPage;