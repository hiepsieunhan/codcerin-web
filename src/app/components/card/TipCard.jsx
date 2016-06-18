import React, { PropTypes } from 'react';
import { SolidButton } from '../button';
import { browserHistory } from 'react-router';

const ProductCard = ({tip, route}) => {

  const handleCardClicked = () => {
    browserHistory.push(`/tips/${route}`);
  }

  const style = {
    backgroundImage: `url("/img/tip/${tip.image}")`
  }
  return (
    <div className="codcerin-tip-card__container">
      <div className="codcerin-tip-card__tip-photo" style={style}> </div>
      <div className="codcerin-tip-card__tip-title" onClick={handleCardClicked}> {tip.title} </div>
      <div className="codcerin-tip-card__tip-description">
        {tip.description}
      </div>
      <div className="codcerin-see-more-btn">
        <SolidButton text="Chi tiết" onClick={handleCardClicked}/>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  tip: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  route: PropTypes.string.isRequired
}

export default ProductCard;
