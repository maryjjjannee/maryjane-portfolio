import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import { FaHtml5, FaCss3Alt} from "react-icons/fa";
import {
  SiXampp,
  SiRobotframework,
  SiTypescript,
} from "react-icons/si";
function Techstack() {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" ,  color : "white"}}>
      <Col xs={4} md={3} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiRobotframework />
      </Col>
      
    </Row>
  
  );
}

export default Techstack;
