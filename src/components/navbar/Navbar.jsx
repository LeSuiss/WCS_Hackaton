import React, { Component } from 'react';
import { Button, Nav, Form, FormControl, Navbar } from 'react-bootstrap';
import './Navbar.css'


class Navb extends Component {
    state = {  }
    render() { 
        return ( 
        <Navbar bg="dark" variant="dark" className="Navb">
        <Navbar.Brand href="#home" className="NavBrand">Le Wild Bestiaire</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">History</Nav.Link>
          <Nav.Link href="#pricing">Contact Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar> );
    }
}
 
export default Navb;