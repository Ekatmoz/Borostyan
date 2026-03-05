import { memo } from 'react';
import './Hero.css';
import bottle from '../../img/bottle.png';
import { Button, Container, Row, Col } from 'reactstrap';

const BOTTLE_W = 450;
const BOTTLE_H = Math.round((3911 / 2480) * BOTTLE_W);

const Hero = () => {
  return (
    <section className='hero' aria-label='Hero'>
      <Container fluid>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={6} className='header'>
            <div className='hero__content text-center'>
              <h1>Buborékok Mestere - Borostyán Szikvíz</h1>
              <p>Szeretettel neked</p>
              <div className='hero__cta'>
                <Button className='btn-round' color='info' type='button' href='#products'>
                  Termékek
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className='hero__imageCol'>
            <img
              className='hero__image'
              src={bottle}
              alt='Borostyán Szikvíz palack'
              width={BOTTLE_W}
              height={BOTTLE_H}
              decoding='async'
              fetchPriority='high'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default memo(Hero);
