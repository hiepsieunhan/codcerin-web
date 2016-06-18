import React from 'react';
import TipCard from '../components/card/TipCard';

import { tipNames, tips } from '../data/tip';

export default class Tip extends React.Component {

  render () {
    
    return (
      <div>
        <div className="tip-page__head__container">
          
        </div>
        <div className="tip-page__content-wrapper">
          <div className="codcerin-header"> GET TIPS ON BEATING COUGHS & COLDS </div>
          <div className="tip-page__content-container">
            {tipNames.map((tipName, index) => (
              <div className="tip-page__card-container">
                <TipCard tip={tips[tipName]} route={tipName}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
