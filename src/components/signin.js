import React, { Component } from 'react'
import axios from 'axios'

class Signin extends Component{
  constructor(props){
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault()
    localStorage.setItem('loggedIn', true)
    axios.get(`http://localhost:4000/users`)
      .then(response=>{
        this.props.getAllUsers(response.data)
      })
  }
  handleChange(event) {
    this.setState({usernameEntered: event.target.value});
  }
  render(){
    if(this.props.allUsers || localStorage.getItem('loggedIn')){
      return(<div></div>)  
    }
    else{    
      return(
        <div className="contentBody">
          <div className="contentAlign">
            <h3 className="signinHeader">Sign in</h3>
            <form onSubmit={this.handleSubmit}>
              <input className="form-control signInTextField" placeholder="Username"
                type="text" value={this.state.usernameEntered} onChange={this.handleChange}/>
              <div>
                <button className="btn btn-primary buttonFloatRight" type="submit">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default Signin