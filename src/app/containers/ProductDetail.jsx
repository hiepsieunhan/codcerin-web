import React from 'react';
import { products, productNames } from '../data/product';
import { SolidButton } from '../components/button';

export default class ProductDetail extends React.Component {

  render () {

    const product = products[this.props.params.productName];

    if (!product) {
      return (
        <div></div>
      );
    }

    const imageStyle = {
      backgroundImage: `url("/img/product/${product.image}")`
    }

    return (
      <div className="product-detail-page__container">
        <div className="product-detail-page__header__container">
          <div className="product-detail-page__header__product-image" style={imageStyle}></div>
          <div className="product-detail-page__header__product-detail">
            <div className="product-detail-page__header__product-detail__name">
              {product.name}
            </div>
            <div className="product-detail-page__header__product-detail__description">
              {product.detail.description}
            </div>
          </div>
        </div>
        <div className="product-detail-page__detail__container">
          <div className="product-detail-page__detail__product-labeling-button">
            <SolidButton text="Hướng dẫn sử dụng" theme="highlighted"/>
          </div>
          <div className="product-detail-page__detail__header"> Thông tin chi tiết  </div>
          <div className="product-detail-page__detail__sub-header"> Liều lượng </div>
          <div className="product-detail-page__detail__dosage-table">
            <div className="product-detail-page__detail__dosage-head">
              <div className="product-detail-page__detail__dosage-head__col product-detail-page__detail__dosage-table__col--border-right"> Tuổi </div>
              <div className="product-detail-page__detail__dosage-head__col"> Liều lượng </div>
            </div>
            {
              product.detail.dosage.map((row, index) => {
                return (
                  <div className="product-detail-page__detail__dosage-row">
                    <div className="product-detail-page__detail__dosage-row__col product-detail-page__detail__dosage-table__col--border-right"> {row.age} </div>
                    <div className="product-detail-page__detail__dosage-row__col"> {row.dose} </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
