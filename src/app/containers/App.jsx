import React from 'react';
import NavBar from '../components/navBar/NavBar';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar/>
        <div>
          <p> this is content </p>
          {this.props.children}
        </div>
      </div>
    );
  }
}
