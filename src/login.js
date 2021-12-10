import logo from './Images/TBD Logo.PNG';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    //change pages
    let navigate = useNavigate();
    function routeChange() {
        navigate('/home')
    }

    /*
     When Login button is clicked, Firebase should be called in here for user to use Google Login
     */

    return (
        <body>
            <img src={logo} width="25%" height="25%" class="logo" alt="TBD Logo" />

            <p> You are given the beginning and the end - the middle is TBD. </p>

            <button type="button">Login</button>
        </body>
    );
}

export default Login;