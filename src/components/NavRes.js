
import './NavRes.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Portfolio from './DropDowns/Portfolio';
import { useState } from 'react';
import Pages from './DropDowns/Pages';
import Landings from './DropDowns/Landings';
import { scopedCssBaselineClasses } from '@mui/material';

function NavRes() {

  const [isHoveringland, setIsHoveringland] = useState(false);

  const handleMouseOverland = () => {
    setIsHoveringland(true);
  };

  const handleMouseOutland= () => {
    setIsHoveringland(false);
  };
  const [isHoveringport, setIsHoveringport] = useState(false);

  const handleMouseOverport = () => {
    setIsHoveringport(true);
  };

  const handleMouseOutport = () => {
    setIsHoveringport(false);
  };

  const [isHoveringpage, setIsHoveringpage] = useState(false);

  const handleMouseOverpage = () => {
    setIsHoveringpage(true);
  };

  const handleMouseOutpage = () => {
    setIsHoveringpage(false);
  };



  return (
    
    <header id="navigation" className="site-header header navbar navbar-expand-lg  fixed-top navbar-light bg-light shadow-sm">
        <div className="container px-3">
  
           <a  className="site-dark-logo navbar-brand pe-3"><img width={47} height={44} src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/logo.svg" className="site-dark-logo" alt="" decoding="async" loading="lazy" />Silicon</a><div id="navbarNav" className="offcanvas offcanvas-end"> 
          
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul  id="menu-landings" className="navbar-nav me-auto mb-2 mb-lg-0">
                <li onMouseOver={handleMouseOverland} onMouseOut={handleMouseOutland} id="menu-item-4790" className="dropdown nav-item menu-item-4790"><a title="Landings" href="#" className="dropdown-toggle  nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="menu-item-dropdown-4790" data-bs-auto-close="false" style={{color:"black",fontSize:"18px",fontWeight:"500",opacity:"0.6"}}>Landings</a>
              {isHoveringland && (
          <div className='landingDropdown'><Landings/></div>
        )}
                </li>
                <li onMouseOver={handleMouseOverpage} onMouseOut={handleMouseOutpage} id="menu-item-4825" className="dropdown nav-item menu-item-4825"><a title="Pages" href="#" className="dropdown-toggle  nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="menu-item-dropdown-4825" data-bs-auto-close="false" style={{color:"black",fontSize:"18px",fontWeight:"500",opacity:"0.6"}}>Pages</a>
                {isHoveringpage && (
          <div className='pageDropdown'><Pages/></div>
        )}
                </li>
                <li onMouseOver={handleMouseOverport} onMouseOut={handleMouseOutport} id="menu-item-8010" className="dropdown nav-item menu-item-8010"><a title="Portfolio" href="#" className="dropdown-toggle  nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="menu-item-dropdown-8010" data-bs-auto-close="false" style={{color:"black",fontSize:"18px",fontWeight:"500",opacity:"0.6"}}>Portfolio</a>
                  {/* <div className='portfolioDreopdown'><Portfolio/></div> */}
                  {isHoveringport && (
          <div className='portfolioDreopdown'><Portfolio/></div>
        )}
                </li>
                <li id="menu-item-9872" className="nav-item menu-item-9872"><a title="Support" target="_blank" href="https://themeforest.net/user/madrasthemes" className=" nav-link" style={{color:"black",fontSize:"18px",fontWeight:"500",opacity:"0.6"}}>Support</a></li>
                <li id="menu-item-9873" className="nav-item menu-item-9873"><a title="Docs" target="_blank" href="https://docs.madrasthemes.com/silicon/" className=" nav-link" style={{color:"black",fontSize:"18px",fontWeight:"500",opacity:"0.6"}}>Docs</a></li>
              </ul>			</div>
            <div >
              <a  className="sn-header-button btn btn-primary btn-sm rounded fs-sm w-100">
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
            
        </div>
      </header>
  );
}

export default NavRes;

