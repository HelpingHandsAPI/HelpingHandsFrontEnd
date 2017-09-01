import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import FoodIcon from '../images/Food_Bank_icon.png';
import ShelterIcon from '../images/shelter_icon.png';
import HealthIcon from '../images/health_care.png';
import TransportIcon from '../images/transport_icon.png';
import CareerIcon from '../images/career_icon.png';

export default class ResourceIcons extends Component {
  render(){
    let match = this.props.match;
    return(
      <div className="resource_icons">
          <div className="resource-card">
            <NavLink className="resource-link" to="/resource/food">
              <h2 className="resource_header">Food Resources</h2>
              <img className="resource_logo" src={FoodIcon} alt="Food Bank Icon" />
            </NavLink>
          </div>
          <div className="resource-card">
            <NavLink className="resource-link" to="/resource/shelter">
              <h2 className="resource_header">Shelter Resources</h2>
              <img className="resource_logo" src={ShelterIcon} alt="Shelter Icon" />
            </NavLink>
          </div>
          <div className="resource-card">
            <NavLink className="resource-link" to="/resource/Health">
              <h2 className="resource_header">Health Resources</h2>
              <img className="resource_logo" src={HealthIcon} alt="Health Icon" />
            </NavLink>
          </div>
          <div className="resource-card">
            <NavLink className="resource-link" to="/resource/Career">
              <h2 className="resource_header">Career Resources</h2>
              <img className="resource_logo" src={CareerIcon} alt="Career Icon" />
            </NavLink>
          </div>
          <div className="resource-card">
            <NavLink className="resource-link" to="/resource/Transport">
              <h2 className="resource_header">Transport Resources</h2>
              <img className="resource_logo" src={TransportIcon} alt="Transport Icon" />
            </NavLink>
          </div>
      </div>
    )
  }
}
