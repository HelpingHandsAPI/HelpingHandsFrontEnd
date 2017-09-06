import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Resource from './components/Resource'
import AdminLogin from './components/AdminLogin'
import Contact from './components/Contact'


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="resource/:type" component={Resource} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </App>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
