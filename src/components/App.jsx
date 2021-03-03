import React from 'react';
import API_KEY from '../../config.js';
import OverviewContainer from '../containers/overview/OverviewContainer';
import Products from './products';
import Questions from './questions';
import Reviews from './reviews';

var App = () => (
      <div id="overall-container">
        <OverviewContainer />
        <Products />
        <Questions />
        <Reviews />
      </div>


    );

export default App;
