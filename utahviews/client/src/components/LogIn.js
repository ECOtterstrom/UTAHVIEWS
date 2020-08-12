import React from "react";



function GetInfo() {


return (
    
    <div className="container signup">
    <form>
        <div className="form-group row">
      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
      <div className="col-sm-8 logIn">
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
        <button type="submit" className="btn btn-primary">Log In</button>
      </div>
    </div>
  </form>
  </div>

)
}

export default GetInfo;