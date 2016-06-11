import React from 'react';
import NavBar from '../components/navBar/NavBar';
import RouteBar from '../components/navBar/RouteBar';

export default class App extends React.Component {

  render () {

    const currentLocation = this.props.location.pathname;

    return (
      <div>
        <NavBar location={currentLocation} />
        <div className="container codcerin-container">
          <RouteBar location={currentLocation} />
          {this.props.children}
        </div>
      </div>
    );
  }
}
