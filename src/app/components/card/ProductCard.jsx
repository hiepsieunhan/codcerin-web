import React, { PropTypes } from 'react';
import { SolidButton } from '../button';
import { browserHistory } from 'react-router';

const ProductCard = ({product, route}) => {

  const handleCardClicked = () => {
    browserHistory.push(`/product/${route}`);
  }

  const style = {
    backgroundImage: `url("/img/product/${product.image}")`
  }
  return (
    <div className="codcerin-product-card">
      <div className="codcerin-product-card__product-photo" style={style} onClick={handleCardClicked}> </div>
      <div className="codcerin-product-card__product-name" onClick={handleCardClicked}> {product.name} </div>
      <div className="codcerin-product-card__product-description">
        {product.description}
      </div>
      <div className="codcerin-product-card__see-more-btn">
        <SolidButton text="Chi tiết" onClick={handleCardClicked}/>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  name: PropTypes.string.isRequired
}

export default ProductCard;
