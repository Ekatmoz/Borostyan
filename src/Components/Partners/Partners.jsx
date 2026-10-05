import { Col, Container, Row } from 'reactstrap';
import img1 from '../../img/cafe-frei.webp';
import img2 from '../../img/azur.webp';
import img3 from '../../img/Logo.jpg';
import img4 from '../../img/egycsipenapolylogo.webp';
import img5 from '../../img/spirit.png';
import img6 from '../../img/balaton_grill.webp';
import img8 from '../../img/fresko.jpeg';
import img9 from '../../img/melba.jpeg';
import img10 from '../../img/balaland.jpeg';
import img11 from '../../img/siofok-marcipan-cukraszda-kavezo7.jpg';
import img12 from '../../img/marci abc.webp';

const partners = [
  { src: img1, alt: 'Frei Cafe' },
  { src: img2, alt: 'Hotel Azur' },
  { src: img3, alt: 'Sushi Bar' },
  { src: img4, alt: 'Egy csipet nápoly' },
  { src: img5, alt: 'Cafe Spirit' },
  { src: img6, alt: 'Balaton Grill' },
  { src: img8, alt: 'Fresko Bisztro' },
  { src: img9, alt: 'Melba cukrászda' },
  { src: img10, alt: 'Sungarden hotel' },
  { src: img11, alt: 'Marcipán cukrászda', height: 130 },
  { src: img12, alt: 'Marci ABC' },
];

const PartnerRow = ({ items }) => (
  <Row>
    {items.map((partner) => (
      <Col key={partner.alt}>
        <img
          src={partner.src}
          alt={partner.alt}
          width={140}
          height={partner.height}
          loading='lazy'
          decoding='async'
        />
      </Col>
    ))}
  </Row>
);

const Partners = () => {
  return (
    <Container className='advantages-container'>
      <Row>
        <Col>
          <h1 className='title'>Partnereink</h1>
        </Col>
      </Row>
      <PartnerRow items={partners.slice(0, 6)} />
      <PartnerRow items={partners.slice(6)} />
    </Container>
  );
};

export default Partners;
