import '../css/index.scss';

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Product from './containers/Product';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="product" component={Product}/>
      <Route path="tips" component={Home}/>
      <Route path="contact" component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'));
