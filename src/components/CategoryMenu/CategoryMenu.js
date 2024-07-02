import React, {useState} from 'react';
import '../CategoryMenu/Category.css'

const CategoryMenu = ({ setCategory }) => {

  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
      <div id='category' className='ms-lg-4 me-lg-4'>
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

      <ul id="nav" class="nav col-12 col-md-auto mb-2 g-5 justify-content-center mb-md-0">
        <li><a href="#" id='mynav2' className="nav-link" onClick={() => setCategory('discover')}>Discover</a></li>
        <li><a href="#" id='mynav2' className="nav-link" onClick={() => setCategory('animation')}>Animation</a></li>
        <li><a href="#" id='mynav2' className="nav-link" onClick={() => setCategory('branding')}>Branding</a></li>
        <li><a href="#" id='mynav2' className="nav-link" onClick={() => setCategory('illustration')}>Illustration</a></li>
        <li><a href="#" id='mynav2' className="nav-link" onClick={() => setCategory('mobile')}>Mobile</a></li>
        <li><a href="#" id='mynav2' className="nav-link" onClick={() => setCategory('print')}>Print</a></li>
        <li><a href="#" id='mynav2' className="nav-link" onClick={() => setCategory('product-design')}>Product Design</a></li>
        <li><a href="#" id='mynav2' className="nav-link" onClick={() => setCategory('typography')}>Typography</a></li>
        <li><a href="#" id='mynav2' className="nav-link" onClick={() => setCategory('web-design')}>Web Design</a></li>
      </ul>

      <div class="col-md-1 text-start">
        <button id='btn3' type="button" onClick={toggleFilters} class="btn">☰&nbsp;&nbsp;Filters</button>
      </div>

    </header>

    <div className={`filters-container ${showFilters ? 'show' : ''}`}>
    <div className="d-flex gap-4 mt-1 pb-4 justify-content-center">
      <div id='tags'>
        <h5 id='display'>Tags</h5>
    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
      <datalist id="datalistOptions">
        <option value="San Francisco"/>
        <option value="New York"/>
        <option value="Seattle"/>
        <option value="Los Angeles"/>
        <option value="Chicago"/>
      </datalist>
      </div>
      <div id='colors'>
        <h5 id='display'>Color</h5>
        <input type="color" class="form-control form-control-color w-100" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>
        </div>
      </div>
      </div>

  </div>
  );
};

export default CategoryMenu;
