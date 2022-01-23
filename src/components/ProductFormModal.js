import React, {useEffect, useState} from "react";
import {Modal, Button, Form, Row, Col} from "react-bootstrap";


const objForm = {
    name: "",
    price: "",
    url_img: "",
    id: ""
  };


const ProductFormModal = ({show, handleClose, objProduct, updateProduct}) => {
    const [form, setForm] = useState(objForm);

    useEffect(()=>{
        setForm({id: objProduct._id, name: objProduct.name, price: objProduct.price, url_img: objProduct.url_img})
    }, [objProduct]);

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleUpdate = ()=>{
          updateProduct(form);
          handleClose();
      }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update info</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {/*******Fila 1*******/}
        <Row>
          {/*******Columna 1*******/}
          <Col>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter product name"
                value={form.name}
                onChange={handleForm}
                required
              />
            </Form.Group>
          </Col>
          {/*******Columna 2*******/}
          <Col>
            <Form.Group className="mb-3" controlId="productPrice">
              <Form.Label>Product price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                placeholder="Enter product price"
                value={form.price}
                onChange={handleForm}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        {/*******Fila 2*******/}
        <Row>
          <Form.Group className="mb-3" controlId="productImg">
            <Form.Label>Url Image</Form.Label>
            <Form.Control
              value={form.url_img}
              onChange={handleForm}
              name="url_img"
              type="text"
              placeholder="Enter url image"
              required
            />
          </Form.Group>
        </Row>

        <img src={form.url_img} height="200px" width="200px"/>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductFormModal;
