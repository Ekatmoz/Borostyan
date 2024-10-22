import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Advantages.css';

const Advantages = () => {
  return (
    <Container className='advantages-container'>
      <Row className='text-center mb-4'>
        <Col>
          <h2 className='title'>Miért jó a szikvíz </h2>
          <h5 className='title'>a PET palackos buborékos vizek helyett?</h5>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg={2} md={4} className='column'>
          <i className='fa-solid fa-people-carry-box custom-icon mb-3'></i>
          <p className='description'>A palack a tiéd lesz, de cserélheted is</p>
        </Col>
        <Col xs lg={2} md={4} className='column'>
          <i className='fa-regular fa-calendar-days custom-icon mb-3'></i>
          <p className='description'>A szódás újratölthető flakonokat évekig használjuk</p>
        </Col>
        <Col xs lg={2} md={4} className='column'>
          <i className='fa-solid fa-recycle custom-icon mb-3'></i>
          <p className='description'>A forgalomból kivonat palackok újrahasznosításra kerülnek</p>
        </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col xs lg={2} md={6} className='column mb-4'>
          <i className='fa-solid fa-glass-water-droplet custom-icon mb-3'></i>
          <p className='description'>A szikvíz fogyasztása egészséges, szűrt ivóvízből készül</p>
        </Col>
        <Col xs lg={2} md={6} className='column mb-4'>
          <i className='fa-solid fa-store custom-icon mb-3'></i>
          <p className='description'>Hagyományos magyar termék, vásárlásával a helyi ipart támogatod</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Advantages;
