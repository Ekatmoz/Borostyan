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
  { src: piviz3, label: '1l Pi víz', price: '150 Ft', isNew: true },
  { src: piviz2, label: '5l Pi víz', price: '500 Ft', isNew: true },
  { src: piviz1, label: '19l Pi víz', price: '1900 Ft', isNew: true },
  { src: ballon, label: '25l Rozsdamentes ballon töltése', price: '2500 Ft' },
  { src: flacon, label: '2l flakon töltése', price: '200 Ft' },
  { src: flacon, label: '1,5l flakon töltése', price: '170 Ft' },
  { src: flacon2, label: '1l flakon töltése', price: '150 Ft' },
];

const Products = () => {
  // #region agent log
  fetch('http://127.0.0.1:7619/ingest/2456efea-d0b5-47fc-921b-7dc190e4e528',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'b26371'},body:JSON.stringify({sessionId:'b26371',runId:'pre-fix',hypothesisId:'A-E',location:'Products.jsx:render',message:'products rendered',data:{href:typeof window!=='undefined'?window.location.href:null,prices:products.map((product)=>product.price),labels:products.map((product)=>product.label)},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
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
