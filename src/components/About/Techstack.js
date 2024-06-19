import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

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
  SiTailwindcss,
  SiExpress,
  SiPhpmyadmin,

  SiDocker,
  SiMysql,
  SiJquery,
} from "react-icons/si";
import { TbBrandGolang, TbBrandHtml5, TbBrandCss3, TbBlade } from "react-icons/tb";

function Techstack() {
  const [hoveredSkill, setHoveredSkill] = useState("");

  const skills = [
    { Icon: TbBrandHtml5, name: "Html" },
    { Icon: TbBrandCss3, name: "css" },
    { Icon: DiSass, name: "SASS" },
    { Icon: DiBootstrap, name: "Bootstrap" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: TbBlade, name: "Blade" },
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: DiReact, name: "React" },
    { Icon: SiPhpmyadmin, name: "PhpMyAdmin" },
    { Icon: DiPhp, name: "PHP" },
    { Icon: DiLaravel, name: "Laravel" },
    { Icon: DiNodejs, name: "Node.js" },
    { Icon: SiExpress, name: "Express" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: DiGit, name: "Git" },
    { Icon: DiPostgresql, name: "PostgreSQL" },
    { Icon: SiDocker, name: "Docker" },
    { Icon: SiJquery, name: "Jquery" },
    { Icon: TbBrandGolang, name: "brand" },
    // { Icon: SiWordpress, name: "WordPress" },
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
