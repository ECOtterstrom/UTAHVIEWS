import React, { useState, useEffect } from "react";
import { UserService } from "../utils/API";
import { userState } from '../utils/UserAtom';
import { useRecoilState } from 'recoil';
import { Redirect } from 'react-router-dom';


const GetInfo = () => {
  const [userObj, setUserObj] = useState({
    username: '',
    password: ''
  });
  const [user, setUser] = useRecoilState(userState);
  const [pathname, setPathname] = useState('')


  const handleChange = (event) => {
    setUserObj({
      ...userObj, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit')

    UserService.loginUser(userObj)
      .then(data => setUser(data))
      .then(() => setPathname('/'))
      .catch(err => console.log(err))
  }

  useEffect(() => console.log(user), [user])

  useEffect(() => console.log(userObj), [userObj])


  return pathname ? <Redirect to={pathname} /> : (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-3">
          <h1 className="centerSignUp">Log In</h1>
        </div>
      </div>
      <div className="container signup">
        <form>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-8 logIn">
              <input type="email" className="form-control loginForms" id="inputEmail3" placeholder="Email" name="username" value={userObj.username} onChange={handleChange}></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-8">
              <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={userObj.password} onChange={handleChange}></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Log In</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default GetInfo;