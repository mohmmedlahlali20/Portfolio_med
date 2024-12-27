import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPhp,
  DiBootstrap,
  DiGit,
  DiWindows,
  DiUbuntu,
  DiLaravel,
  DiPostgresql,
  DiTrello
} from "react-icons/di";
import {
  SiTailwindcss,
  SiExpress,
  SiDocker,
  SiMysql,
  SiPostman,
  SiNestjs,
  SiMongodb,
  SiJest,
  SiJsonwebtokens,
  SiWebstorm,
  SiJira,
  SiRedux,
  SiTypescript
} from "react-icons/si";
import { TbBrandHtml5, TbBrandCss3, TbBrandNextjs } from "react-icons/tb";

function Techstack() {
  const [hoveredSkill, setHoveredSkill] = useState("");

  const frontendSkills = [
    { Icon: DiReact, name: "React" },
    { Icon: TbBrandNextjs, name: "nextjs" },
    { Icon: DiNodejs, name: "Node.js" },
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: SiRedux, name: "Redux" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: TbBrandHtml5, name: "HTML" },
    { Icon: TbBrandCss3, name: "CSS" },
    { Icon: DiBootstrap, name: "Bootstrap" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { Icon: SiNestjs, name: "NESTJS" },
    { Icon: DiNodejs, name: "Node.js" },
    { Icon: SiTypescript, name: "TypeScript " },
    { Icon: SiExpress, name: "Express" },
    { Icon: DiPhp, name: "PHP" },
    { Icon: DiLaravel, name: "Laravel" },
  ];

  const DataBase = [
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: DiPostgresql, name: "PostgreSQL" },
  ];

  const devOpsSkills = [
    { Icon: SiJest, name: "JEST" },
    { Icon: DiGit, name: "Git" },
    { Icon: SiJsonwebtokens, name: "JWT" },
    { Icon: SiPostman, name: "Postman" },
    { Icon: SiDocker, name: "Docker" },
    { Icon: SiWebstorm, name: "Webstorm" },
    { Icon: DiUbuntu, name: "ubuntu" },
    { Icon: DiWindows, name: "windows" },
    { Icon: SiJira, name: "Jira" },
    { Icon: DiTrello, name: "Trello" },
  ];

  const renderSkills = (skills) =>
    skills.map(({ Icon, name }) => (
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
          <div
            className="skill-name"
            style={{
              position: "absolute",
              bottom: "5px", 
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "12px", 
              fontWeight: "bold",
              whiteSpace: "nowrap",
              background: "#000", 
              color: "#fff",
              padding: "2px 5px",
              borderRadius: "5px",
              maxWidth: "80px", 
              textOverflow: "ellipsis",
              overflow: "hidden"
            }}
          >
            {name}
          </div>
        )}
        <Icon />
      </Col>
    ));

  return (
    <div>
      <h2 className="project-heading">
        <strong className="purple">Frontend</strong> Skills
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {renderSkills(frontendSkills)}
      </Row>

      <h2 className="project-heading">
        <strong className="purple">Backend</strong> Skills
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {renderSkills(backendSkills)}
      </Row>

      <h2 className="project-heading">
        <strong className="purple">DataBase</strong>
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {renderSkills(DataBase)}
      </Row>

      <h2 className="project-heading">
        <strong className="purple">DevOps & Tools</strong>
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {renderSkills(devOpsSkills)}
      </Row>
    </div>
  );
}

export default Techstack;
