import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import theme_pattern from '../../img/pattern.png';
import './Delivery.css'

const Delivery = () => {
  return (
    <div className='delivery-container'>
      <Container>
        <Row className='text-center mb-4'>
          <Col>
            <img src={theme_pattern} alt='pattern' width={70} />
            <h3 className='title' id='delivery'>
              Kiszállítási menetrend
            </h3>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col xs='12' md='4' className='delivery-col text-center'>
              <h4 className='card-title'>Hétfő</h4>
              <p className='description'>Siófok-Széplak-Kiliti</p>
            </Col>
            <Col xs='12' md='4' className='delivery-col text-center'>
              <h4 className='card-title'>Kedd</h4>
              <p className='description'>Balatonendréd-Zamárdi-Töreki</p>
            </Col>
            <Col xs='12' md='4' className='delivery-col no-border text-center'>
              <h4 className='card-title'>Szerda</h4>
              <p className='description'>Siófok-Szabadifürdő-Kiliti</p>
            </Col>
            <Col xs='12' md='4' className='delivery-col text-center'>
              <h4 className='card-title'>Csütörtök</h4>
              <p className='description'>nincs kiszállítás, de üzemünk nyitva van, töltetni lehet</p>
            </Col>
            <Col xs='12' md='4' className='delivery-col text-center'>
              <h4 className='card-title'>Péntek</h4>
              <p className='description'>Siófok-Kiliti</p>
            </Col>
            <Col xs='12' md='4' className='delivery-col no-border text-center'>
              <h4 className='card-title'>Szombat</h4>
              <p className='description'>Balatonendréd-Zamárdi-Töreki</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Delivery;
