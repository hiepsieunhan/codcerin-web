import '../css/index.scss';

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/*" component={App}>
    </Route>
  </Router>
), document.getElementById('app'));
