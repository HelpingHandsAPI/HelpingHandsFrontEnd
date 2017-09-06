import React, {Component} from 'react';
import logo from '../images/Two_hands_logo.png';
import {NavLink} from "react-router-dom";


export default class Footer extends Component {
  render(){
    return(
      <div className="footer">
        <img className="logo" src={logo} alt="Two Hands Logo" />
        <NavLink activeClassName="selected" className="navlink" to="/contact">Contact Us</NavLink>
        <NavLink activeClassName="selected" className="navlink" to="/admin/login">Admin</NavLink>
      </div>
    )
  }
}
