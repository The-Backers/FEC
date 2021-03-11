import React, {Fragment, useEffect}from 'react';
import OverviewContainer from '../containers/overview/OverviewContainer';
import OutfitsContainer from '../containers/outfits/OutfitsContainer';
import ReviewsContainer from '../containers/reviews/ReviewsContainer';
import SocialMediaIcons from './overview/SocialMediaIcons.js';
import MainPageContainer from '../containers/overview/MainPageContainer';

var App = ({viewMainPage}) => {


useEffect(() => {
  console.log(viewMainPage)
},[viewMainPage])

  return(
  <Fragment>
    {viewMainPage ? null : <SocialMediaIcons />}
    {viewMainPage ? <MainPageContainer /> :
    <div id="overall-container">
     <OverviewContainer />
     <OutfitsContainer async/>
     <ReviewsContainer />
    </div>}
 </Fragment>)
}

export default App;
