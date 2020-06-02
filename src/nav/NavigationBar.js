import React from "react";
import {Link, } from "react-router-dom"
//react-bootstrap imported
import {
    Navbar, Nav, NavDropdown, Form, FormControl, Button,
    
} from 'react-bootstrap';


function NavigationBar() {
    return (
        <main>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><del>Corona</del></Navbar.Brand>
                <Navbar.Toggle aria-controls="0-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link ><Link to="/province" className="text-muted">Province</Link></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            
        </main>

    )
}

export default NavigationBar;