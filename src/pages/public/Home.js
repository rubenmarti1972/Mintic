import React from "react";
import Catalogue from "../../components/Catalogue";
import { ProductProvider } from "../../context/ProductContext";
import { Carousel, Button } from "react-bootstrap";
import slider_1 from "../../assets/slider_1.jpeg";
import slider_2 from "../../assets/slider_2.jpg";
import { useNavigate } from "react-router";
import { ShopProvider } from "../../context/ShopContext";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  return (
    <div>
      {/*********Carusel de imágenes**********/}
      <Carousel>
        <Carousel.Item>
          <img
            height="400px"
            width="100vm"
            className="d-block w-100"
            src={slider_1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="success" onClick={handleLogin}>
              Login
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="400px"
            width="100vm"
            className="d-block w-100"
            src={slider_2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant="success" onClick={handleLogin}>
              Login
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*********Llamar el catalogo con su respectivo contexto*****/}
      <ProductProvider>
        <ShopProvider>
          <Catalogue />
        </ShopProvider>
      </ProductProvider>
    </div>
  );
};

export default Home;
