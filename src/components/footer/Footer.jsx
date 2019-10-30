import React, { Component } from 'react';
import './Footer.css';
import {Col, Row, Container} from 'reactstrap'

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <Row>
                    <Col>
                        About US
                    </Col>
                    <Col>
                        Help
                    </Col>
                </Row>
            </Container>
          );
    }
}
 

export default Footer

