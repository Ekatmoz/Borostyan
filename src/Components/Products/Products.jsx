import { Container, Card, CardImg, CardBody, Row, Col } from 'reactstrap';
import ballon from '../../img/ballon.jpg';
import flacon from '../../img/Flacon.png';
import flacon2 from '../../img/Flacon1l.png';
import piviz1 from '../../img/piViz19.png';
import './Products.css';
import theme_pattern from '../../img/pattern.png';

const Products = () => {
  return (
    <Container id='products'>
      <Row className='text-center mb-4'>
        <div className='pattern'>
          <img src={theme_pattern} alt='pattern' style={{ width: '70px' }} />
          <h2 className='title'>Termékek</h2>
        </div>
        <h5 className='description text-center mb-4'>Új vásárlók esetén betéti díjat számolunk fel</h5>
      </Row>
      
      <Row className="g-4">
        <Col lg="3" md="6">
          <Card className='mx-2 mb-4' style={{ borderRadius: '10px', border: '#0061a4' }}>
            <CardImg alt='Card image cap' src={ballon} top width='100%' />
            <CardBody>
              <h6 className='card-category'>2000 Ft</h6>
              <p className='description'>25l Rozsdamentes ballon töltése</p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card className='mx-2 mb-4' style={{ borderRadius: '10px', border: '#0061a4' }}>
            <CardImg alt='Card image cap' src={flacon} top width='100%' />
            <CardBody>
              <h6 className='card-category'>170 Ft</h6>
              <p className='description'>2l flakon töltése</p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card className='mx-2 mb-4' style={{ borderRadius: '10px', border: '#0061a4' }}>
            <CardImg alt='Card image cap' src={flacon} top width='100%' />
            <CardBody>
              <h6 className='card-category'>140 Ft</h6>
              <p className='description'>1,5l flakon töltése</p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card className='mx-2 mb-4' style={{ borderRadius: '10px', border: '#0061a4' }}>
            <CardImg alt='Card image cap' src={flacon2} top width='100%' />
            <CardBody>
              <h6 className='card-category'>120 Ft</h6>
              <p className='description'>1l flakon töltése</p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card className='mx-2 mb-4 position-relative' style={{ borderRadius: '10px', border: '#0061a4' }}>
          <span
                className='badge bg-danger position-absolute top-0 end-0 m-2 p-2 rounded-pill'
                style={{ fontSize: '1rem' }}
              >
                Új
              </span>
            <CardImg alt='Card image cap' src={piviz1} top width='100%' />
            <CardBody className="position-relative">
              
              <h6 className='card-category'>1500 Ft</h6>
              <p className='description'>19l Pi víz</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
