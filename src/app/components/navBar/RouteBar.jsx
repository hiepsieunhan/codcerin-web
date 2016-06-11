import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { routeMap } from '../../data/const';
import { getPaths } from '../../utils/url';
import classnames from 'classnames';

const RouteBar = ({location}) => {

  const handleRouteClicked = (route) => {
    browserHistory.push(route);
  }

  const paths = getPaths(location);
  if (paths.length <= 1) {
    return (
      <div></div>
    );
  }

  let currentRoute = '';

  return (
    <div className="codcerin-routebar__container">
      {paths.map((path, index) => {
        currentRoute += `/${path}`;
        return (
          <span key={index} onClick={handleRouteClicked.bind(null, `${currentRoute}`)}
            className={classnames('codcerin-routebar__route',
                                 {'codcerin-routebar__route--last': index == paths.length - 1 && index})}>
            {(routeMap[path] || path).toUpperCase()}
            {index < paths.length - 1 && <span className="codcerin-routebar__dividor"> / </span>}
          </span>
        );
      })}
    </div>
  );
}

RouteBar.propTypes = {
  location: PropTypes.string.isRequired
};

export default RouteBar;
