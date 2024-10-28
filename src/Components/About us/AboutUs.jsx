import { Container, Row, Col } from 'reactstrap';
import about from '../../img/rolunk.jpeg';
import './AboutUs.css';
import theme_pattern from '../../img/pattern.png';

const AboutUs = () => {
  return (
    <div className='background' id='about'>
      <Container>
        <Row>
          <Col xs={12} md={7} className='text'>
            <div className='title-container'>
              <img src={theme_pattern} alt='pattern' style={{ width: '70px' }} />
              <h3 className='title' style={{ color: '#fff', marginTop: '0px' }}>
                Rólunk
              </h3>
            </div>
            <p className='description' style={{ color: '#fff' }}>
              2020-ban épült üzemünk Siófokon a Borostyán utca 36. szám alatt. Teljesen új, korszerű gépekkel állítjuk
              elő a szikvizet, melyet hotelekbe, vendéglátó egységekbe és a környék lakosságágnak egyaránt szállítunk.
              Kis családi vállalkozás, melyet tiszta szívből, szeretetből és teljes erőbedobásból működtetünk ketten a
              feleségemmel. 2023-ban vásároltuk meg az új szikvíz gyártó berendezésünket, és azóta is folyamatban vannak
              további fejlesztések.
            </p>
            <p className='description' style={{ color: '#fff' }}>
              Nekünk fontos, hogy környezettudatosan éljünk! Az újratölthető palackoknak köszönhetően minden
              kiszerelés környezetbarát, nem szennyezzük a természetet a sok eldobott csomagolással, nem terheljük
              pénztárcánkat a szemétdíjjal, energiánkat a szelektív gyűjtéssel és a visszaváltás gyötrelmeivel!
            </p>
          </Col>
          <Col xs={12} md={5} className='text'>
            {/* <img src={about_2} alt="Our factory" className="img-fluid custom-rounded mb-3" style={{ maxWidth: '80%', height: 'auto' }}  /> */}
            <img
              src={about}
              alt='Our office'
              className='img-fluid custom-rounded'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
