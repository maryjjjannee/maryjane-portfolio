import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "200px", paddingTop: "50px",  }}>
    <Col xs={2} md={7} className="tech-icons">
      <a href="https://github.com/owskr/Doctorapp" style={{ textDecoration: 'none' ,color: "white", paddingBottom: "80px", paddingTop: "20px", }}>
        <p>Doctor app</p>
      </a>
    </Col>
    <Col xs={2} md={7} className="tech-icons">
      <a href="https://github.com/owskr/TestLogin-FB" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color: "white",}}>
        <p>Test facebook login</p>
      </a>
    </Col>
  </Row>
  
  );
}

export default Techstack;
