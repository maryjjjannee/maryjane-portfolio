import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { Container } from "react-bootstrap";

 function Dashboard() {
  return (
    <div className="dashboard">
    <Container fluid className="about-section" id="dashboard">
      <Container>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote md={20} className="blockquote mb-0">
            <p style={{ justifyContent: "center", paddingBottom: 15 }}>
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>
            <footer className="blockquote-footer">Maryjane</footer>
          </blockquote>
          <br />
          <br />
          <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        </Card.Body>
      </Card>
    </Container>
    </Container>
    </div>
  );
}
export default Dashboard ;
