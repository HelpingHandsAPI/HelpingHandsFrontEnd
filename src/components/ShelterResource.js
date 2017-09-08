import React, {Component} from 'react';

export default class ShelterResource extends Component{
  render(){
    return(
      <div className="shelter-container">
        <div className="shelter-card">
          <h2>The Atlanta Day Shelter for Women and Children</h2>
          <p>Provides daytime services for homeless mothers and their kids, giving them the tools needed to break free from homelessness.</p>
        </div>
        <div className="shelter-card">
          <h2>The Shepherd's Inn</h2>
          <p>Every day, we serve up to 450 men with the goal of shepherding them, one at a time, into a new life of independent living. The Shepherd’s Inn provides hot meals, a comfortable place to sleep, and genuine interaction with our caring staff. Staff members listen to each man’s story and help craft a customized plan for moving forward.</p>
        </div>
        <div className="shelter-card">
          <h2>Our House</h2>
          <p>At Our House, we are game changers. We offer children and families experiencing homelessness the tools, support, and education they need to thrive. By tackling homelessness at its source, we help the generation experiencing homelessness today, and break the cycle for those most likely to experience it tomorrow.</p>
        </div>
      </div>
    )
  }
}
