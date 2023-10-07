import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiFlutter,
  SiXampp,
  SiRobotframework,
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
        <DiGit />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiFlutter />
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
