import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import img1 from '../../img/cafe-frei.png';
import img2 from '../../img/azur.jpeg';
import img3 from '../../img/Logo.jpg';
import img4 from '../../img/egycsipenapolylogo.png';
import img5 from '../../img/spirit.png';
import img6 from '../../img/balaton_grill.webp';
import img7 from '../../img/topart.png';
import img8 from '../../img/fresko.jpeg';
import img9 from '../../img/melba.jpeg';
import img10 from '../../img/sungarden.png';
import img11 from '../../img/siofok-marcipan-cukraszda-kavezo7.jpg';
import img12 from '../../img/marci abc.webp';


const Partners = () => {
  return (
    <Container className='advantages-container'>
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
        <Col>
          <img src={img5} alt="Cafe Spirit" width="140px"/>
        </Col>
        <Col>
          <img src={img6} alt="Baloton Grill" width="140px"/>
        </Col>
        <Col>
          <img src={img7} alt="Tópart Café" width="140px"/>
        </Col>
        <Col>
          <img src={img8} alt="Fresko Bisztro" width="140px"/>
        </Col>
        <Col>
          <img src={img9} alt="Melba cukrászda" width="140px"/>
        </Col>
        <Col>
          <img src={img10} alt="Sungarden hotel" width="140px"/>
        </Col>
        <Col>
          <img src={img11} alt="Marcipán cukrászda" height="130px"/>
        </Col>
        <Col>
          <img src={img12} alt="Marcipán cukrászda" width="140px"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Partners;