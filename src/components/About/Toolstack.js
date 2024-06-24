import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiTrello,
  SiVercel,
  SiUbuntu,
  SiGithub,
  SiGithubpages,
  SiXampp,
  SiFilezilla,
  SiFigma,
  SiJira,
  SiPhpstorm,
  SiCanva,
  SiPhpmyadmin,
  SiKalilinux
} from "react-icons/si";

import './About.css'

function Toolstack() {
  const [hoveredTool, setHoveredTool] = useState("");

  const tools = [
    { Icon: SiUbuntu, name: "Ubuntu" },
    { Icon: SiVisualstudiocode, name: "Visual Studio Code" },
    { Icon: SiPostman, name: "Postman" },
    { Icon: SiTrello, name: "Trello" },
    { Icon: SiVercel, name: "Vercel" },
    { Icon: SiGithub, name: "GitHub" },
    { Icon: SiXampp, name: "Xampp" },
    { Icon: SiGithubpages, name: "GitHub Pages" },
    { Icon: SiFilezilla, name: "FilZilla" },
    { Icon: SiFigma, name: "Figma" },
    { Icon: SiJira, name: "Jira" },
    { Icon: SiPhpstorm, name: "Php Storm" },
    { Icon: SiCanva, name: "Canva" },
    { Icon: SiPhpmyadmin, name: "PhpMyAdmin" },
    { Icon: SiKalilinux, name: "Kali Linux" },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ Icon, name }) => (
        <Col
          key={name}
          xs={4}
          md={2}
          className="tech-icons"
          onMouseEnter={() => setHoveredTool(name)}
          onMouseLeave={() => setHoveredTool("")}
          style={{ position: "relative", textAlign: "start" }}
        >
          {hoveredTool === name && (
            <div className="skill-name">{name}</div>
          )}
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
