import React from 'react'
import { Route, Routes } from 'react-router';
import Catalogue from '../components/Catalogue';
import Product from '../components/Product';
import Dashboard from '../pages/private/Dashboard';

const AuthRouter = () => {
    return (
       <Routes>
           <Route path="/" element={<Dashboard/>}>
               <Route index element={<Product/>}/>
               <Route path="catalogue" element={<Catalogue/>}/>
           </Route>
       </Routes>
    )
}

export default AuthRouter;
