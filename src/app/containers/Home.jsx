import React from 'react';
import Slider from 'react-slick';
import { TipList } from './Tip';

import { sliderImages } from '../data/const';
import { tipNames } from '../data/tip';

export default class App extends React.Component {

  render () {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div className="home-page__container">
        <div className="home-page__slider">
          <Slider {...settings}>
            {sliderImages.map((url, index) => {
              const style = {
                backgroundImage: `url("/img/slider/${url}")`
              }
              return (
                <div className="home-page__slider__item" style={style} key={index}> </div>
              );
            })}

          </Slider>
        </div>
        <div className="home-page__tips-wrapper">
          <TipList tipNames={tipNames.slice(0, 6)}/>
        </div>
      </div>
    );
  }
}
