import React from "react";
import "./CSS/home.css";
import "./CSS/home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import './Feedback.css';  // Import the CSS file where you define the styles

const Feedback = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "20px",
      }}
      className="mt-5"
    >
      <Container>
        <Row>
          <Col
            md={{ span: 8, offset: 2 }}
            className="text-center"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h1 className="text-center">Provide Your Feedback</h1>
            <p className="lead text-center">
              We value your feedback! Your insights help us improve our services and make your experience
              on Telangana's highways Safer.
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter feedback here!!"
                ></textarea>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;
