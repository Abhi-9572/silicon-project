import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import image from '../assests/siliconIcon.svg'

function NavRes() {
  return (
    <>
      {[, 'lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <div className='navresImg'>
            <img src={image}/>
            <h2>Silicon</h2>
            </div>


            <div id='navbarmodesm'>
                        <p>Light</p>
                        <div>
                            <label class="switch">
                            <input type="checkbox"/>     
                            <span class="slider round"></span>
                            </label>
                        </div>
                        <p>Dark</p>
                </div>

            {/* <Navbar.Brand href="#"><h2>Silicon</h2></Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                   <NavDropdown
                    title="Loadings"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Pages"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Portfolio"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>                
                  <Nav.Link href="#action1">Support</Nav.Link>
                  <Nav.Link href="#action2">Docs</Nav.Link>
                </Nav>
                
                <div id='navbarmodelg'>
                        <p>Light</p>
                        <div>
                            <label class="switch">
                            <input type="checkbox"/>     
                            <span class="slider round"></span>
                            </label>
                        </div>
                        <p>Dark</p>
                </div>
                <button id='buybtn'><i class="fa-solid fa-cart-shopping"></i>    Buy Now</button>
                 
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            
           
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavRes;