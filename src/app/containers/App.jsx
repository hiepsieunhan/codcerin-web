import React from 'react';
import NavBar from '../components/navBar/NavBar';
import RouteBar from '../components/navBar/RouteBar';

export default class App extends React.Component {

  render () {

    const currentLocation = this.props.location.pathname;

    return (
      <div className="codcerin-container">
        <NavBar location={currentLocation} />
        <div>
          <RouteBar location={currentLocation} />
          <p> this is content </p>
          {this.props.children}
        </div>
      </div>
    );
  }
}
