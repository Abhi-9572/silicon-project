
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
                  {/* <ul className="dropdown-menu p-0" aria-labelledby="menu-item-dropdown-4790" role="menu">
                    <li>		<div data-elementor-type="wp-post" data-elementor-id={4776} className="elementor elementor-4776">
                        <div className="elementor-section elementor-top-section elementor-element elementor-element-0fc61ea elementor-section-full_width overflow-hidden elementor-section-height-default elementor-section-height-default" data-id="0fc61ea" data-element_type="section">
                          <div className="elementor-container elementor-column-gap-default d-lg-flex px-0">
                            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1c3abb0" data-id="1c3abb0" data-element_type="column">
                              <div className="p-0 d-lg-flex flex-lg-nowrap flex-wrap elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-0bc12cd d-none d-lg-block overflow-hidden px-0 rounded-3 rounded-end-0 mega-dropdown-column ewc-h-100 elementor-widget elementor-widget-spacer" data-id="0bc12cd" data-element_type="widget" data-widget_type="spacer.default">
                                  <div className="elementor-widget-container">
                                    <style dangerouslySetInnerHTML={{__html: "/*! elementor - v3.7.8 - 02-10-2022 \n.elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-container{--container-widget-width:100%}.e-container>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-negative:0;flex-shrink:0}.e-container>.elementor-widget-spacer>.elementor-widget-container,.e-container>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-container>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}" }} />		<div className="elementor-spacer">
                                      <div className="elementor-spacer-inner" />
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-element elementor-element-4b1f775 mega-dropdown-column pt-lg-3 pb-lg-4 elementor-widget elementor-widget-si-nav-menu" data-id="4b1f775" data-element_type="widget" data-widget_type="si-nav-menu.default">
                                  <div className="elementor-widget-container">
                                    <ul id="menu-1-4b1f775" className=" list-unstyled mb-0"><li id="menu-item-4832" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-4832 "><a href="https://silicon.madrasthemes.com/" className=" dropdown-item">Template Intro Page</a></li>
                                      <li id="menu-item-4834" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4834 "><a href="https://silicon.madrasthemes.com/landing-mobile-app-showcase/" className=" dropdown-item">Mobile App Showcase</a></li>
                                      <li id="menu-item-10862" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10862 "><a href="https://silicon.madrasthemes.com/landing-mobile-app-showcase-v2/" className=" dropdown-item">Mobile App Showcase v.2</a></li>
                                      <li id="menu-item-11409" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11409 "><a href="https://silicon.madrasthemes.com/startup/" className=" dropdown-item">Startup <span className="badge bg-success ms-2">New</span></a></li>
                                      <li id="menu-item-4836" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4836 "><a href="https://silicon.madrasthemes.com/landing-saas-v1/" className=" dropdown-item">SaaS v.1</a></li>
                                      <li id="menu-item-4837" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4837 "><a href="https://silicon.madrasthemes.com/landing-saas-v2/" className=" dropdown-item">SaaS v.2</a></li>
                                      <li id="menu-item-10863" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10863 "><a href="https://silicon.madrasthemes.com/landing-saas-v3/" className=" dropdown-item">SaaS v.3</a></li>
                                      <li id="menu-item-4838" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4838 "><a href="https://silicon.madrasthemes.com/landing-financial/" className=" dropdown-item">Financial Consulting</a></li>
                                      <li id="menu-item-4840" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4840 "><a href="https://silicon.madrasthemes.com/landing-medical/" className=" dropdown-item">Medical</a></li>
                                    </ul>				</div>
                                </div>
                                <div className="elementor-element elementor-element-ec18379 mega-dropdown-column pt-lg-3 pb-lg-4 elementor-widget elementor-widget-si-nav-menu" data-id="ec18379" data-element_type="widget" data-widget_type="si-nav-menu.default">
                                  <div className="elementor-widget-container">
                                    <ul id="menu-1-ec18379" className=" list-unstyled mb-0"><li id="menu-item-10864" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10864  "><a href="https://silicon.madrasthemes.com/landing-software-company/" className=" dropdown-item">IT (Software) Company</a></li>
                                      <li id="menu-item-4850" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4850  "><a href="https://silicon.madrasthemes.com/landing-conference/" className=" dropdown-item">Conference</a></li>
                                      <li id="menu-item-4851" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4851  "><a href="https://silicon.madrasthemes.com/landing-digital-agency/" className=" dropdown-item">Digital Agency</a></li>
                                      <li id="menu-item-4853" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4853  "><a href="https://silicon.madrasthemes.com/landing-blog/" className=" dropdown-item">Blog Homepage</a></li>
                                    </ul>				</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul> */}
                </li>
                <li id="menu-item-4825" className="dropdown nav-item menu-item-4825"><a title="Pages" href="#" className="dropdown-toggle  nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="menu-item-dropdown-4825" data-bs-auto-close="false">Pages</a>
                  {/* <ul className="dropdown-menu dropdown-menu-lg" aria-labelledby="menu-item-dropdown-4825" role="menu">
                    <li>		<div data-elementor-type="wp-post" data-elementor-id={4804} className="elementor elementor-4804">
                        <div className="elementor-section elementor-top-section elementor-element elementor-element-4f98878 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="4f98878" data-element_type="section">
                          <div className="elementor-container elementor-column-gap-default pt-lg-3 px-0 row flex-lg-nowrap">
                            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-207c7a1 col-12 mega-dropdown-column col-lg-4 col" data-id="207c7a1" data-element_type="column">
                              <div className="p-0 elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-527f199 elementor-widget elementor-widget-highlighted-heading" data-id="527f199" data-element_type="widget" data-widget_type="highlighted-heading.default">
                                  <div className="elementor-widget-container">
                                    <h6 className="silicon-elementor-highlighted-heading__title px-3 mb-2"><span className="si-multipurpose-text__before">About</span></h6>		</div>
                                </div>
                                <div className="elementor-element elementor-element-dc3f4c3 elementor-widget elementor-widget-si-nav-menu" data-id="dc3f4c3" data-element_type="widget" data-widget_type="si-nav-menu.default">
                                  <div className="elementor-widget-container">
                                    <ul id="menu-1-dc3f4c3" className=" list-unstyled mb-3"><li id="menu-item-4864" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4864   "><a href="https://silicon.madrasthemes.com/about-v1/" className=" dropdown-item py-1">About v.1</a></li>
                                      <li id="menu-item-4865" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4865   "><a href="https://silicon.madrasthemes.com/about-v2/" className=" dropdown-item py-1">About v.2</a></li>
                                    </ul>				</div>
                                </div>
                                <div className="elementor-element elementor-element-a14f53f elementor-widget elementor-widget-highlighted-heading" data-id="a14f53f" data-element_type="widget" data-widget_type="highlighted-heading.default">
                                  <div className="elementor-widget-container">
                                    <h6 className="silicon-elementor-highlighted-heading__title px-3 mb-2"><span className="si-multipurpose-text__before">Services</span></h6>		</div>
                                </div>
                                <div className="elementor-element elementor-element-4b5d27f elementor-widget elementor-widget-si-nav-menu" data-id="4b5d27f" data-element_type="widget" data-widget_type="si-nav-menu.default">
                                  <div className="elementor-widget-container">
                                    <ul id="menu-1-4b5d27f" className=" list-unstyled mb-3"><li id="menu-item-4879" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4879    "><a href="https://silicon.madrasthemes.com/services/" className=" dropdown-item py-1">Services v.1</a></li>
                                      <li id="menu-item-11213" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11213    "><a href="https://silicon.madrasthemes.com/service-v2/" className=" dropdown-item py-1">Services v.2</a></li>
                                      <li id="menu-item-4880" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4880    "><a href="https://silicon.madrasthemes.com/services-single/" className=" dropdown-item py-1">Service Details v.1</a></li>
                                      <li id="menu-item-11214" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11214    "><a href="https://silicon.madrasthemes.com/service-details-v2/" className=" dropdown-item py-1">Service Details v.2</a></li>
                                    </ul>				</div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d558443 col-12 mega-dropdown-column col-lg-4 col" data-id="d558443" data-element_type="column">
                              <div className="p-0 elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-571b138 elementor-widget elementor-widget-highlighted-heading" data-id="571b138" data-element_type="widget" data-widget_type="highlighted-heading.default">
                                  <div className="elementor-widget-container">
                                    <h6 className="silicon-elementor-highlighted-heading__title px-3 mb-2"><span className="si-multipurpose-text__before">Blog</span></h6>		</div>
                                </div>
                                <div className="elementor-element elementor-element-72c6682 elementor-widget elementor-widget-si-nav-menu" data-id="72c6682" data-element_type="widget" data-widget_type="si-nav-menu.default">
                                  <div className="elementor-widget-container">
                                    <ul id="menu-1-72c6682" className=" list-unstyled mb-3"><li id="menu-item-4872" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4872     "><a href="https://silicon.madrasthemes.com/blog-list-with-sidebar/" className=" dropdown-item py-1">List View with Sidebar</a></li>
                                      <li id="menu-item-4873" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4873     "><a href="https://silicon.madrasthemes.com/blog-grid-with-sidebar/" className=" dropdown-item py-1">Grid View with Sidebar</a></li>
                                      <li id="menu-item-4874" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4874     "><a href="https://silicon.madrasthemes.com/blog-list-no-sidebar/" className=" dropdown-item py-1">List View no Sidebar</a></li>
                                      <li id="menu-item-4875" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4875     "><a href="https://silicon.madrasthemes.com/blog-grid-no-sidebar/" className=" dropdown-item py-1">Grid View no Sidebar</a></li>
                                      <li id="menu-item-4876" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4876     "><a href="https://silicon.madrasthemes.com/blog-simple-feed/" className=" dropdown-item py-1">Simple Feed</a></li>
                                      <li id="menu-item-4877" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4877     "><a href="https://silicon.madrasthemes.com/blog-single/" className=" dropdown-item py-1">Single Post</a></li>
                                      <li id="menu-item-4878" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4878     "><a href="https://silicon.madrasthemes.com/how-to-choose-a-fantastic-seo-agency/" className=" dropdown-item py-1">Podcast</a></li>
                                    </ul>				</div>
                                </div>
                              </div>
                            </div>
                            <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ca0b860 col-12 mega-dropdown-column col-lg-4 col" data-id="ca0b860" data-element_type="column">
                              <div className="p-0 elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-5e308db elementor-widget elementor-widget-highlighted-heading" data-id="5e308db" data-element_type="widget" data-widget_type="highlighted-heading.default">
                                  <div className="elementor-widget-container">
                                    <h6 className="silicon-elementor-highlighted-heading__title px-3 mb-2"><span className="si-multipurpose-text__before">Pricing</span></h6>		</div>
                                </div>
                                <div className="elementor-element elementor-element-9cab516 elementor-widget elementor-widget-si-nav-menu" data-id="9cab516" data-element_type="widget" data-widget_type="si-nav-menu.default">
                                  <div className="elementor-widget-container">
                                    <ul id="menu-1-9cab516" className=" list-unstyled mb-3"><li id="menu-item-11210" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11210      "><a href="https://silicon.madrasthemes.com/pricing/" className=" dropdown-item py-1">Pricing Page</a></li>
                                    </ul>				</div>
                                </div>
                                <div className="elementor-element elementor-element-fa88b0c elementor-widget elementor-widget-highlighted-heading" data-id="fa88b0c" data-element_type="widget" data-widget_type="highlighted-heading.default">
                                  <div className="elementor-widget-container">
                                    <h6 className="silicon-elementor-highlighted-heading__title px-3 mb-2"><span className="si-multipurpose-text__before">Contacts</span></h6>		</div>
                                </div>
                                <div className="elementor-element elementor-element-12b712e elementor-widget elementor-widget-si-nav-menu" data-id="12b712e" data-element_type="widget" data-widget_type="si-nav-menu.default">
                                  <div className="elementor-widget-container">
                                    <ul id="menu-1-12b712e" className=" list-unstyled mb-3"><li id="menu-item-4881" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4881       "><a href="https://silicon.madrasthemes.com/contacts-v1/" className=" dropdown-item py-1">Contacts v.1</a></li>
                                      <li id="menu-item-4882" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4882       "><a href="https://silicon.madrasthemes.com/contacts-v2/" className=" dropdown-item py-1">Contacts v.2</a></li>
                                      <li id="menu-item-11212" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11212       "><a href="https://silicon.madrasthemes.com/contacts-v3/" className=" dropdown-item py-1">Contacts v.3</a></li>
                                    </ul>				</div>
                                </div>
                                <div className="elementor-element elementor-element-f4f7209 elementor-widget elementor-widget-highlighted-heading" data-id="f4f7209" data-element_type="widget" data-widget_type="highlighted-heading.default">
                                  <div className="elementor-widget-container">
                                    <h6 className="silicon-elementor-highlighted-heading__title px-3 mb-2"><span className="si-multipurpose-text__before">Specialty</span></h6>		</div>
                                </div>
                                <div className="elementor-element elementor-element-0f67bd6 elementor-widget elementor-widget-si-nav-menu" data-id="0f67bd6" data-element_type="widget" data-widget_type="si-nav-menu.default">
                                  <div className="elementor-widget-container">
                                    <ul id="menu-1-0f67bd6" className=" list-unstyled mb-3"><li id="menu-item-4883" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4883        "><a href="https://silicon.madrasthemes.com/404-v1" className=" dropdown-item py-1">404 Error v.1</a></li>
                                      <li id="menu-item-4884" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4884        "><a href="https://silicon.madrasthemes.com/404-v2/" className=" dropdown-item py-1">404 Error v.2</a></li>
                                    </ul>				</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul> */}
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

