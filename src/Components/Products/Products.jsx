import { Container, CardGroup, Card, CardImg, CardBody, Row } from 'reactstrap';
import ballon from '../../img/ballon.jpg';
import flacon from '../../img/Flacon.png';
import flacon2 from '../../img/Flacon1l.png';
import './Products.css';
import theme_pattern from '../../img/pattern.png';

const Products = () => {
  return (
    <Container id='products'>
      <Row className='container text-center'>
        <div className='pattern'>
          <img src={theme_pattern} alt='pattern' style={{ width: '70px' }} />
          <h2 className='title '> Termékek</h2>
        </div>
        <h5 className='description text-center mb-4'>Új vásárlók esetén betéti díjat számolunk fel</h5>
      </Row>
      <CardGroup>
        <Card className='card mx-2 mb-4' style={{ borderRadius: '10px', border: '#0061a4' }}>
          <CardImg alt='Card image cap' src={ballon} top width='100%' />
          <CardBody className='card-body'>
            <h6 className='card-category'>2000 Ft</h6>
            <p className='description'> 25l Rozsdamentes ballon töltése</p>
          </CardBody>
        </Card>
        <Card className='card mx-2 mb-4' style={{ borderRadius: '10px', border: '#0061a4' }}>
          <CardImg alt='Card image cap' src={flacon} top width='100%' />
          <CardBody className='card-body'>
            <h6 className='card-category'>170 Ft</h6>
            <p className='description'> 2l flakon töltése </p>
          </CardBody>
        </Card>
        <Card className='mx-2 mb-4' style={{ borderRadius: '10px', border: '#0061a4' }}>
          <CardImg alt='Card image cap' src={flacon} top width='100%' />
          <CardBody>
            <h6 className='card-category'>140 Ft</h6>
            <p className='description'>1,5l flakon töltése </p>
          </CardBody>
        </Card>
        <Card className='mx-2 mb-4' style={{ borderRadius: '10px', border: '#0061a4' }}>
          <CardImg alt='Card image cap' src={flacon2} top width='100%' />
          <CardBody>
            <h6 className='card-category'>120 Ft</h6>
            <p className='description'>1l flakon töltése </p>
          </CardBody>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Products;
