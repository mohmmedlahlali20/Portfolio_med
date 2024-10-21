import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Mohammed Lahlali</span>
            de <span className="purple">Safi, Maroc.</span>
            <br />
            Je suis actuellement étudiant à Youcode.
            <br />
            <br />
            En dehors du codage, voici quelques activités que j'adore !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer aux échecs
            </li>

            <li className="about-activity">
              <ImPointRight /> Regarder des animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Efforcez-vous de créer des choses qui font la différence !"
          </p>
          <footer className="blockquote-footer">MEDLAH20</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
