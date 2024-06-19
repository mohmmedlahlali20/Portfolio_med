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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learned something, I think... 🤷‍♂️
              <br />
              <br />I am proficient in classics like
              <i>
                <b className="purple"> CSS, Javascript, and HTML. </b>
              </i>
              <br />
              <br />
              My areas of interest include building new web technologies and products &nbsp;
              <i>
                <b className="purple"> </b> and also areas related to
                <b className="purple">
                  the Laravel framework and PHP.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products using <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern JavaScript libraries and frameworks
                </b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Express.js</b>
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
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
