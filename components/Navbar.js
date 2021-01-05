import styles from "../styles/Navbar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../firebase/client";

export default function Header() {
  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"> Tejados Cofam</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="">Inicio</Nav.Link>
          <Nav.Link href="">Control de Trabajo</Nav.Link>
          <Nav.Link href="">Obras Realizadas</Nav.Link>
          <Nav.Link  href="">Trabajadores</Nav.Link>
          <NavDropdown.Divider />
          <Nav.Link className={styles.cerrar} onClick={handleClick}>Cerrar Sesión</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
