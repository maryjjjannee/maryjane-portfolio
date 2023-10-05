import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCanva,
  SiVisualstudiocode,
  SiMysql,
  SiJava,
  SiGithub,
  SiWindows,
} from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" , color : "white" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiJava />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiWindows />
      </Col>
    </Row>
  );
}

export default Toolstack;
