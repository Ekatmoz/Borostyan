import './Hero.css'
import bottle from '../../img/bottle.png';
import { Button, Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <Container fluid>
        <Row className='d-flex justify-content-center'>
          <Col sm={6} className='header d-flex'>
            <div className='d-flex justify-content-center flex-column align-items-center'>
              <h1>Buborékok Mestere - Borostyán Szikvíz</h1>
              <p>Szeretettel neked</p>
              <div className='btn'>
              <Button className='btn-round' color='info' type='button' href='#products'>
              Termékek
            </Button>
            </div>
            </div>
            
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
