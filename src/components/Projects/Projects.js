import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CineManager from "../../Assets/Projects/CineManager.png";
import P2P from "../../Assets/Projects/P2P.png";
import RH from "../../Assets/Projects/RH.png";
import sportive from "../../Assets/Projects/sportive.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Réalisations Récentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai récemment travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CineManager}
              isBlog={false}
              title="CineManager"
              description="CineManager est une plateforme de cinéma en ligne développée avec React, Express, MongoDB, JWT et MinIO. Elle permet aux utilisateurs de consulter les films, regarder des films gratuits, et réserver des films payants tout en choisissant des sièges spécifiques via une interface interactive."
              ghLink="https://github.com/mohmmedlahlali20/Cin-Manager-FullStack-.git"
            />
          </Col>
 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P2P}
              isBlog={false}
              title="Communication P2P"
              description="P2P est une plateforme de communication permettant aux utilisateurs d'envoyer des messages instantanés et de créer des appels vidéo en temps réel. Développée avec React, Nest.js, TypeScript, MongoDB, WebSocket, WebRTC et JWT, elle offre une expérience fluide et sécurisée pour la communication entre pairs."
              ghLink="https://github.com/mohmmedlahlali20/discord.git"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RH}
              isBlog={false}
              title="Plateforme RH"
              description="Cette plateforme permet aux candidats de postuler à des offres d'emploi et aux recruteurs de gérer leurs candidats. Développée en full-stack avec Next.js, MongoDB, Nest.js et une base de données secondaire, les services communiquent via des API REST sécurisées par JWT."
              ghLink="https://github.com/mohmmedlahlali20/Cinimaty-Careers-FullStack-.git"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sportive}
              isBlog={false}
              title="Event Manager"
              description="Event Manager est une application de gestion d'événements. Le backend est développé avec NestJS, TypeScript et MongoDB, tandis que le frontend utilise React et Redux Toolkit. Cette plateforme permet de créer, gérer et suivre des événements. Les dépôts backend et frontend sont séparés pour une meilleure organisation."
              ghLink="https://github.com/mohmmedlahlali20/Systeme_Gestion_event.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
