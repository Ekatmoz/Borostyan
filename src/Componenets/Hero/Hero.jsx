import React from 'react';
import './Hero.css';
import bottle from '../../img/bottle.png';
import { Button, Container, Row, Col } from 'reactstrap';


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <Container fluid>
        <Row className='d-flex justify-content-center'>
          <Col sm={6} className='d-flex justify-content-center flex-column align-items-center'>
            <div className='title-brand' >
              <h1>Buborékok mestere - Borostyán Szikvíz</h1>
              <div className='fog-low'>
                <img alt='...' src={require('../../img/fog-low.png')} />
              </div>
            </div>
            <Button className='btn-round mr-1' color='info' type='button'>
              Termékek
            </Button>
            <div></div>
          </Col>
          <Col sm={4}>
            <img src={bottle} alt='bottle' width='450px' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
