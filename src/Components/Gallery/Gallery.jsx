import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row,
  Col,
  Container,
} from 'reactstrap';
import img1 from '../../img/gallery1.jpg';
import img2 from '../../img/aboutUs.jpg';
import img3 from '../../img/gallery3.jpg';
import img4 from '../../img/aboutUs.jpg';
import img5 from '../../img/gallery2.jpg';
import './Gallery.css'; // Import custom CSS for advanced styling

// Example image data
const items = [
  { src: img1, altText: 'Image 1' },
  { src: img2, altText: 'Image 2' },
  { src: img3, altText: 'Image 3' },
  { src: img4, altText: 'Image 4' },
  { src: img5, altText: 'Image 5' },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Group images into sets of three per slide
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === groupedItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? groupedItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = groupedItems.map((group, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
      className="carousel-fade" // Optional fade effect
    >
      <Row>
        {group.map((item, idx) => (
          <Col key={idx} md="4">
            <img src={item.src} alt={item.altText} className="d-block w-100 gallery-image"/>
          </Col>
        ))}
      </Row>
    </CarouselItem>
  ));

  return (
    <div>
      <Container>
        <h2 className='title' id='gallery'>Galéria</h2>
      </Container>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={3000} // Auto-slide every 3 seconds
      >
        <CarouselIndicators
          items={Array(groupedItems.length).fill(0).map((_, i) => ({ id: i }))}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default Gallery;
