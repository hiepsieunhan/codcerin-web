import React from 'react';
import NavBar from '../components/navBar/NavBar';
import RouteBar from '../components/navBar/RouteBar';

export default class App extends React.Component {

  render () {

    const currentLocation = this.props.location.pathname;

    return (
      <div className="codcerin-container">
        <NavBar location={currentLocation} />
        <div className="container codcerin__content-container">
          <RouteBar location={currentLocation} />
          {this.props.children}
        </div>
        <div className="codcerin-footer__wrapper">
          <div className="codcerin-footer__container container">
            <div className="codcerin-footer__col">
              <div className="codcerin-footer__col__content">
                <b> Công ty Cổ Phần Dược Phẩm Trường Thọ </b> <br/>
                <b> Địa chỉ: </b> 93 Linh lang - Ba Đình - Hà Nội <br/>
                COPYRIGHT(c) 2014  CODCERIN.VN
              </div>
            </div>
            <div className="codcerin-footer__col">
              <div className="codcerin-footer__col__content">
                <b> Sản xuất tại: </b> Lô M1 đường M3 Khu công nghiệp Hòa, <br/> Xá Nam Định <br/>
                <b> VP Marketing: </b> Số 18 ngõ 741 -  Giải phóng
              </div>
            </div>
            <div className="codcerin-footer__col codcerin-footer__col--last">
              <div className="codcerin-footer__col__content codcerin-footer__col__content--center-content">
                Theo dõi facebook <br/>
                <a href="https://www.facebook.com/codcerin/" target="blank"> <img src="/img/icon/facebook.png" className="codcerin-footer__fb-icon"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


