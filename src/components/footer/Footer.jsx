import React, { Component } from 'react';
import './Footer.css';
import {Col, Row, Container} from 'reactstrap'

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <Container className='containerFooter' >
                <Row>
                    <Col sm='6'>
                        About US
                    </Col>
                    <Col sm='6'>
                        Help
                    </Col>
                </Row>
            </Container>
          );
    }
}
 

export default Footer

