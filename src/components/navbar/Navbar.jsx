import React, { Component } from 'react';
import {Container, Col, Row, Button, Nav, Form, FormControl, Navbar } from 'react-bootstrap';
import './Navbar.css'
import {Link} from 'react-router-dom'

class Navb extends Component {

  render() { 
        return ( 
          <Container className="containerNavBar">
              <Row>
                
              <Navbar bg="dark" variant="dark" className="Navb">
              <Col sm="8">
                <Navbar.Brand href="#home" className="NavBrand">Le Wild Bestiaire</Navbar.Brand>
                <Nav className="mr-auto">
                  <Link to="/">Bestiaire</Link>
                  <Link to="/history">History</Link>
                  <Link href="#pricing">Contact Us</Link>
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