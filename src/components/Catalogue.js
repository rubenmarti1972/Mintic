
import React, {useContext, useState} from 'react'
import ProductContext from "../context/ProductContext";
import ProductCard from './ProductCard';
import "./Components.css";
import ShopContext from '../context/ShopContext';
import {Button} from "react-bootstrap";
import Cart from './Cart';

const Catalogue = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

    const {catalogue} = useContext(ProductContext);
    const {handleCart, cart} = useContext(ShopContext);

    const viewCart = ()=>{
        setShow(true);
    }

    return (
        <div>
            <h2>Catalogue</h2>
            <Button onClick={viewCart}>Cart</Button>
            <div className="contCard">
                {catalogue.map(e=><ProductCard key={e._id} edit={false} objProduct={e} handleCart={handleCart}/>)}
            </div>
            {/******Modal****/}
            <Cart cart={cart} show={show} handleClose={handleClose}/>
        </div>
    )
}

export default Catalogue;
