import React from "react";
import classnames from "classnames";
import './Navbar.css';
import logo from '../../img/logo.png';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
        setNavbarColor("");
      } else {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []); // Empty dependency array to avoid repeated event listener additions

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="navbar-translate">
          <NavbarBrand href="/">
            <img
              src={logo}
              alt="Borostyán Szikvíz Siófok logo"
              width="auto"
              height="100"
              className="d-inline-block align-top"
            />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", { toggled: navbarCollapse })}
            onClick={toggleNavbarCollapse}
            aria-label="Toggle navigation" // Added for better accessibility
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>

        <Collapse isOpen={navbarCollapse} navbar className="justify-content-end">
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink href="#home">FŐOLDAL</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#products">TERMÉKEK</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">RÓLUNK</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#delivery">SZÁLLÍTÁS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#gallery">GALÉRIA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#info">TÁJÉKOZTATÓ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.facebook.com/p/Borosty%C3%A1n-Szikv%C3%ADz-Si%C3%B3fok-100054409062821/?locale=fo_FO&_rdr"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="tel:+36309935463">
                <i className="fas fa-phone" />
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
