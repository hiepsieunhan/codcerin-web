import React from 'react';
import { products, productNames } from '../data/product';
import { SolidButton } from '../components/button';
import Modal from '../components/modal/Modal';

export default class ProductDetail extends React.Component {

  state = {
    showLabeling: false
  };

  render () {

    const product = products[this.props.params.productName];

    if (!product) {
      return (
        <div></div>
      );
    }

    const imageStyle = {
      backgroundImage: `url("/img/product/${product.image}")`
    };

    return (
      <div className="product-detail-page__container">
        {
          this.state.showLabeling &&
          <Modal
            content={
              <div className="product-detail-page__product-labeling">
                <div dangerouslySetInnerHTML={{__html: product.detail.labeling}}></div>
              </div>}
            onClose={this.handleOpenLabeling.bind(this, false)}/>
        }
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
            <SolidButton text="Hướng dẫn sử dụng" theme="normal"  onClick={this.handleOpenLabeling.bind(this, true)}/>
          </div>
          <div className="product-detail-page__detail__header"> Thông tin sản phẩm  </div>
          <div className="codcerin-header"> Liều lượng </div>
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

  handleOpenLabeling = (shouldShow) => {
    console.log('click!! ', shouldShow);
    if (this.state.showLabeling != shouldShow) {
      this.setState({
        showLabeling: shouldShow
      });
    }
  }

}
