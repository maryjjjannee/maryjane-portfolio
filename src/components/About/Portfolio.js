import React from "react";
import Toolstack from "./Toolstack";
import Techstack from "./Techstack";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
function Portfolio() {
  return (
    <div className="port" id="port">
      <Container fluid className="about-section" >
        <Particle />
        <Container>
          <h1 className="project-heading" style={{color : "purple"}}>
            My <strong className="purple">github</strong>
          </h1>
          <Techstack />
          <h1 className="project-heading" style={{color : "purple"}}>
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </div>
  );
}
export default Portfolio;
