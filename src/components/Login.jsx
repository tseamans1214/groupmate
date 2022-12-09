import React from "react";
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
function Login() {
    const [user, setUser] = useState([{}]);
    // const userLogin = () => {
    //     fetch("/api/user/login", {
    //         method: 'POST'
    //     }).then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //         setUser(data);
    //         }
    //     )
    //     console.log(user.username);
    // };
    return (
        <>
            <Link to="/" className="back-button">&#8249;</Link>
            <section className="menu">
                <h1 className="menu-component menu-title">Groupmate</h1>
                <h2 className="menu-component menu-subtitle">Login</h2>
                {/* <form className="login-form" action={() => userLogin()} method="POST"> */}
                <form className="login-form" action="/api/user/login" method="POST">
                    <label className="form-component" for="email">Email:</label>
                    <input className="form-component" type="email" id="lemail" name="email" placeholder="email"></input>

                    <label className="form-component" for="password">Password:</label>
                    <input className="form-component" type="password" id="lpassword" name="password" placeholder="password"></input>
  
                    <input className="form-component submit-button" type="submit" value="Login"></input>
                </form>
            </section>
        </>
    );
}

export default Login;