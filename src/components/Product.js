import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import "./Components.css";

const Product = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>Product</h2>
      <ProductForm />
      <br />
      <hr />
      <br />
      <div className="contCard">
        {products.map((e) => (
          <ProductCard className="card" key={e._id} objProduct={e} edit={true} />
        ))}
      </div>
    </div>
  );
};

export default Product;
