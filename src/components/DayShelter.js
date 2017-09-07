import React, {Component} from 'react';

export default class DayShelter extends Component {


  render(){
    return(
      <div className="dayshelter">
        <div className="info">
          <h1>The Atlanta Day Shelter for Women and Children</h1>
          <h3>Services Provided</h3>
          <ul>
            <li>day care</li>
            <li>showers</li>
            <li>laundry</li>
            <li>lunch</li>
            <li>MARTA cards</li>
            <li>Medical Care</li>
            <li>life-skills classes</li>
            <li>recreational opportunities</li>
          </ul>
          <h3>What to do to for admission</h3>
          <ul>
            <li>Arrive between 8:15 and 10:30 AM Monday-Friday</li>
            <li>Be over the age of 18 unless accompanied by a mother or legal guardian. Male children must be 11 years of age or younger; females must be 17 or younger.</li>
            <li>Agree to abide by all guidelines, fully participate in all program activities, and refrain from any inappropriate activity</li>
            <li>Be fully detoxified with at least 72 hours since last use of drugs or 48 hours since last use of alcohol</li>
            <li>Be mentally and physically able to exercise proper personal hygiene and self-care, perform task assignments, and participate in all program functions within a non-medical, non-psychiatric facility</li>
            <li>Two-bag maximum of personal belongings for all facilities</li>
          </ul>
        </div>
        <div className="contact-container">
          <div className="contact">
            <p> Telephone: 404.588.4007 </p>
            <p> Address: 655 Ethel St NW, Atlanta, GA 30318 </p>
          </div>
          <div id="map"></div>
        </div>
      </div>
    )
  }
}
