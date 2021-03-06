import React from 'react';
import API_KEY from '../../config.js';
import OverviewContainer from '../containers/overview/OverviewContainer';
import OutfitsContainer from '../containers/outfits/OutfitsContainer';
import Questions from './questions';
import Reviews from './reviews';

var App = () => (
  <div id="overall-container">
    <OverviewContainer />
    <OutfitsContainer />
    <Reviews />
  </div>
);

export default App;
