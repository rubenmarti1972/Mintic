import React, { useContext, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import "./Components.css";

const Register = () => {
  //Crear contexto de tipo AuthContext
  const {handleRegister} = useContext(AuthContext);

  const objForm = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(objForm);

  const handleForm = (e) => {
    let array = { ...form, [e.target.name]: e.target.value };
    setForm(array);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Llamar la función del contexto
    handleRegister(form);
    setForm(objForm);
  };

  return (
    <div className="register">
      <h3>Register</h3>
      {/**Formulario de registro**/}
      <Form onSubmit={handleSubmit}>
        <Row>
          {/**Nombre***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                value={form.name}
                onChange={handleForm}
                name="name"
                id="name"
                type="text"
                placeholder="Enter name"
                required
              />
            </Form.Group>
          </Col>
          {/**Apellido***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="lastname">Lastname</Form.Label>
              <Form.Control
                value={form.lastname}
                onChange={handleForm}
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Enter lastname"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {/**Email***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleForm}
                name="email"
                id="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
          </Col>
          {/**Password***/}
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                value={form.password}
                onChange={handleForm}
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        {/**Botón de registro***/}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
