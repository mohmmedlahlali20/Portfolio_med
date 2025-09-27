import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image copy.png";
import myImg2 from "../../Assets/about.png";
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
              LET ME <span className="purple"> INTRODUCE MYSELF </span>
            </h1>
            <p className="home-about-body">
              My name is <b className="purple">Mohammed Lahlali</b>, and I am <b className="purple">21 years old</b>.
              <br /><br />
              I obtained my high school diploma in <b className="purple">2023 in STE (Sciences and Technologies of Electricity)</b>.
              <br /><br />
              I recently <b className="purple">graduated from YouCode</b> as a
              <b className="purple"> Web & Mobile Developer specialized in JavaScript</b>.
              <br /><br />
              Currently, I am doing an <b className="purple">internship with a professional contract (ANAPEC) at Arias Technologie Solution</b>,
              working as a <b className="purple">Full Stack Developer</b>.
              <br /><br />
              I have strong skills in the classics like
              <i>
                <b className="purple">  JavaScript, PHP, Python. </b>
              </i>
              <br /><br />
              My interests include building new web technologies and products, &nbsp;
              <i>
                <b className="purple"> </b> as well as working with
                <b className="purple">&nbsp;React Native, NestJS frameworks.</b>
              </i>
              <br /><br />
              Whenever possible, I also channel my passion for product development using <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> modern JavaScript libraries and frameworks</b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> NextJS and NestJS</b>
              </i>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect with me</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mohmmedlahlali20"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-lahlali-a80996266/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
