import React from "react";
import {Link} from 'react-router-dom'
function Signup() {
    return (
        <>
            <Link to="/" className="back-button">&#8249;</Link>
            <section className="menu">
                <h1 className="menu-component menu-title">Groupmate</h1>
                <h2 className="menu-component menu-subtitle">Signup</h2>
                <form className="signup-form" action="/api/user" method="post">
                    <label className="form-component" for="username">Username:</label>
                    <input className="form-component" type="text" id="susername" name="username" placeholder="username"></input>
                    
                    <label className="form-component" for="email">Email:</label>
                    <input className="form-component" type="email" id="semail" name="email" placeholder="email"></input>

                    <label className="form-component" for="password">Password:</label>
                    <input className="form-component" type="password" id="spassword" name="password" placeholder="password"></input>

                    <label className="form-component" for="cpassword">Confirm Password:</label>
                    <input className="form-component" type="password" id="scpassword" name="cpassword" placeholder="confirm password"></input>

                    <input className="form-component submit-button" type="submit" value="Login"></input>
                </form>
            </section>
        </>
    );
}

export default Signup;