import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import Type from "./Type";
import Home2 from "./Home2";
import profileImg from "../Assets/profile.png";

function Home() {
  useEffect(() => {
    document.title = "Onwanya | Portfolio";
  }, []);
  return (
    <div className="home">
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15, color: "White", paddingTop: 50 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name" style={{ color: "white" }}>
                  I'm
                  <strong className="main-name" style={{ color: "Indigo" }}>
                    {" "}Onwanya Sakharet
                  </strong>
                </h1>
                <div style={{ padding: 50, textAlign: "left", color: "purple", fontSize: "2.5em" }}>
                  <Type />
                </div>

                <div style={{ padding: 50 }}></div>
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img
                  src={profileImg}
                  alt="Onwanya Sakharet's profile picture"
                  className="profile-home"
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    </div>
  );
}

export default Home;
