import { Container, Card, CardImg, CardBody, Row, Col } from 'reactstrap';
import ballon from '../../img/ballon.jpg';
import flacon from '../../img/Flacon.png';
import flacon2 from '../../img/Flacon1l.png';
import piviz1 from '../../img/piViz19.webp';
import piviz2 from '../../img/piViz5.webp';
import piviz3 from '../../img/piViz1.webp';
import './Products.css';
import theme_pattern from '../../img/pattern.png';

const products = [
  { src: piviz3, label: '1l Pi víz', price: '100 Ft', isNew: true },
  { src: piviz2, label: '5l Pi víz', price: '500 Ft', isNew: true },
  { src: piviz1, label: '19l Pi víz', price: '1900 Ft', isNew: true },
  { src: ballon, label: '25l Rozsdamentes ballon töltése', price: '2500 Ft' },
  { src: flacon, label: '2l flakon töltése', price: '200 Ft' },
  { src: flacon, label: '1,5l flakon töltése', price: '170 Ft' },
  { src: flacon2, label: '1l flakon töltése', price: '150 Ft' },
];

const Products = () => {
  return (
    <Container id='products'>
      <Row className='text-center mb-4'>
        <Col>
          <div className='pattern'>
            <img src={theme_pattern} alt='' style={{ width: '70px' }} />
            <h2 className='title'>Termékek</h2>
          </div>
          <h5 className='description text-center mb-4'>
            Örömmel mutatjuk be új termékünket, a Pí Víz-t, amely a tisztaságot és a kiváló ízt képviseli!
          </h5>
          <p className='description text-center mb-4'>Új vásárlók esetén betéti díjat számolunk fel</p>
        </Col>
      </Row>

      <Row className='g-4'>
        {products.map((product) => (
          <Col xs='6' lg='3' key={product.label}>
            <Card className='h-100 product-card position-relative'>
              {product.isNew && <span className='badge bg-danger product-badge'>Új</span>}
              <CardImg alt={product.label} src={product.src} top width='100%' loading='lazy' decoding='async' />
              <CardBody>
                <h6 className='card-category'>{product.price}</h6>
                <p className='description'>{product.label}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
