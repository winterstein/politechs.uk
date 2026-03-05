import { Link, NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default function Header() {
  return (
    <Navbar className="site-header" expand="md" dark>
      <NavbarBrand tag={Link} to="/">
        <span className="brand-logo">PoliTechs</span>
        <span className="brand-tld">.uk</span>
      </NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/events" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Events
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/groups" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Related Groups
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
