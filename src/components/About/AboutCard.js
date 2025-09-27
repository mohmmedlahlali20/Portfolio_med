import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I am <span className="purple">Mohammed Lahlali</span>
            from <span className="purple">Safi, Morocco.</span>
            <br />
            I recently graduated from <span className="purple">YouCode</span> as a Web & Mobile Developer
            specialized in JavaScript.
            <br />
            Currently, I am doing my internship with a contract at
            <span className="purple"> Arias Technologie Solution</span> as a Full Stack Developer.
            <br />
            <br />
            Outside of coding, here are a few activities I love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">MEDLAH20</footer>
        </blockquote>
      </Card.Body>
    </Card>

  );
}

export default AboutCard;
