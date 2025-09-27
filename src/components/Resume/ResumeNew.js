import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle"; 

import CV_JS_FR from "../../Assets/pdfs/JavaScript_Mohammed_Lahlali.pdf"; 
import CV_JS_EN from "../../Assets/pdfs/JavaScript_english.pdf"; 

const ResumeNew = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaleValue = width > 786 ? 1.2 : 0.6;

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
                

                <div className="d-flex justify-content-center">
             
                  <Document file={CV_JS_EN} className="d-flex justify-content-center">
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
