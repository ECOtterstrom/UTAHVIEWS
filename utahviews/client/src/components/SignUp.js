import React from "react";


function SignUp(props) {
    return(
        <form>
            <div className="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10 offset-sm-2">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
      
    );
}


export default SignUp;