import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMysql,
  SiGithub,
  SiXampp,
  SiPhpmyadmin,
  SiVercel
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", color: "white" }}>
      <Col xs={4} md={3} className="tech-icons">
      <IoLogoFirebase />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
       <SiPhpmyadmin />
      </Col>
       <Col xs={4} md={3} className="tech-icons">
      <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;