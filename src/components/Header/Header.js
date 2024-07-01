import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.css';

const Header = ({ setFilter, setSearchQuery }) => {
  return (

    <header id='myhead' className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
      
      <ul id='navigate' className="nav col-md-4 ms-lg-3 mb-2 mb-md-0 ">
      <div class="btn-group">
        <button type="button" class="btn dropdown-toggle mybtn" data-bs-toggle="dropdown" aria-expanded="false">Find Designers</button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><button class="dropdown-item" type="button">Inspiration</button></li>
          <li><button class="dropdown-item" type="button">Another action</button></li>
          <li><button class="dropdown-item" type="button">Something else here</button></li>
        </ul>
      </div>
        <li><a href="#" className="nav-link px-2 mybtn">Inspiration</a></li>
        <div class="btn-group">
        <button type="button" class="btn dropdown-toggle mybtn" data-bs-toggle="dropdown" aria-expanded="false">Courses</button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><button class="dropdown-item" type="button">Inspiration</button></li>
          <li><button class="dropdown-item" type="button">Another action</button></li>
          <li><button class="dropdown-item" type="button">Something else here</button></li>
        </ul>
      </div>
        <li><a href="#" className="nav-link px-2 mybtn">Jobs</a></li>
        <li><a href="#" className="nav-link px-2 mybtn">Go Pro</a></li>
      </ul>
      
      <div className="nav col-12 col-md-auto ms-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <div className="d-flex align-items-center justify-content-center">
          <a href="/" className="d-flex align-items-center col-md-auto mb-2 mb-md-0 link-body-emphasis text-decoration-none">
            <img className='logo' src={require("../images/logo.png")} alt="" />
          </a>
        </div>
      </div>

      <div id='search'>
      <form class="col-md-4 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
      </form>
      </div>

      <div id='options' className="col-sm-2 me-lg-5 align-items-center text-end">
        <button id='login' type="button" className="btn btn-outline-primary me-2">Log in</button>
        <button id='signup' type="button" className="btn btn-primary">Sign up</button>
      </div>
    </header>
    
    
  );
};

export default Header;
