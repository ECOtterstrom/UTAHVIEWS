import React from "react";
import axios from "axios";
import { UserService } from "../utils/API";



class Signup extends React.Component {
	constructor() {
		super()
		this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
			password: ''

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.username)
		event.preventDefault()

    //request to server to add a new username/password
    UserService.createUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
		}).then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
        } else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

  render() {
    return(
      <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-3">
              <h1 className="centerSignUp">Sign Up</h1>
              </div>
        </div>
          <div className="container signup">
        <form>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8 logIn">
            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <input type="text"
              id="username"
              className="form-control"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}></input>
          </div>
        </div>
            <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
          <input type="password"
              id="password"
              className="form-control"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign up</button>
          </div>
        </div>
      </form>
      </div>
      </div>
      
    );
  }
}


export default Signup;