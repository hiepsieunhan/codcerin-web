import React from 'react';
import TipCard from '../components/card/TipCard';
import { SolidButton } from '../components/button';

import { browserHistory } from 'react-router';
import { tipNames, tips } from '../data/tip';

export default class Tip extends React.Component {

  render () {

    const firstTip = tips[tipNames[0]];

    return (
      <div className="tip-page__container">
        <div className="tip-page__head__container">
          <div className="tip-page__head__detail">
            <div className="tip-page__head__tip-title">
              {firstTip.title.toUpperCase()}
            </div>
            <div className="tip-page__head__tip-description">
              {firstTip.description.toUpperCase()}
            </div>
            <div className="codcerin-see-more-btn codcerin-see-more-btn--large">
              <SolidButton text="Chi tiết" onClick={this.handleCardClicked.bind(this, tipNames[0])}/>
            </div>
          </div>
          <div className="tip-page__head__tip-image-wrapper">
            <div className="tip-page__head__tip-image" style={{backgroundImage: `url("/img/tip/${firstTip.image}")`}}></div>
          </div>
        </div>
        <TipList tipNames={tipNames.slice(1)}/>
      </div>
    );
  }

  handleCardClicked = (tipName) => {
    browserHistory.push(`/tips/${tipName}`);
  }
}


export const TipList  = ({tipNames}) => {
  return (
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
  );
};