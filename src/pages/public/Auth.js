import React from 'react'
import Register from '../../components/Register';
import Login from '../../components/Login';
import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Login/>
            <Register/>
        </div>
    )
}

export default Auth;
