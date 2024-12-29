import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle"; // Si vous souhaitez ajouter des effets visuels

import CV_JS from "../../Assets/pdfs/JavaScript_Mohammed_Lahlali.pdf"; // Le chemin vers votre CV PDF

const ResumeNew = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaleValue = width > 786 ? 1.2 : 0.6;

  // Définir le worker pour React-PDF
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
      <div>
        <Container fluid className="resume-section">
          <Particle />
          <Container>
            <h1 className="project-heading">
              <strong className="purple">My Resume</strong>
            </h1>
            <Row className="resume justify-content-center">
              <Col md={6}>
                <div className="text-center m-3">
                  <Button
                      variant="primary"
                      href={CV_JS} // Lien vers le fichier PDF
                      target="_blank" // Ouvre dans un nouvel onglet
                      download // Permet le téléchargement du fichier
                      style={{ maxWidth: "250px" }}
                  >
                    <AiOutlineDownload />
                    &nbsp;Download MERN CV
                  </Button>
                </div>

                <div className="d-flex justify-content-center">
                  {/* Affichage du PDF */}
                  <Document file={CV_JS} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={scaleValue} />
                  </Document>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
  );
};

export default ResumeNew;
