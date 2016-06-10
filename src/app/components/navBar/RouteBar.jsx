import React, { PropTypes } from 'react';
import { routeMap } from '../../data/const';

const RouteBar = ({location}) => {
  return (
    <div>
      RouteBar: {location}
    </div>
  );
}

RouteBar.propTypes = {
  location: PropTypes.string.isRequired
};

export default RouteBar;
