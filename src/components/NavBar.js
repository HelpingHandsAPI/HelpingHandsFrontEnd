import React, {Component} from 'react';
import logo from '../images/Two_hands_logo.png';
import {NavLink} from "react-router-dom";


export default class NavBar extends Component{
  render(){
    return(
      <nav className="nav">
        <img className="logo" src={logo} alt="Two Hands Logo" />
        <NavLink activeClassName="selected" className="navlink" to="/">Home</NavLink>
        {this.props.children}
      </nav>
    )
  }
}
