import React from "react";
import Card from "react-bootstrap/Card";
import { BiRightArrow } from "react-icons/bi";

function AboutCard() {
  return (
    <div className="aboutc" >
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" , color : "white" }}>
            Hi Everyone, My name is <span className="purple"> Onwanya Sakharet </span>
             I'm <span className="purple"> 22 years old .</span>
            <br />I am a student in Burapha University.
            <br />You can call me <span className="purple">Jane  </span>, My major was Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity" style={{ color : "MediumPurple" }}>
              <BiRightArrow /> Playing Games
            </li>
            <li className="about-activity" style={{ color : "MediumPurple" }}>
              <BiRightArrow /> Travelling
            </li>
          </ul>
         
        </blockquote>
      </Card.Body>
    </Card>
  </div>
  );
}

export default AboutCard;
