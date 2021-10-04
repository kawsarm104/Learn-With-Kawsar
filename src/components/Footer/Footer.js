import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-margin ">
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Cources</h3>
                <ul>
                  <li>Programming Language</li>
                  <li>Machine Learning</li>
                  <li>Artificial Intelligence </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>Company</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Learn with kawsar</h3>
                <p>
                  Hey!! Dont waste more time ..LIfe is short if you want to earn
                  something valueable then just enroll on the Course you like
                  .Remember Your today's hardwrok will tell you where you will
                  go What life you will live
                </p>
              </div>
            </div>
            <p className="copyright">Learn with kawsar © 2021</p>
          </div>
        </footer>
      </div>
    </div>

    //   <div className="footer bg-secondary d-flex justify-content-lg-around">
    // <Container fluid className="bg-secondary d-flex justify-content-around ">
    //   <Row>
    //     <Col sm={12} md={12}>
    //       <h1 className="text-uppercase">Phone Support</h1>
    //       <h5 className="text-uppercase mb-4">24 hours a day</h5>
    //       <h3>01515247103</h3>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col sm={12} md={12} className="bg-warning">
    //       <h1 className="text-uppercase">Contact with us</h1>
    //       <h5 className="text-uppercase mb-4">Email</h5>
    //       <h3>kawsarm104@gmail.com</h3>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col sm={12} md={12}>
    //       <h1 className="text-uppercase">newsletter</h1>
    //       <h5 className="text-uppercase mb-4">signup for social offer</h5>
    //     </Col>
    //   </Row>
    // </Container>
    // </div> // responsive hoitasena na
      
  );
};

export default Footer;
