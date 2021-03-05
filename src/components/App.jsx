import React from 'react';
import API_KEY from '../../config.js';
import OverviewContainer from '../containers/overview/OVerviewContainer';
import Outfits from './outfits';
import Reviews from './reviews';

//lin
import QuestionsContainer from '../containers/questions/QuestionsContainer'
// import Questions from './questions';

var App = () => (
      <div id="overall-container">
        <OverviewContainer />
        <Outfits />
        <QuestionsContainer />
        {/* <Questions /> */}
        <Reviews />
      </div>
    );

export default App;
