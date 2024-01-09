import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactUs = () => {
  return (
    // <div className="fbox d-flex align-items-center justify-content-center">
    <div style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="mt-5">
      
      <Container>
        <Card>
          <Card.Body>
            <h1 className="text-center">Contact TiresOnHighways</h1>
            <p className="lead text-center">
              Got a question? We're here to help! Whether it's about your tires or the TiresOnHighways app,
              we're available to assist you. Choose the method that suits you best:
            </p>

            <Row className="mb-3">
              <Col>Email:</Col>
              <Col>
                email address
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>Phone:</Col>
              <Col>
                toll-free number
              </Col>
            </Row>
            <hr />

            <p className="text-center">For general inquiries:</p>

            <Row className="mb-3">
              <Col>
                Send us a message on social media:{""}
              </Col>
            </Row>
            <Row>
            <a href="https://www.instagram.com">Instagram</a>
            </Row>
            <Row>
            <a href="https://www.facebook.com">Facebook</a>
            </Row>
            <Row>
            <a href="https://twitter.com/">X</a>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ContactUs;
