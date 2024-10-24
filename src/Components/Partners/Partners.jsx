import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import img1 from '../../img/cafe-frei.png';
import img2 from '../../img/azur.jpeg';
import img3 from '../../img/Logo.jpg';
import img4 from '../../img/egycsipenapolylogo.png';

const Partners = () => {
  return (
    <Container>
      <Row>
        <h1 className="title">Partnerünk</h1>
      </Row>
      <Row>
        <Col>
          <img src={img1} alt="Frei Cafe" width="140px"/>
        </Col>
        <Col>
          <img src={img2} alt="Hotel Azur" width="140px"/>
        </Col>
        <Col>
          <img src={img3} alt="Sushi Bar" width="140px"/>
        </Col>
        <Col>
          <img src={img4} alt="Egy csipet nápoly" width="140px"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Partners;