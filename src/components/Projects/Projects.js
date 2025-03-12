import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CineManager from "../../Assets/Projects/CineManager.png";
import P2P from "../../Assets/Projects/P2P.png";
import RH from "../../Assets/Projects/RH.png";
import sportive from "../../Assets/Projects/sportive.png"
import Photo from '../../Assets/Projects/PhotoShare.png'
import PETSWAVE from "../../Assets/Projects/petsWave.png"
import MyVod from '../../Assets/Projects/MyVod.png'
import Warehouse_Management from '../../Assets/Projects/Warehouse_Management.png'
import gestion from '../../Assets/Projects/gestion.png'

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Photo}
              isBlog={false}
              title="PhotoShare"
              description=" PhotoShare est une application mobile utilisant React Native , avec une authentification Firebase, permettant aux utilisateurs de partager et interagir avec des photos. Les photos peuvent être des memes, des photos de nature, ou d'autres catégories. Les utilisateurs peuvent réagir, commenter et suivre d'autres utilisateurs."
              ghLink="https://github.com/mohmmedlahlali20/Systeme_Gestion_event.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PETSWAVE}
              isBlog={false}
              title="PetsWave frontend"
              description="PetsWave est une application e-commerce dédiée aux animaux, développée avec React Native via Expo. L'objectif principal est de permettre aux utilisateurs de naviguer à travers une variété de produits pour leurs animaux de compagnie"
              ghLink="https://github.com/mohmmedlahlali20/PetsWave_mobile_app.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PETSWAVE}
              isBlog={false}
              title="PetsWave backend"
              description=" PetsWave inclut un backend robuste développé avec NestJS, utilisant MongoDB comme base de données et MinIO pour le stockage des fichiers (images et autres ressources). Il est conçu pour assurer une gestion sécurisée et efficace des fonctionnalités e-commerce dédiées aux animaux."
              ghLink="https://github.com/mohmmedlahlali20/PETSWAVE.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyVod}
              isBlog={false}
              title="MyVod"
              description="MyVod est une application de cinéma permettant aux utilisateurs de regarder des films en ligne et de réserver des billets pour les séances de cinéma. Développée avec React Native via Expo, cette application offre une expérience fluide pour les amateurs de films."
              ghLink="https://github.com/mohmmedlahlali20/MyVOD.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Warehouse_Management}
              isBlog={false}
              title="Warehouse Management"
              description="Warehouse_Management est une application de gestion des stocks, développée avec React Native. L'objectif principal de cette application est d'optimiser la gestion des inventaires dans un environnement d'entrepôt, en permettant aux utilisateurs de suivre, organiser et contrôler les stocks de manière efficace et en temps réel."
              ghLink="https://github.com/mohmmedlahlali20/Warehouse_Management.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestion}
              isBlog={false}
              title="EventManager backend"
              description="EventManager est une application de gestion d'événements développée avec NestJS, utilisant JWT pour l'authentification sécurisée et MongoDB pour le stockage des données. Cette plateforme permet aux utilisateurs de créer, gérer et participer à divers événements, qu'ils soient en ligne ou en présentiel."
              ghLink="https://github.com/mohmmedlahlali20/Systeme_Gestion_event.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestion}
              isBlog={false}
              title="EventManager frontend"
              description="EventManager dispose d'un frontend développé avec React, offrant une interface moderne et intuitive pour la gestion des événements. Il est conçu pour fonctionner avec un backend NestJS sécurisé par JWT et utilisant MongoDB pour le stockage des données."
              ghLink="https://github.com/mohmmedlahlali20/gestion_systeme.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
