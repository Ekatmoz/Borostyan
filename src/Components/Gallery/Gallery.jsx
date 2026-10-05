import { Container, Row, Col } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../img/gallery1.jpg';
import img2 from '../../img/gallery3.jpg';
import img3 from '../../img/aboutUs.webp';
import img4 from '../../img/gallery4.jpg';
import img5 from '../../img/gallery5.jpg';
import img6 from '../../img/about_img2.jpeg';
import img7 from '../../img/varosi.jpg';
import img8 from '../../img/inside.jpg';
import img9 from '../../img/gergo.jpg';
import './Gallery.css';
import theme_pattern from '../../img/pattern.png';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  return (
    <div className='gallery-component'>
      <Container fluid='md'>
        <Row className='text-center mb-4 justify-content-md-center'>
          <Col xs={12} md={7}>
            <img src={theme_pattern} alt='' style={{ width: '70px' }} />
            <h2 className='title text-center' id='gallery'>
              Galéria
            </h2>
            <p className='description'>
              Fedezze fel cégünk világát a galériánkban! Ismerje meg a természet tisztaságát, a gyártási folyamatunk
              innovációit és a termékeink iránti szenvedélyünket!
            </p>
          </Col>
        </Row>
      </Container>
      <Container className='container'>
        <Swiper
          effect='coverflow'
          grabCursor
          centeredSlides
          loop
          slidesPerView='auto'
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper_container'
        >
          {slides.map((src, index) => (
            <SwiperSlide key={src}>
              <img src={src} alt={`Galéria kép ${index + 1}`} loading='lazy' decoding='async' />
            </SwiperSlide>
          ))}
          <div className='slider-controler'>
            <div className='swiper-button-prev slider-arrow'>
              <i className='fa-solid fa-arrow-left'></i>
            </div>
            <div className='swiper-button-next slider-arrow'>
              <i className='fa-solid fa-arrow-right'></i>
            </div>
            <div className='swiper-pagination'></div>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Gallery;
