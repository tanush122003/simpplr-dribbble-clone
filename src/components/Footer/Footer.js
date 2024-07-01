import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import "../Footer/Footer.css"


const Footer = ({ setFilter, setSearchQuery }) => {
  return (

    <footer class="d-flex flex-wrap align-items-center py-3">
    <div className='justify-content-between d-flex ms-lg-4'>
    <div id='foot' class="col-sm-1 d-flex">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      <img id='logo1' src={require("../images/logo.png")} alt="" />
    </a>
    </div>

    <ul id='navigate3' class="nav col-lg-5 justify-content-center py-4 pb-3 mb-3">
      <li class="nav-item"><a href="#" color='black' id='setme' class="nav-link">For Designers</a></li>
      <li class="nav-item"><a href="#" color='black' id='setme' class="nav-link">Hire Talent</a></li>
      <li class="nav-item"><a href="#" color='black' id='setme' class="nav-link">Inspiration</a></li>
      <li class="nav-item"><a href="#" color='black' id='setme' class="nav-link">Advertising</a></li>
      <li class="nav-item"><a href="#" color='black' id='setme' class="nav-link">Blog</a></li>
      <li class="nav-item"><a href="#" color='black' id='setme' class="nav-link">About</a></li>
      <li class="nav-item"><a href="#" color='black' id='setme' class="nav-link">Careers</a></li>
      <li class="nav-item"><a href="#" color='black' id='setme' class="nav-link">Support</a></li>
    </ul>

    <ul id='social' class="nav col-sm-2 py-4 list-unstyled d-flex">
      <li class="ms-3 py-2"><a class="text-body-secondary" href="#"><FaTwitter color='black' size={"1.4em"} /></a></li>
      <li class="ms-3 py-2"><a class="text-body-secondary" href="#"><RiFacebookBoxFill color='black' size={"1.4em"}/></a></li>
      <li class="ms-3 py-2"><a class="text-body-secondary" href="#"><IoLogoInstagram color='black' size={"1.4em"}/></a></li>
      <li class="ms-3 py-2"><a class="text-body-secondary" href="#"><FaPinterest color='black' size={"1.4em"}/></a></li>
    </ul>
    </div>

    <div id='lowfoot' class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
    <p class="col-md-4 mb-0 text-body-secondary">© 2024 Dribbble&nbsp;&nbsp;&nbsp;Terms&nbsp;&nbsp; Privacy&nbsp;&nbsp; Cookies</p>
    <ul class="nav col-md-5 justify-content-end">
      <li class="nav-item"><a href="#" id='setme2' class="nav-link px-2">Jobs</a></li>
      <li class="nav-item"><a href="#" id='setme2' class="nav-link px-2">Designers</a></li>
      <li class="nav-item"><a href="#" id='setme2' class="nav-link px-2">Freelancers</a></li>
      <li class="nav-item"><a href="#" id='setme2' class="nav-link px-2">Tags</a></li>
      <li class="nav-item"><a href="#" id='setme2' class="nav-link px-2">Places</a></li>
      <li class="nav-item"><a href="#" id='setme2' class="nav-link px-2">Resources</a></li>
    </ul>
  </footer>
</div>
  </footer>
  );
};

export default Footer;
