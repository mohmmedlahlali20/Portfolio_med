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
          My <strong className="purple">Recent Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CineManager}
              isBlog={false}
              title="CineManager"
              description="CineManager is an online cinema platform built with React, Express, MongoDB, JWT, and MinIO. It allows users to browse movies, watch free films, and book paid tickets while selecting specific seats through an interactive interface."
              ghLink="https://github.com/mohmmedlahlali20/Cin-Manager-FullStack-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={P2P}
              isBlog={false}
              title="P2P Communication"
              description="P2P is a communication platform that enables users to send instant messages and create real-time video calls. Developed with React, Nest.js, TypeScript, MongoDB, WebSocket, WebRTC, and JWT, it offers a smooth and secure peer-to-peer communication experience."
              ghLink="https://github.com/mohmmedlahlali20/discord.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RH}
              isBlog={false}
              title="HR Platform"
              description="This platform allows candidates to apply for job offers and recruiters to manage applicants. Built full-stack with Next.js, MongoDB, and Nest.js, using a secondary database and secure REST APIs with JWT."
              ghLink="https://github.com/mohmmedlahlali20/Cinimaty-Careers-FullStack-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sportive}
              isBlog={false}
              title="Event Manager"
              description="Event Manager is an event management application. The backend is built with NestJS, TypeScript, and MongoDB, while the frontend uses React and Redux Toolkit. The platform enables creating, managing, and tracking events with separate repositories for backend and frontend."
              ghLink="https://github.com/mohmmedlahlali20/Systeme_Gestion_event.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Photo}
              isBlog={false}
              title="PhotoShare"
              description="PhotoShare is a mobile app built with React Native and Firebase authentication. It allows users to share and interact with photos — whether memes, nature shots, or other categories. Users can react, comment, and follow others."
              ghLink="https://github.com/mohmmedlahlali20/Systeme_Gestion_event.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PETSWAVE}
              isBlog={false}
              title="PetsWave Frontend"
              description="PetsWave is an e-commerce mobile app for pets, developed with React Native using Expo. It allows users to browse a variety of products for their pets with a smooth shopping experience."
              ghLink="https://github.com/mohmmedlahlali20/PetsWave_mobile_app.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PETSWAVE}
              isBlog={false}
              title="PetsWave Backend"
              description="The PetsWave backend is built with NestJS, using MongoDB for data management and MinIO for file storage (images and resources). It ensures secure and efficient handling of e-commerce features for pets."
              ghLink="https://github.com/mohmmedlahlali20/PETSWAVE.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyVod}
              isBlog={false}
              title="MyVod"
              description="MyVod is a cinema application that allows users to watch movies online and book tickets for cinema screenings. Developed with React Native via Expo, it provides a smooth movie-watching experience."
              ghLink="https://github.com/mohmmedlahlali20/MyVOD.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Warehouse_Management}
              isBlog={false}
              title="Warehouse Management"
              description="Warehouse Management is a stock management mobile app developed with React Native. It optimizes inventory tracking in warehouses by allowing users to monitor, organize, and control stock efficiently in real time."
              ghLink="https://github.com/mohmmedlahlali20/Warehouse_Management.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestion}
              isBlog={false}
              title="Event Manager Backend"
              description="The Event Manager backend is developed with NestJS, using JWT for secure authentication and MongoDB for data storage. It enables users to create, manage, and participate in both online and in-person events."
              ghLink="https://github.com/mohmmedlahlali20/Systeme_Gestion_event.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestion}
              isBlog={false}
              title="Event Manager Frontend"
              description="The Event Manager frontend is built with React, providing a modern and intuitive interface for managing events. It is designed to work with a NestJS backend secured by JWT and powered by MongoDB."
              ghLink="https://github.com/mohmmedlahlali20/gestion_systeme.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>

  );
}

export default Projects;
