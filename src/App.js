import './App.css';
import React, { useState } from 'react'

function App(){
  
  const [page, setPage] = useState(<Signin></Signin>);
  const [isActive, setActive] = useState(true);

  return (
    <div className="App">
      <div className="toggle-links">
        <button id='signin' className={isActive ? "active": null} onClick={() => {
          setActive(true);
          setPage(<Signin></Signin>);
        }}>SIGN IN</button>
        <button id='signup' className={!isActive ? "active": null} onClick={() => {
          setActive(false);
          setPage(<Signup></Signup>)
        }}>SIGN UP</button>
      </div>
      {page}
    </div>
  );
}
const Signin = () => {
  return (
    <div>
        <form className="form">
            <div className="username-wrap">
                <i className="uil uil-user"></i>
                <input type="text" id="username" required placeholder="Username"/>
            </div>
            <div className="password-wrap">
                <i className="uil uil-padlock"></i>
                <input type="password" id="password" required placeholder="Password"/>
            </div>
            <button type="submit" className='submit'>Sign in</button>
            <a href="#" className="link">Forgot your password?</a>
        </form>
    </div>
  )
}
const Signup = () => {
  return (
    <div>
        <form className="form">
            <div className="username-wrap">
                <i className="uil uil-user"></i>
                <input type="text" id="username" required placeholder="Username"/>
            </div>
            <div className="password-wrap">
                <i className="uil uil-padlock"></i>
                <input type="password" id="password" required placeholder="Password"/>
            </div>
            <div className="password-wrap2">
                <i className="uil uil-padlock"></i>
                <input type="password" id="password2" required placeholder="Confirm Password"/>
            </div>
            <button type="submit" className='submit'>Sign up</button>
        </form>
    </div>
  )
}
export default App;
