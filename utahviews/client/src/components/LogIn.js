import React from "react";
import axios from "axios";



class GetInfo extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
  event.preventDefault()
  console.log('handleSubmit')

  axios
      .post('/user/login', {
          username: this.state.username,
          password: this.state.password
      })
      .then(response => {
          console.log('login response: ')
          console.log(response)
          if (response.status === 200) {
              // update App.js state
              this.props.updateUser({
                  loggedIn: true,
                  username: response.data.username
              })
              // update the state to redirect to home
              this.setState({
                  redirectTo: '/'
              })
          }
      }).catch(error => {
          console.log('login error: ')
          console.log(error);
          
      })
}


render() {

return (
    
    <div className="container signup">
    <form>
        <div className="form-group row">
      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
      <div className="col-sm-8 logIn">
        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" name="username" value={this.state.username} onChange={this.handleChange}></input>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="password" className="col-sm-2 col-form-label"></label>
      <div className="col-sm-8">
        <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}></input>
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-10 offset-sm-2">
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Log In</button>
      </div>
    </div>
  </form>
  </div>

)
}
}

export default GetInfo;