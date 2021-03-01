import React from 'react';
import API_KEY from '../../config.js';
import OverviewContainer from '../containers/overview/OVerviewContainer';
import Outfits from './outfits';
import Questions from './questions';
import Reviews from './reviews';




var App = () => (
      <div id="overall-container" >
        <OverviewContainer />
        <Outfits />
        <Questions />
        <Reviews />
      </div>


    );

export default App;
