import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Description.css';
import theme_pattern from '../../img/pattern.png';

const Description = () => {
  return (
    <Container fluid className='py-4' id='info'>
      <Row className='text-center mb-4 justify-content-md-center'>
        <Col xs={12} md={7} className='info'>
          <div className='title-container'>
            <img src={theme_pattern} alt='pattern' style={{ width: '70px' }} />
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

      {/* Szikviz and Pi viz */}
      <Row className='g-4'>
        <Col md={6}>
          <Card className='h-100 shadow-sm overflow-hidden' style={{ borderRadius: '10px', border: '#0061a4' }}>
            <Row className='g-0'>
              <Col sm={4} className='bg-repeat-0 desc'></Col>
              <Col sm={8}>
                <Card.Body>
                  <Card.Title>Szikviz tájékoztató</Card.Title>
                  <Card.Text>
                    A szikvíz olyan, az egészségügyi követelményeknek megfelelő, szén-dioxiddal dúsított víz, amely
                    nyomás alatti szifonfejes műanyag palackban vagy rozsdamentes fémből készült 25 literes speciális
                    csapteleppel ellátott szikvízpalackban (szikvízballonban) kerül forgalomba. Magyar találmány, amely
                    hazai tisztított víz és Magyarországon bányászott szén-dioxid felhasználásával készül...
                  </Card.Text>
                  <Link to='/szikviz'>
                    <Button className='btn-round shadow-primary' color='info' type='button'>
                      Tovább olvasom
                    </Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={6}>
          <Card className='h-100 shadow-sm overflow-hidden' style={{ borderRadius: '10px', border: '#0061a4' }}>
            <Row className='g-0'>
              <Col sm={4} className='bg-repeat-0 desc-1'></Col>
              <Col sm={8}>
                <Card.Body>
                  <Card.Title>Pi víz tájékoztató</Card.Title>
                  <Card.Text>
                    Mi a PI víz? A víz az élet. Tiszta folyadék nélkül nem léteznénk. Ennek ellenére a mai nyugati
                    világban kihasználjuk a vizeinket, mérgezzük azt. Ám a természet még mindig képes arra, hogy életben
                    tartson minket, sőt, gyógyítson. A 60-as években a japán Nagoyai Egyetem kutatója, Shoi Yamashita
                    professzor felfedezte, hogy az "élővíz", mely a növényekben található, biológiai és fizikai
                    szempontból jelentősen különbözik az általánosan felhasznált ivó- és forrásvizektől...
                  </Card.Text>
                  <Link to='/piviz'>
                    <Button className='btn shadow-primary' type='button'>
                      Tovább olvasom
                    </Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
