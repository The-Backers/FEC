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
    <div className='landing-1'><div id='slogan'><h2><strong>Comfort Backed By Quality</strong></h2></div> <img  width={500} height={600} onClick={(()=> LogLandingPage(11005))}  src="https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80" alt='red shoes'></img>
    </div>
    <div className='landing-3'> <img  width={500} height={600} onClick={(()=> LogLandingPage(11001))} src="https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80" alt='guy on bicycle with camo backpack'></img>
    </div>
    <div className='landing-4'> <img  width={500} height={600} onClick={(()=> LogLandingPage(11003))} src="https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt='guy sitting on yellow rails'></img>
    </div>

    </div>
  )
}

export default LandingPage;