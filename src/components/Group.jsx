import React from "react";
import {Link} from 'react-router-dom'
function Group() {
    return (
        <>
            <Link to="/account-home" className="back-button">&#8249;</Link>
            <section className="menu">
                <h1 className="menu-component menu-title">Group Name</h1>
                <form className="create-group-form" action="/api/group/createMessage" method="POST">

                    <input className="form-component" type="text" id="message" name="message" placeholder="Your Message"></input>
                    <input className="form-component submit-button" type="submit" value="Send"></input>
                </form>
            </section>
        </>
    );
}

export default Group;