import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class ResourceIcons extends Component {
  render(){
    return(
        <div>
            <NavLink activeClassName="selected" className="navlink" to={`/resource/food`}>
                Food
                {/*<img src= />*/}
            </NavLink>

            {/*<NavLink activeClassName="selected" className="navlink" to={`/resource/food`}>

            </NavLink>

            <NavLink activeClassName="selected" className="navlink" to={`/resource/food`}>

            </NavLink>

            <NavLink activeClassName="selected" className="navlink" to={`/resource/food`}>

            </NavLink> */}
        </div>
    )
  }
}
