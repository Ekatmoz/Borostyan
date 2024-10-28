import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import about from '../../img/about_img.jpeg';
import './Information.css';
import theme_pattern from '../../img/pattern.png';

const Information = () => {
  return (
    <div id='info'>
      <Container className='info-container'>
        <Row>
          <Col xs={12} md={5} >
            <img
              src={about}
              alt='Our office'
              className='img-fluid custom-rounded'
            />
          </Col>
          <Col xs={12} md={7} className='info'>
          <div className="title-container">
            <img src={theme_pattern} alt='pattern' style={{ width: '70px' }} />
            <h3 className='title'>Tájékoztató</h3>
            </div>
            <p className='description'>
              A szikvíz olyan, az egészségügyi követelményeknek megfelelő, szén-dioxiddal dúsított víz, amely nyomás
              alatti szifonfejes műanyag palackban vagy rozsdamentes fémből készült 25 literes speciális csapteleppel
              ellátott szikvízpalackban (szikvízballonban) kerül forgalomba. Magyar találmány, amely hazai tisztított
              víz és Magyarországon bányászott szén-dioxid felhasználásával készül. Szikvizet csak a szikvízüzem
              nyitásának engedélyezésekor előírt, az egészségügyi hatóság által engedélyezett minőségű vízből és szén-
              dioxidból, az élelmiszer-ellenőrző hatóság és a munkavédelmi hatóság által vizsgált, és engedélyezett
              berendezésekkel és technológiával szabad előállítani, melyeknek üzemünk teljes mértékben megfelel. A HACCP
              alapelveken alapuló eljárások betartásával működünk.
            </p>
            <p className='description'>
              Nekünk fontos, hogy környezettudatosan éljünk! Az újratölthető palackoknak köszönhetően minden
              kiszerelés környezetbarát, nem szennyezzük a természetet a sok eldobott csomagolással, nem terheljük
              pénztárcánkat a szemétdíjjal, energiánkat a szelektív gyűjtéssel és a visszaváltás gyötrelmeivel.....
            </p>
            <Link to="/info">
              <Button className='btn-round' color='info' type='button'>
                Tovább olvasom...
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Information;
