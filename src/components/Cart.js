import React from "react";
import {Modal, Button, Row, Col} from "react-bootstrap";

const Cart = ({cart, show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.map(e=>{
            return(
                <Row key={e._id}>
                    <Col>
                        <b>{e.name}</b>
                            &nbsp;
                        <span>{e.price}</span>
                    </Col>
                    <Col>
                        <img height="80px" width="80px" src={e.url_img}/>
                    </Col>
                </Row>
            )
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
