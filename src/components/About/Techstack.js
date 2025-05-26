import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJava,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        color: "white",
      }}
    >
      {/* First row of 4 */}
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      {/* Second row of 4 */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>

      {/* Third row of 4 */}
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
    </Row>
  );
}

export default Techstack;
