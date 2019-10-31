import React, { Component } from 'react';
import {Container, Col, Row, Button, Nav, Form, FormControl, Navbar } from 'react-bootstrap';
import './Navbar.css'


class Navb extends Component {
    state = {  }
    render() { 
        return ( 
          <Container className="containerNavBar">
              <Row>
                
              <Navbar bg="dark" variant="dark" className="Navb">
              <Col sm="8">
                <Navbar.Brand href="#home" className="NavBrand">Le Wild Bestiaire</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/">Bestiaire</Nav.Link>
                  <Nav.Link href="/history">History</Nav.Link>
                  <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
              </Col >
              <Col sm="4" >
                <Form inline className="searchBar">
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
                  </Form>
              </Col>
            </Navbar> 
            
        </Row>
      </Container>
      )
      ;
    }
}
 
export default Navb;