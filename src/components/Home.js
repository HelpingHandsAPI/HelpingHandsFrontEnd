import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import Featured from './Featured';
import ResourceIcons from './ResourceIcons';

export default class Home extends Component{
  render(){
    return(
      <div className="home-container">
        <HomeHeader />
        <div className="home-main-container">
          <Featured />
          <ResourceIcons />
        </div>
      </div>
    )
  }
}
