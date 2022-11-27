import React from "react";
import {Link} from 'react-router-dom'
function Login() {
    return (
        <>
            <Link to="/" className="back-button">&#8249;</Link>
            <section className="menu">
                <h1 className="menu-component menu-title">Groupmate</h1>
                <h2 className="menu-component menu-subtitle">Login</h2>
                <form className="login-form" action="/account-home">
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