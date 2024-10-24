import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Delivery.css';
import theme_pattern from '../../img/pattern.png';

const Delivery = () => {
  return (
    <div className='delivery-container'>
      <Container>
        <Row className='text-center mb-4'>
          <Col>
            <div className='pattern'>
              <img src={theme_pattern} alt='pattern' width={50} />
              <h3 className='title' id='delivery'>
                Kiszállítási menetrend
              </h3>
            </div>
            {/* <i className="fa-solid fa-truck custom-icon mb-3"></i> */}
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
              <p>Balatonendréd-Zamárdi-Töreki</p>
            </Col>
            <Col xs='12' md='4' className='delivery-col no-border text-center'>
              <h4 className='card-title'>Szerda</h4>
              <p>Siófok-Szabadifürdő-Kiliti</p>
            </Col>
            <Col xs='12' md='4' className='delivery-col text-center'>
              <h4 className='card-title'>Csütörtök</h4>
              <p>nincs kiszállítás, de üzemünk nyitva van, töltetni lehet</p>
            </Col>
            <Col xs='12' md='4' className='delivery-col text-center'>
              <h4 className='card-title'>Péntek</h4>
              <p>Siófok-Kiliti</p>
            </Col>
            <Col xs='12' md='4' className='delivery-col no-border text-center'>
              <h4 className='card-title'>Szombat</h4>
              <p>Balatonendréd-Zamárdi-Töreki</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Delivery;
