import React from "react";
import {Link} from 'react-router-dom'
function Home() {
    return (
        <>
            <section className="menu">
                <h1 className="menu-component menu-title">Groupmate</h1>
                <Link to="/login" className="menu-component menu-button">Login</Link>
                <Link to="/signup" className="menu-component menu-button">Signup</Link>
            </section>
        </>
    );
}

export default Home;