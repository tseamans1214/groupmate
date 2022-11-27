import React from "react";
import {Link} from 'react-router-dom'
function JoinGroup() {
    return (
        <>
            <Link to="/account-home" className="back-button">&#8249;</Link>
            <section className="menu">
                <h1 className="menu-component menu-title">Groupmate</h1>
                <h2 className="menu-component menu-subtitle">Join Group</h2>
                <form className="join-group-form" action="/account-home">
                    <label className="form-component" for="group-name">Group Name:</label>
                    <input className="form-component" type="text" id="group-name" name="group-name" placeholder="Group Name"></input>

                    <label className="form-component" for="group-id">Group ID:</label>
                    <input className="form-component" type="text" id="group-id" name="group-id" placeholder="Group ID"></input>
  
                    <input className="form-component submit-button" type="submit" value="Join"></input>
                </form>
            </section>
        </>
    );
}

export default JoinGroup;