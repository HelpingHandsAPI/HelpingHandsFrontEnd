import React, {Component} from 'react';

export default class AdminLogin extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event){
    this.setState({username: event.target.value});
  }

  handlePassword(event){
    this.setState({password: event.target.value});
  }

  handleFocus(event){
    event.preventDefault()
    event.target.classList.toggle("focus");
    event.target.classList.toggle("admin-submit");
  }

  handleSubmit(event){
    console.log("submitted", this.state.username);
    // fetch("https://helpinghands.com/login", {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }, body: JSON.stringify({
    //     username: "{this.state.username}",
    //     password: "{this.state.password}"
    //   })
    // })
  }


  render(){
    return(
      <div className="admin-form-container">
        <label htmlFor="username">Username</label>
        <input type="text" className="admin-input username" onFocus={this.handleFocus} onBlur={this.handleFocus} onChange={this.handleUsername} />
        <label htmlFor="password">Password</label>
        <input type="password" className="admin-input password" onFocus={this.handleFocus} onBlur={this.handleFocus} onChange={this.handlePassword} />
        <input type="submit" className="admin-submit" onClick={this.handleSubmit} />
      </div>
    )
  }
}
