
import './NavRes.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavRes() {
  return (
    
    <header id="navigation" className="site-header header navbar navbar-expand-lg  fixed-top navbar-light bg-light shadow-sm">
        <div className="container px-3">
  
           <a  className="site-dark-logo navbar-brand pe-3"><img width={47} height={44} src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/logo.svg" className="site-dark-logo" alt="" decoding="async" loading="lazy" />Silicon</a><div id="navbarNav" className="offcanvas offcanvas-end"> 
          
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul id="menu-landings" className="navbar-nav me-auto mb-2 mb-lg-0"><li id="menu-item-4790" className="dropdown nav-item menu-item-4790"><a title="Landings" href="#" className="dropdown-toggle  nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="menu-item-dropdown-4790" data-bs-auto-close="false">Landings</a>
                 
                </li>
                <li id="menu-item-4825" className="dropdown nav-item menu-item-4825"><a title="Pages" href="#" className="dropdown-toggle  nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="menu-item-dropdown-4825" data-bs-auto-close="false">Pages</a>
                  
                </li>
                <li id="menu-item-8010" className="dropdown nav-item menu-item-8010"><a title="Portfolio" href="#" className="dropdown-toggle  nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="menu-item-dropdown-8010" data-bs-auto-close="false">Portfolio</a>
                  <ul className="dropdown-menu " aria-labelledby="menu-item-dropdown-8010" role="menu">
                    <li id="menu-item-8011" className="p-0 menu-item-8011"><a title="Grid View" href="https://silicon.madrasthemes.com/portfolio-grid/" className=" dropdown-item">Grid View</a></li>
                    <li id="menu-item-8012" className="p-0 menu-item-8012"><a title="List View" href="https://silicon.madrasthemes.com/portfolio-list/" className=" dropdown-item">List View</a></li>
                    <li id="menu-item-8013" className="p-0 menu-item-8013"><a title="Slider View" href="https://silicon.madrasthemes.com/portfolio-slider/" className=" dropdown-item">Slider View</a></li>
                    <li id="menu-item-8014" className="p-0 menu-item-8014"><a title="Single Project" href="https://silicon.madrasthemes.com/portfolio/single-project-3d-rendering-of-human-sculpture/" className=" dropdown-item">Single Project</a></li>
                  </ul>
                </li>
                <li id="menu-item-9872" className="nav-item menu-item-9872"><a title="Support" target="_blank" href="https://themeforest.net/user/madrasthemes" className=" nav-link">Support</a></li>
                <li id="menu-item-9873" className="nav-item menu-item-9873"><a title="Docs" target="_blank" href="https://docs.madrasthemes.com/silicon/" className=" nav-link">Docs</a></li>
              </ul>			</div>
            <div className="offcanvas-footer border-top">
              <a href="https://silicon.madrasthemes.com/contacts-v1/" className="sn-header-button btn btn-primary btn-sm rounded fs-sm w-100">
                <i className="bx  bx-cart fs-4 lh-1 me-1" />&nbsp;Buy now			</a>
            </div>      
          </div>
          <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4" data-bs-toggle="mode">
          <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Light</label>
            {/* <div><input type="checkbox" className="form-check-input" id="theme-mode" /></div> */}
            <div>
            <label class="switch">
            <input type="checkbox"/>     
            <span class="slider round"></span>
          </label>
          </div>
          <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Dark</label>
          </div>
          <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <a  className="sn-header-button btn btn-primary btn-sm rounded fs-sm d-none d-lg-inline-flex">
            <i className="bx  bx-cart fs-5 lh-1 me-1" /> <div id='buybtnres' ><i class="fa-solid fa-cart-shopping"></i>Buy now	</div> 		</a>
             {/* <button id='buybtn'><i class="fa-solid fa-cart-shopping"></i>    Buy Now</button> */}
        </div>
      </header>
  );
}

export default NavRes;

