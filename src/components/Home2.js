import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", paddingTop: 100, color: "white" }}>
              LET ME <span style={{ color: "purple" }}> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ color: "white" }}>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b style={{ color: "purple" }}> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b style={{ color: "purple" }}>
                  Web Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b style={{ color: "purple" }}>
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{ color: "purple" }}>Node.js</b> and
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <br />
            <br />
            <h1 style={{ color: "white" }}> FIND ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/maryjjjanne/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/onwanyasakharetxane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
