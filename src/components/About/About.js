import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

import Toolstack from "./Toolstack";



function About() {
  return (
    <div className="about" id="about">
    <Container fluid className="about-section"  style={{paddingtoop : 10}}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" , color : "indigo" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
        
          </Col>
          <h1 className="project-heading" >
            Skill <strong className="purple" >set </strong>
          </h1>
          <Techstack />
          <h1 className="project-heading" >
            <strong className="purple" >Tools</strong> I use
          </h1>
          <Toolstack />
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default About;
