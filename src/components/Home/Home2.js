import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image copy.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Home.css'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je m'appelle <b className="purple">Mohammed Lahlali</b>, j'ai <b className="purple">20 ans</b>.
              <br /><br />
              J'ai obtenu mon bac en <b className="purple">2023 en STE (Sciences et Technologies de l'Électricité)</b>.
              <br /><br />
              Actuellement, j'ai accès à YouCode pour étudier le <b className="purple">développement web</b>.
              <br /><br />
              J'ai également effectué un stage chez <b className="purple">MediaZain à Casablanca</b> en tant que <b className="purple">développeur full stack</b>.
              <br /><br />
              Je maîtrise les classiques comme
              <i>
                <b className="purple"> CSS, JavaScript et HTML. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt incluent la création de nouvelles technologies et produits web &nbsp;
              <i>
                <b className="purple"> </b> ainsi que des domaines liés au 
                 <b className="purple">
                    &nbsp;framework Laravel et PHP.
                </b>
              </i>
              <br />
              <br />
              Chaque fois que c'est possible, j'applique également ma passion pour le développement de produits en utilisant <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  des bibliothèques et frameworks JavaScript modernes
                </b>
              </i>
              &nbsp; tels que
              <i>
                <b className="purple"> React.js et Express.js</b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle bordered-image" alt="avatar" />
            </Tilt>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">vous connecter </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mohmmedlahlali20"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-lahlali-a80996266/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
