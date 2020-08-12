import React from "react";


function SignUp(props) {
    return(
          <div className="container signup">
        <form>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8 logIn">
            <input type="firstName" className="form-control" id="firstName" placeholder="First Name"></input>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <input type="lastName" className="form-control" id="lastName" placeholder="Last Name"></input>
          </div>
        </div>
            <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"></input>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <input type="password" className="form-control" id="password" placeholder="Password"></input>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </form>
      </div>
      
    );
}


export default SignUp;