import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
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
  SiTypescript,
  SiVercel,
  SiMinio,
  SiVite,
  SiMariadb,
  SiPhpmyadmin,
  SiInsomnia,
  SiNpm,
  SiUml,
  SiYaml,
  SiFirebase,
  SiGithubactions,
  SiFlask,
  SiPhpstorm,
  SiPycharm,
  SiGithub,
  SiNodemon,
  SiPnpm,
  SiYarn,
  SiApache,
  SiSwagger,
  SiEslint
} from "react-icons/si";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReactNative,
  TbSql,
  TbBrandFigma,
  TbBrandVue,
  TbBrandPython
} from "react-icons/tb";

function Techstack() {
  const [hoveredSkill, setHoveredSkill] = useState("");

  const frontendSkills = [
    { Icon: DiReact, name: "React" },
    { Icon: TbBrandNextjs, name: "nextjs" },
    { Icon: TbBrandReactNative, name: "R.native" },
    { Icon: TbBrandVue, name: "VUEjs" },
    { Icon: TbBrandNodejs, name: "Nodejs" },
    { Icon: DiJavascript1, name: "JavaScript" },
    { Icon: SiNpm, name: "NPM" },
    { Icon: SiRedux, name: "Redux" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiVite, name: "ViteJS" },
    { Icon: TbBrandHtml5, name: "HTML" },
    { Icon: TbBrandCss3, name: "CSS" },
    { Icon: DiBootstrap, name: "Bootstrap" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { Icon: SiNestjs, name: "NESTJS" },
    { Icon: TbBrandNodejs, name: "Nodejs" },
    { Icon: SiNodemon, name: "Nodemon" },
    { Icon: SiTypescript, name: "TypeScript " },
    { Icon: SiExpress, name: "Express" },
    { Icon: DiPhp, name: "PHP" },
    { Icon: DiLaravel, name: "Laravel" },
    { Icon: TbSql, name: "SQL" },
    { Icon: TbBrandPython, name: "Python" },
    { Icon: SiFlask, name: "Flask" },
  ];

  const DataBase = [
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiMysql, name: "MySQL" },
    { Icon: DiPostgresql, name: "PostgreSQL" },
    { Icon: SiMariadb, name: "MariaDB" },
    { Icon: SiFirebase, name: "FireBase" },
  ];

  const devOpsSkills = [
    { Icon: SiJest, name: "JEST" },
    { Icon: SiSwagger, name: "Swagger" },
    { Icon: DiGit, name: "Git" },
    { Icon: SiGithub, name: "Github" },
    { Icon: SiJsonwebtokens, name: "JWT" },
    { Icon: SiPhpmyadmin, name: "PHPmyAdmin" },
    { Icon: SiMinio, name: "Minio" },
    { Icon: SiApache, name: "Apache" },
    { Icon: SiEslint, name: "ESLint" },
    { Icon: SiPostman, name: "Postman" },
    { Icon: SiInsomnia, name: "Insomnia" },
    { Icon: SiGithubactions, name: "Github Action" },
    { Icon: SiDocker, name: "Docker" },
    { Icon: SiUml, name: "UML" },
    { Icon: SiPnpm, name: "Pnpm" },
    { Icon: SiNpm, name: "NPM" },
    { Icon: SiYarn, name: "Yarn" },
    { Icon: SiWebstorm, name: "Webstorm" },
    { Icon: SiPycharm, name: "PyCharm" },
    { Icon: SiPhpstorm, name: "Phpstorm" },
    { Icon: SiVercel, name: "Vercel" },
    { Icon: DiUbuntu, name: "ubuntu" },
    { Icon: DiWindows, name: "windows" },
    { Icon: SiJira, name: "Jira" },
    { Icon: DiTrello, name: "Trello" },
    { Icon: TbBrandFigma, name: "Figma" },
    { Icon: SiYaml, name: "YAML" },
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
