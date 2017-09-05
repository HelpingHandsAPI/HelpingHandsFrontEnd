import React, {Component} from 'react';

export default class Admin extends Component{
  render(){
    return(
        <div>
            <form action="#" method="post">
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="button">Submit</button>
            </form>
        </div>
    )
  }
}
