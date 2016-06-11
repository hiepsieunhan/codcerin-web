import React from 'react';
import Slider from 'react-slick';
import { sliderImages } from '../data/const';

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
                backgroundImage: `url("/img/${url}")`
              }
              return (
                <div className="home-page__slider__item" style={style} key={index}> </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
