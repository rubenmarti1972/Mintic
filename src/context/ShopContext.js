import { createContext, useState } from "react";

const ShopContext = createContext();

const ShopProvider = ({children})=>{

    const [cart, setCart] = useState([]);

    const handleCart = (product)=>{
        setCart([...cart, product]);
        /*let array = cart;
        array.push(product);
        setCart(array);
        */
    }

    const data = {handleCart, cart};

    return <ShopContext.Provider value={data}>{children}</ShopContext.Provider>
}

export {ShopProvider};
export default ShopContext;