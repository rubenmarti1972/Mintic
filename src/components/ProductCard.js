import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProductContext from "../context/ProductContext";
import ProductFormModal from "./ProductFormModal";

const ProductCard = ({ objProduct, edit, handleCart }) => {
  const { updateProduct, handleDelete } = useContext(ProductContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCart = ()=>{
    handleCart(objProduct);
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={objProduct.url_img} />
        <Card.Body>
          <Card.Title>{objProduct.name}</Card.Title>
          <Card.Text>{objProduct.price}</Card.Text>
          {edit ? (
            <>
              <Button variant="warning" onClick={handleShow}>
                Edit
              </Button>
              &nbsp;
              <Button
                variant="danger"
                onClick={() => handleDelete(objProduct._id)}
              >
                Delete
              </Button>
            </>
          )
          :
          <Button variant="success" onClick={handleAddCart}>Add cart</Button>
        }

        </Card.Body>
      </Card>
      {/********Modal*******/}
      <ProductFormModal
        show={show}
        handleClose={handleClose}
        objProduct={objProduct}
        updateProduct={updateProduct}
      />
    </>
  );
};

export default ProductCard;
