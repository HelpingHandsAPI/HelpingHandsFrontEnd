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

          <NavLink className="resource-link" to="/resource/food">
            <div className="resource-card">
              <h2 className="resource_header">Food Resources</h2>
              <img className="resource_logo" src={FoodIcon} alt="Food Bank Icon" />
            </div>
          </NavLink>


          <NavLink className="resource-link" to="/resource/shelter">
            <div className="resource-card">
              <h2 className="resource_header">Shelter Resources</h2>
              <img className="resource_logo" src={ShelterIcon} alt="Shelter Icon" />
            </div>
          </NavLink>


          <NavLink className="resource-link" to="/resource/Health">
            <div className="resource-card">
              <h2 className="resource_header">Health Resources</h2>
              <img className="resource_logo" src={HealthIcon} alt="Health Icon" />
            </div>
          </NavLink>


          <NavLink className="resource-link" to="/resource/Career">
            <div className="resource-card">
              <h2 className="resource_header">Career Resources</h2>
              <img className="resource_logo" src={CareerIcon} alt="Career Icon" />
            </div>
          </NavLink>


          <NavLink className="resource-link" to="/resource/Transport">
            <div className="resource-card">
              <h2 className="resource_header">Transport Resources</h2>
              <img className="resource_logo" src={TransportIcon} alt="Transport Icon" />
              </div>
          </NavLink>
      </div>
    )
  }
}
