import React, {Component} from 'react';

export default class Resource extends Component{
    constructor(props) {
        super(props)

        this.state = {
            zip: '',
            city: '',
            state: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let data = {
            zip: this.state.zip,
            city: this.state.city,
            state: this.state.state,
        }

        switch(e.target.name) {
            case "zip":
                data.zip = e.target.value;
                break;
            case "city":
                data.city = e.target.value;
                break;
            case "state":
                data.state = e.target.value;
                break;
        }
        this.setState(data)
    }

    handleSubmit() {
        console.log('Fetch!');
        // fetch to API
    }

  render(){
    return(
      <div>
        {/* Zip */}
        <form action="." method="post">

            <input type="text" pattern="[0-9]{5}" name="zip" placeholder="Enter Zip Code" onChange={this.handleChange}/>
            <br />
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>

        <hr />

        {/* City/State */}
        <form action="#" method="post">
            <input type="text" name="city" placeholder="Enter City"onChange={this.handleChange} />
            <br />
            <input type="text" name="state" placeholder="Enter State" onChange={this.handleChange}/>
            <br />
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            <br />
        </form>
      </div>
    )
  }
}
