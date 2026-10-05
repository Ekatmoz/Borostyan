import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../img/logo.png';
import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from 'reactstrap';
import { Link as ReactLink, useLocation } from 'react-router-dom';

const sectionLinks = [
  { to: '/', label: 'FŐOLDAL' },
  { to: '/#products', label: 'TERMÉKEK' },
  { to: '/#about', label: 'RÓLUNK' },
  { to: '/#delivery', label: 'SZÁLLÍTÁS' },
  { to: '/#gallery', label: 'GALÉRIA' },
  { to: '/#info', label: 'TÁJÉKOZTATÓ' },
];

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const location = useLocation();

  const navFontColorClass = location.pathname === '/' ? 'navbar-white' : 'navbar-blue';
  const navbarClassName = ['fixed-top', navbarColor, navFontColorClass].filter(Boolean).join(' ');

  const closeNavbar = () => {
    setNavbarCollapse(false);
    document.documentElement.classList.remove('nav-open');
  };

  const toggleNavbarCollapse = () => {
    setNavbarCollapse((open) => {
      document.documentElement.classList.toggle('nav-open', !open);
      return !open;
    });
  };

  useEffect(() => {
    let frame = 0;

    const updateNavbarColor = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrolled = document.documentElement.scrollTop > 299 || document.body.scrollTop > 299;
        setNavbarColor((current) => {
          const next = scrolled ? '' : 'navbar-transparent';
          return current === next ? current : next;
        });
      });
    };

    window.addEventListener('scroll', updateNavbarColor, { passive: true });
    updateNavbarColor();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateNavbarColor);
    };
  }, []);

  return (
    <Navbar className={navbarClassName} expand='lg'>
      <Container className='d-flex justify-content-between align-items-center'>
        <div className='navbar-translate'>
          <NavbarBrand tag={ReactLink} to='/' onClick={closeNavbar}>
            <img
              src={logo}
              alt='Borostyán Szikvíz Siófok logo'
              height='100'
              className='d-inline-block align-top'
            />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={`navbar-toggler${navbarCollapse ? ' toggled' : ''}`}
            onClick={toggleNavbarCollapse}
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>

        <Collapse isOpen={navbarCollapse} navbar className='justify-content-end'>
          <Nav navbar>
            {sectionLinks.map((link) => (
              <NavItem key={link.to}>
                <NavLink tag={ReactLink} to={link.to} onClick={closeNavbar}>
                  {link.label}
                </NavLink>
              </NavItem>
            ))}
            <NavItem>
              <NavLink
                href='https://www.facebook.com/p/Borosty%C3%A1n-Szikv%C3%ADz-Si%C3%B3fok-100054409062821/'
                target='_blank'
                rel='noopener noreferrer'
                title='Like us on Facebook'
                onClick={closeNavbar}
              >
                <i className='fab fa-facebook-square' />
                <p className='d-lg-none'>Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='tel:+36309935463' onClick={closeNavbar}>
                <i className='fas fa-phone' />
                +36 30 993 5463
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
