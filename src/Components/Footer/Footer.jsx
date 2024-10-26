import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'reactstrap';
// import footer_logo from '../../img/logo.png';

const Footer = () => {
  return (
    <footer className='footer text-light py-4'>
      <Container>
        {/* <Col md="6">
        <Row className="mb-4 text-center">
          <Col>
            <img src={footer_logo} alt="Company Logo" width={150} className="img-fluid" />
          </Col>
        </Row> 
        </Col> */}
        <Row className='className="justify-content-md-center' >
          <Col xs={6} md={4}>
            <h3>Elérhetőségek</h3>
            <p>
              <strong>Cím:</strong> 8600 Siófok, Borostyán utca 36.
            </p>
            <p>
              <strong>Telefonszám:</strong> 06-84/317-247
              <br />
              06-30/993-5463
            </p>
            </Col>
            <Col xs={6} md={3}>
            <p>
              <h3>Nyitvatartás:</h3>
              <br />
              H-P: 8:00 - 17:00
              <br />
              Szombat: 8:00 - 12:00
              <br />
              Vasárnap és ünnepnapokon zárva
            </p>
          </Col>
          <Col xs={6} md={5}>
            <h5 className='contact'>Our Location</h5>
            <div className='map-container'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.6196373875114!2d18.02447817601398!3d46.89053097113305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769bf5652e91e23%3A0x27028ee699896bd4!2zU2nDs2ZvaywgQm9yb3N0ecOhbiB1dGNhIDM2LCA4NjAw!5e0!3m2!1sen!2shu!4v1729439760038!5m2!1sen!2shu'
              className='rounded-map'
              title='Borostyan'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
            </div>
          </Col>
        </Row>
        <hr className='bg-light' />
        <Row>
          <Col md='12' className='text-center'>
            <p className='mb-0'>© 2024 
            Borostyán Szikvíz. All rights reserved. Made by Sió Creative I.T.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
