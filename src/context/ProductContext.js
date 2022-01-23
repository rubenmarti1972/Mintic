import { createContext, useEffect, useState } from "react";
import { apiProduct, apiProductuser } from "./Api";

const ProductContext = createContext();

const ProductProvider = ({children})=>{

    const [products, setProducts] = useState([]);
    const [catalogue, setCatalogue] = useState([]);

    useEffect(()=>{
        getProducts();
        getAllProducts();
    }, []);

    const handleCreate = async (objProduct)=>{
        let token = localStorage.getItem('token');
        let resp = await fetch(apiProduct, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });

        if(resp.status === 201){
            getProducts();
            getAllProducts();
        }
        return resp;
    }

    const getProducts = async()=>{
        //Capturar el token
        let token = localStorage.getItem('token');
        //Realizar petición
        let resp = await fetch(apiProductuser, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if(resp.status === 200){
            let json = await resp.json();
            setProducts(json);
        }

        return resp;
    }

    const updateProduct = async (objProduct)=>{
        //Capturar el token
        let token = localStorage.getItem('token');
        //Realizar petición
        let resp = await fetch(apiProduct, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objProduct)
        });

        if(resp.status === 200){
            getProducts();
            getAllProducts();
        }

        return resp.status;
    }

    const handleDelete = async(id)=>{
        let token = localStorage.getItem('token');
        let resp = await fetch(apiProduct, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({id: id})
        });

        if(resp.status === 200){
            getProducts();
        }

        return resp.status;
    }

    const getAllProducts = ()=>{
        fetch(apiProduct).then(async(resp)=>{
            let json = await resp.json();
            setCatalogue(json);
        }).catch(error=>{
            console.error(error);
        })
    }

    const data = {handleCreate, getProducts, products, updateProduct, handleDelete, catalogue}

    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}

export {ProductProvider};
export default ProductContext;