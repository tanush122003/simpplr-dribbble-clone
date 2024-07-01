import React from 'react';
import '../CategoryMenu/Category.css'

const CategoryMenu = ({ setCategory }) => {
  return (
      <div id='category ms-lg-5 me-lg-5'>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between ms-lg-5 me-lg-5 py-4 head2">
      <div id='following' class="col-md-1 mb-2 mb-md-0">
      <div class="btn-group2">
        <button id='mybtn2' type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Following</button>
        <ul class="dropdown-menu dropend">
        <li><button class="dropdown-item" onClick={() => setCategory('following')}>Following</button></li>
        <li><button class="dropdown-item" onClick={() => setCategory('popular')}>Popular</button></li>
        <li><button class="dropdown-item" onClick={() => setCategory('new')}>New & Noteworthy</button></li>
      </ul>
      </div>
      </div>

      <ul id="nav" class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-4" onClick={() => setCategory('discover')}>Discover</a></li>
        <li><a href="#" className="nav-link px-4" onClick={() => setCategory('animation')}>Animation</a></li>
        <li><a href="#" className="nav-link px-4" onClick={() => setCategory('branding')}>Branding</a></li>
        <li><a href="#" className="nav-link px-4" onClick={() => setCategory('illustration')}>Illustration</a></li>
        <li><a href="#" className="nav-link px-4" onClick={() => setCategory('mobile')}>Mobile</a></li>
        <li><a href="#" className="nav-link px-4" onClick={() => setCategory('print')}>Print</a></li>
        <li><a href="#" className="nav-link px-4" onClick={() => setCategory('product-design')}>Product Design</a></li>
        <li><a href="#" className="nav-link px-4" onClick={() => setCategory('typography')}>Typography</a></li>
        <li><a href="#" className="nav-link px-4" onClick={() => setCategory('web-design')}>Web Design</a></li>
      </ul>

      <div class="col-md-1 text-start">
        <button id='btn3' type="button" class="btn">☰&nbsp;&nbsp;Filters</button>
      </div>
    </header>
  </div>
  );
};

export default CategoryMenu;
