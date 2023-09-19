import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/gatoLocal2.png';
import './NavBar.css';

function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pink">
    

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to="/orders/new" className="navbar-brand">
          <img src={logo} alt='logo' className='logo' style={{ width: '140px', height: 'auto' }} /> 
        </Link>
        

<div className='navbar-home'>
<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active" >
          <Link className="nav-item" to="/orders/new">
            Home <span className="sr-only"></span>
          </Link>
        </li>
        </ul>
        </div>
        
        <div className='navbar-cat'>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/orders">Cat</Link>&nbsp;&nbsp;
        </li>
      </ul>
</div>



        <div>
        <div className="d-flex">
          &nbsp;&nbsp;<span> {user ? user.name : ''}</span>
          &nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
          </div>



        </div>
      </div>
    </nav>
  );
}

export default NavBar;