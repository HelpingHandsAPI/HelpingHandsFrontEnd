import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Resource from './components/Resource'


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="resource/:type" component={Resource} />
      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
