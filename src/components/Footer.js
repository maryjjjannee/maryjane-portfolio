import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillInstagram,} from "react-icons/ai";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright" >
          <h3 style={{fontSize: "1.2em"  , color :"black"}}>Designed and Developed by Maryjane</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
