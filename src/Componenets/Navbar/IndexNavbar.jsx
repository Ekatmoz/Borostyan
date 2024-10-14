import React from 'react';
// nodejs library that concatenates strings
import classnames from 'classnames';
import '../../assets/css/paper-kit.css';
import logo from '../../img/logo.png';

// reactstrap components
import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from 'reactstrap';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
        setNavbarColor('');
      } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames('fixed-top', navbarColor)} expand='lg'>
      <Container className='d-flex justify-content-between align-items-center'>
        <div className='navbar-translate'>
          <NavbarBrand href='/'>
            <img src={logo} alt='logo' target='_blank' width='auto' height='100' className='d-inline-block align-top' />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse className='justify-content-end' navbar isOpen={navbarCollapse}>
          <Nav navbar classname='mr-auto'>
            <NavItem>
              <NavLink>FŐOLDAL</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>TERMÉKEK</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>RÓLUNK</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>SZÁLLÍTÁS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>GALÉRIA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>TÁJÉKOZTATÓ</NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://www.facebook.com/CreativeTim?ref=creativetim'
                target='_blank'
                title='Like us on Facebook'
              >
                <i className='fab fa-facebook-square' />
                <p className='d-lg-none'>Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://www.github.com/CreativeTimOfficial/paper-kit-react?ref=creativetim'
                target='_blank'
                title='Star on GitHub'
              >
                <i className='fas fa-phone' />
                +36309935463
              </NavLink>
            </NavItem>
            <NavItem></NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
