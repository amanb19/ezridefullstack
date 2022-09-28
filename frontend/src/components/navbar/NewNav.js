import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './newnav.css'

import { useNavigate } from 'react-router-dom';



const NewNav = () => {

    const navigate=useNavigate();
    const logout=()=>{

        sessionStorage.clear();
        navigate("/")
      
      }


  return (
    <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <NavDropdown title="Signup">
              <NavDropdown.Item href="/customer_signup">Customer</NavDropdown.Item>
              <NavDropdown.Item href="/driver_signup">Driver</NavDropdown.Item>
              {/* <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
               <li className='admin'><a href="/adminlogin">Admin</a></li>
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item> */}
            </NavDropdown><pre>                                                                                                                                       </pre>
            <Nav.Link href="/admin_login" className='admin'>Admin</Nav.Link>
           
            {sessionStorage.getItem('user-info')?
            <button type="button" class="btn btn-primary btn-sm" style={{width:'100px'}}  onClick={logout}>Logout</button>
            :null
            }

{sessionStorage.getItem('driver-info')?
            <button type="button" class="btn btn-primary btn-sm" style={{width:'100px'}}  onClick={logout}>Logout</button>
            :null
            }

             {sessionStorage.getItem('admin-info')?
            <button type="button" class="btn btn-primary btn-sm" style={{width:'100px'}}  onClick={logout}>Logout</button>
            :null
            }

           {/* <button type="button" class="btn btn-primary .btn-sm">Primary</button> */}
           
          </Nav>
        </Navbar.Collapse>

      </Navbar>
  )
}

export default NewNav