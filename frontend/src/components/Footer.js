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
                        <Row className='-py-3'><p><i className='fas fa-phone'></i>: +233 20 904 4823</p></Row>
                        <Row className='-py-4'><p><i className='fas fa-envelope'></i>: <a href='mailto:anansesm@gmail.com'>anansesm@gmail.com</a></p></Row>
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
