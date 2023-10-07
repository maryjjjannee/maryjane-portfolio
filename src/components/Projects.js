import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "./Particle";
import QHOS from "../Assets/Projects/QHOS.png";
import FB from "../Assets/Projects/FB.png";

function Projects() {
    return (
        <div className="projects" id="projects">
      <Container fluid className="project-section" >
        <Particle />
        <Container>
          <h1 className="project-heading" >
            My  <strong className="purple">Projects </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px"  }}>
            <Col  md={5} className="project-card">
              <ProjectCard
                imgPath={QHOS}
                isBlog={false}
                title="Q-hospital app" 
                description="This application has been developed for the purpose of assisting the Software Engineering course instructor. This app functions as an online appointment booking system for a hospital."
                ghLink="https://github.com/owskr/Doctorapp"
              />
            </Col>
  
            <Col  md={5} className="project-card">
              <ProjectCard
                imgPath={FB}
                isBlog={false}
                title="Test Facebook login "
                description="This is a test login for the Facebook system ."
                ghLink="https://github.com/owskr/TestLogin-FB"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      </div>
    );
  }
  
  export default Projects;
  