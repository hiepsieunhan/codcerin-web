import React, { PropTypes } from 'react';
import { dict, menuTabs} from '../../data/const';
import { browserHistory } from 'react-router';
import { getPaths } from '../../utils/url';
import classnames from 'classnames';

export default  class NavBar extends React.Component {

  static propTypes = {
    location: PropTypes.string.isRequired
  };

  handleRouteClicked = (newPath) => {
    browserHistory.push(`/${newPath}`);
  }

  render () {

    let currentTab = getPaths(this.props.location)[0] || 'home';

    return (
      <div className="codcerin-navbar__wrapper">
        <div className="container codcerin-navbar__container">
          <div className="codcerin-navbar__logo" onClick={this.handleRouteClicked.bind(this, 'home')}>
            Codcerin
          </div>
          <div className="codcerin-navbar__tab-container">
            {menuTabs.map(tab => (
              <div className={classnames('codcerin-navbar__tab',
                                        {'codcerin-navbar__tab--active': tab == currentTab})}
                                        onClick={this.handleRouteClicked.bind(this, tab)}>
                {dict[tab].toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
