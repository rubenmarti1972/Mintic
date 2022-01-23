import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { ProductProvider } from "../../context/ProductContext";
import logo from "../../logo.svg";

const Dashboard = () => {

  const {handleLogout} = useContext(AuthContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React web 19
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="catalogue" href="#catalogue">
              Catalogue
            </Nav.Link>
            <Nav.Link href="" onClick={handleLogout}>
              Log out
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/**Aquí se mostrarán los componentes al navegar por el navbar */}
      <ProductProvider>
        <Outlet />
      </ProductProvider>
    </>
  );
};

export default Dashboard;
