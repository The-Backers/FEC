import React from 'react';
import API_KEY from '../../config.js';
import OverviewContainer from '../containers/overview/OverviewContainer';
import OutfitsContainer from '../containers/outfits/OutfitsContainer';
import ReviewsContainer from '../containers/reviews/ReviewsContainer';
import Questions from './questions';
import Reviews from './reviews';

var App = () => (
  <div id="overall-container">
    <OverviewContainer />
    <OutfitsContainer async/>
    <ReviewsContainer />
  </div>
);

export default App;
