import React from "react";
import {Link} from 'react-router-dom'
function Signup() {
    return (
        <>
            <Link to="/" className="back-button">&#8249;</Link>
            <section className="menu">
                <h1 className="menu-component menu-title">Groupmate</h1>
                <h2 className="menu-component menu-subtitle">Signup</h2>
                <form className="signup-form" action="/api/user/signup" method="POST">
                    <label className="form-component" htmlFor="susername">Username:</label>
                    <input className="form-component" type="text" id="susername" name="susername" placeholder="username"></input>
                    
                    <label className="form-component" htmlFor="semail">Email:</label>
                    <input className="form-component" type="email" id="semail" name="semail" placeholder="email"></input>

                    <label className="form-component" htmlFor="spassword">Password:</label>
                    <input className="form-component" type="password" id="spassword" name="spassword" placeholder="password"></input>

                    <label className="form-component" htmlFor="scpassword">Confirm Password:</label>
                    <input className="form-component" type="password" id="scpassword" name="scpassword" placeholder="confirm password"></input>

                    <input className="form-component submit-button" type="submit" value="Signup"></input>
                </form>
            </section>
        </>
    );
}

export default Signup;