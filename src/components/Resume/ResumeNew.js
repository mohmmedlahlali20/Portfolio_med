import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle";

import CV_MERN from "../../Assets/pdfs/Cv_Mohammed_Lahlali_Javascript_MERN.pdf";
import PHP_Laravel_CV from "../../Assets/pdfs/CV_Mohammed_Lahlali_PHP_LARAVEL.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            <strong className="purple">My Resumes</strong>
          </h1>
          <Row className="resume" style={{ justifyContent: "center" }}>
           
            <Col md={6}>
              <h3 className="text-center">MERN Stack CV</h3>
              <div className="text-center m-3">
                
                <Button
                  variant="primary"
                  href={CV_MERN}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download MERN CV
                </Button>
              </div>

              <Document file={CV_MERN} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
              </Document>
              
            </Col>
              <div className="m-5">

              </div>
            <Col md={6}>
              <h3 className="text-center">PHP Laravel CV</h3>
              <div className="text-center m-3">
                <Button
                  variant="primary"
                  href={PHP_Laravel_CV}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download PHP Laravel CV
                </Button>
              </div>
              <Document file={PHP_Laravel_CV} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
              </Document>
              
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
