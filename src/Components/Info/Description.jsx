import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Description.css';
import theme_pattern from '../../img/pattern.png';

const Description = () => {
  return (
    <Container fluid className='py-4' id='info'>
      <Row className='text-center mb-4 justify-content-md-center'>
        <Col xs={12} md={7} className='info'>
          <div className='title-container'>
            <img src={theme_pattern} alt='' style={{ width: '70px' }} />
            <h3 className='title'>Tájékoztató</h3>
          </div>
          <p className='description text-center mb-4'>
            Miközben mélyen gyökerezünk a magyar hagyományokban, a modern technológia és a globális trendek révén
            innovatív termékeket kínálunk a háztartások számára az egész országban. Akár a buborékos szikvízünket
            élvezi, akár a Pi vízünk jótékony hatásait tapasztalja meg, elkötelezettek vagyunk amellett, hogy javítsuk
            hidratációs élményét. A HACCP alapelveken alapuló eljárások betartásával működünk.
          </p>
        </Col>
      </Row>

      <Row className='g-4'>
        <Col md={6}>
          <Card className='h-100 shadow-sm overflow-hidden info-card'>
            <Row className='g-0'>
              <Col sm={4} className='desc'></Col>
              <Col sm={8}>
                <CardBody>
                  <CardTitle tag='h5'>Szikviz tájékoztató</CardTitle>
                  <CardText>
                    A szikvíz olyan, az egészségügyi követelményeknek megfelelő, szén-dioxiddal dúsított víz, amely
                    nyomás alatti szifonfejes műanyag palackban vagy rozsdamentes fémből készült 25 literes speciális
                    csapteleppel ellátott szikvízpalackban (szikvízballonban) kerül forgalomba. Magyar találmány, amely
                    hazai tisztított víz és Magyarországon bányászott szén-dioxid felhasználásával készül...
                  </CardText>
                  <Button tag={Link} to='/szikviz' className='btn-round shadow-primary' color='info'>
                    Tovább olvasom
                  </Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={6}>
          <Card className='h-100 shadow-sm overflow-hidden info-card'>
            <Row className='g-0'>
              <Col sm={4} className='desc-1'></Col>
              <Col sm={8}>
                <CardBody>
                  <CardTitle tag='h5'>Pi víz tájékoztató</CardTitle>
                  <CardText>
                    Mi a PI víz? A víz az élet. Tiszta folyadék nélkül nem léteznénk. Ennek ellenére a mai nyugati
                    világban kihasználjuk a vizeinket, mérgezzük azt. Ám a természet még mindig képes arra, hogy életben
                    tartson minket, sőt, gyógyítson. A 60-as években a japán Nagoyai Egyetem kutatója, Shoi Yamashita
                    professzor felfedezte, hogy az "élővíz", mely a növényekben található, biológiai és fizikai
                    szempontból jelentősen különbözik az általánosan felhasznált ivó- és forrásvizektől...
                  </CardText>
                  <Button tag={Link} to='/piviz' className='btn shadow-primary' color='info'>
                    Tovább olvasom
                  </Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
