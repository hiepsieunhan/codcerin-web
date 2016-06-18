import React from 'react';
import { tips } from '../data/tip';
import Modal from '../components/modal/Modal';

export default class TipDetail extends React.Component {

  render () {

    const tip = tips[this.props.params.tipName];

    if (!tip) {
      return (
        <div></div>
      );
    }

    const imageStyle = {
      backgroundImage: `url("/img/tip/${tip.image}")`
    };

    return (
      <div className="tip-detail-page__container">
        <div className="tip-detail-page__title"> {tip.title} </div>
        <div className="tip-detail-page__image" style={imageStyle}> </div>
        <div className="tip-detail-page__content">
          <div dangerouslySetInnerHTML={{__html: tip.content}}></div>
        </div>
      </div>
    );
  }
}
