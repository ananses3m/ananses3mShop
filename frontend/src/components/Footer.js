import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <hr />
                <Row>
                    <Col>
                        <Row><h5>Contact</h5></Row>
                        <Row className='-py-3'><p>Phone: +233 000 00 0000</p></Row>
                        <Row className='-py-4'><p>Email: <a href='mailto:anansesm@gmail.com'>anansesm@gmail.com</a></p></Row>
                    </Col>
                    <Col className='text-center py-3'>
                        Copyright &copy; Anansesɛm
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
