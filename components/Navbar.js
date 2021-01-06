import styles from "../styles/Navbar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../firebase/client";
import { useRouter } from "next/router";

export default function Header() {
  const route = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  const handleClickHome = (e) => {
    e.preventDefault();
    route.replace("/home");
  };

  const handleClickTrabajo = (e) => {
    e.preventDefault();
    route.replace("/controlTrabajo");
  };
  const handleClickObras = (e) => {
    e.preventDefault();
    route.replace("/obras");
  };
  const handleClickTrabajadores = (e) => {
    e.preventDefault();
    route.replace("/trabajadores");
  };

  return (
    <Navbar bg="light" expand="">
      <Navbar.Brand href="#home"> Tejados Cofam</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="" onClick={handleClickHome}>
            Inicio
          </Nav.Link>
          <Nav.Link href="" onClick={handleClickTrabajo}>
            Control de Trabajo
          </Nav.Link>
          <Nav.Link href="" onClick={handleClickObras}>
            Obras Realizadas
          </Nav.Link>
          <Nav.Link href="" onClick={handleClickTrabajadores}>
            Trabajadores
          </Nav.Link>
          <NavDropdown.Divider />
          <Nav.Link className={styles.cerrar} onClick={handleClick}>
            Cerrar Sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
