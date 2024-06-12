import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
<Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">Mohammed Lahlali</span>
        from <span className="purple">Safi, Morocco.</span>
        <br />
        I am currently studying at Youcode.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Playing Games
        </li>
        <li className="about-activity">
          <ImPointRight /> Watching Anime
        </li>
        <li className="about-activity">
          <ImPointRight /> Travelling
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
