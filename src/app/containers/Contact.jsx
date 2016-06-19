import React from 'react';
import ReactDom from 'react-dom';

export default class Contact extends React.Component {

  componentDidMount() {
    const mapCanvas = ReactDom.findDOMNode(this.refs.GoogleMap);
    const myLatLng = new google.maps.LatLng(20.98251, 105.84186);
    const mapOptions = {
      center: myLatLng,
      zoom: 16
    };
    const map = new google.maps.Map(mapCanvas, mapOptions);
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: '93 Linh lang'
    });
  }

  render () {
    return (
      <div className="contact-page__container">
        <div className="contact-page__address-wrapper">
          <div className="contact-page__header"> Địa chỉ </div>
          <div className="contact-page__address">
            <b> Công ty Cổ Phần Dược Phẩm Trường Thọ </b> <br/>
            <b> Địa chỉ: </b> <span className="contact-page__address--value"> 93 Linh lang - Ba Đình - Hà Nội </span> <br/>
            <b> Sản xuất tại: </b> <span className="contact-page__address--value"> Lô M1 đường M3 Khu công nghiệp Hòa, Xá Nam Định </span> <br/>
            <b> VP Marketing: </b> <span className="contact-page__address--value"> Số 18 ngõ 741 -  Giải phóng </span> <br/>
            <div className="contact-page__address__contact">
              <img className="contact-page__address__icon" src="/img/icon/phone.png"/> <span className="contact-page__address--value"> (04) 62 841277 </span> <br/>
              <img className="contact-page__address__icon" src="/img/icon/email.png"/> <span className="contact-page__address--value"> buidohiep@gmail.com </span> <br/>
            </div>
          </div>
        </div>
        <div className="contact-page__extra-info-container">
          <div className="contact-page__commercial-wrapper">
            <div className="contact-page__header"> Quảng cáo </div>
            <div className="contact-page__commercial">
              <object>
                <param name="movie"
                       value="//www.youtube.com/v/OtJDCa17Vzw?rel=0&amp;autoplay=1&amp;hl=pt_BR&amp;version=3"/>
                <param name="allowFullScreen" value="true"/>
                <param name="allowscriptaccess" value="always"/>
                <embed allowfullscreen="true" allowscriptaccess="always" height="220" width="390"
                       src="//www.youtube.com/v/OtJDCa17Vzw?rel=0&amp;autoplay=1&amp;hl=pt_BR&amp;version=3"
                       type="application/x-shockwave-flash"/>
              </object>
            </div>
          </div>
          <div className="contact-page__google-map-wrapper">
            <div className="contact-page__header"> Bản đồ </div>
            <div id="codcerin-google-map" ref="GoogleMap">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
