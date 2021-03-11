import React from 'react';

let LandingPage = ({currentView, changeView}) => {

  return (
    <div id='Landing-Page'>
    <button onClick={() => changeView(!currentView)} className='CTA-btn'>SHOP NOW</button>
    <div className='logo-landing'>B<h1 className="fas fa-angle-double-up"></h1>CKERS</div>
    <div className='landing-1'><div className='slogan'><h2><strong>Comfort Backed By Quality</strong></h2></div> <img src="https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"></img>
    </div>
    <div className='landing-3'> <img src="https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"></img>
    </div>
    <div className='landing-4'> <img src="https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
    </div>

    </div>
  )
}

export default LandingPage;