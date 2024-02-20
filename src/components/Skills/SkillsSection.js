import React from 'react';
import './Skills.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SkillsSection = () => {
  return (
    <section id="Skills" className="Skills sect-pt4 route">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="title-box text-center">
              <h3 className="title-a">Skills</h3>
              <div className="line-mf"></div>
            </div>
          </Col>
        </Row>
        <Row>
          
          <Col md={4} className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>HTML</Card.Title>
              </Card.Body>
              <Card.Img
                variant="top"
                src="assets/img/html5-368x246.png"
                alt="HTML Image"
              />
            </Card>
          </Col>
          
          <Col md={4} className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CSS</Card.Title>
              </Card.Body>
              <Card.Img
                variant="top"
                src="assets/img/zann.png"
                alt="CSS Image"
              />
            </Card>
          </Col>

          <Col>
          <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
              <Card.Img
                variant="top"
                src="assets/img/html5-368x246.png"
                alt="HTML Image"
              />
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>React</Card.Title>
              </Card.Body>
              <Card.Img
                variant="top"
                src="assets/img/html5-368x246.png"
                alt="HTML Image"
              />
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Python</Card.Title>
              </Card.Body>
              <Card.Img
                variant="top"
                src="assets/img/html5-368x246.png"
                alt="HTML Image"
              />
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Java</Card.Title>
              </Card.Body>
              <Card.Img
                variant="top"
                src="assets/img/html5-368x246.png"
                alt="HTML Image"
              />
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Node JS</Card.Title>
              </Card.Body>
              <Card.Img
                variant="top"
                src="assets/img/html5-368x246.png"
                alt="HTML Image"
              />
            </Card>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;

