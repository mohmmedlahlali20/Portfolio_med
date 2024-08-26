import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import evento from "../../Assets/Projects/evento.png";
import pets from "../../Assets/Projects/pets.png";
import Transaction from "../../Assets/Projects/transaction.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Transaction}
              isBlog={false}
              title="Transactions"
              description="transactions, développé avec EJS, JavaScript, Express.js, Node.js, CSS, et Tailwind, offre une plateforme sécurisée et performante pour gérer vos opérations en ligne. Conçu pour une expérience utilisateur fluide, il permet de réaliser des transactions rapides et fiables, avec une interface moderne et intuitive."
              ghLink="https://github.com/mohmmedlahlali20/Gestion_De_Portefeuille.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evento}
              isBlog={false}
              title="Evento"
              description="Cette plateforme permettra aux utilisateurs de découvrir, réserver et générer des tickets pour une variété d'événements, tandis que les organisateurs auront la possibilité de créer et de gérer leurs propres événements."
              ghLink="https://github.com/mohmmedlahlali20/Eventoo.git"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pets}
              isBlog={false}
              title="PetsWeb"
              description="Pets Web est une plateforme e-commerce pour animaux de compagnie, développée avec Laravel, Bootstrap, HTML, CSS, JavaScript, et SQL."
              ghLink="https://github.com/mohmmedlahlali20/PetsWeb.git"
              // demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
