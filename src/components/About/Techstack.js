import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
// import { SiCakephp } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPhp,
  DiBootstrap,
  DiGit,
  DiSass,
  DiLaravel,
  DiPostgresql,
  
} from "react-icons/di";
import {
  SiLichess,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiPostgresql,
  SiPhpmyadmin,
  SiPhp,
  SiLaravel,
  SiDocker,
  SiMysql,
  SiJquery,
  SiTypescript,
  SiWordpress
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const [hoveredSkill, setHoveredSkill] = useState("");

  const skills = [
    { Icon: SiPhpmyadmin, name: "PhpMyAdmin" },
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: DiPhp, name: "PHP" },
    { Icon: DiNodejs, name: "Node.js" },
    { Icon: DiReact, name: "React" },
    { Icon: DiLaravel, name: "Laravel" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: SiExpress, name: "Express" },
    { Icon: DiGit, name: "Git" },
    { Icon: DiBootstrap, name: "Bootstrap" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: DiPostgresql, name: "PostgreSQL" },
    { Icon: SiDocker, name: "Docker" },
    { Icon: SiJquery, name: "Jquery" },
    { Icon: DiSass, name: "SASS" },
    // { Icon: SiWordpress, name: "WordPress" },
    // { Icon: SiTypescript, name: "TypeScript" },

  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map(({ Icon, name }) => (
        <Col
          key={name}
          xs={4}
          md={2}
          className="tech-icons"
          onMouseEnter={() => setHoveredSkill(name)}
          onMouseLeave={() => setHoveredSkill("")}
          style={{ position: "relative", textAlign: "center" }}
        >
          {hoveredSkill === name && (
            <div className="skill-name">{name}</div>
          )}
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
