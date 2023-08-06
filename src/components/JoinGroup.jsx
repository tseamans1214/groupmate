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
                    <label className="form-component" for="groupname">Group Name:</label>
                    <input className="form-component" type="text" id="groupname" name="groupname" placeholder="Group Name"></input>

                    <label className="form-component" for="groupid">Group ID:</label>
                    <input className="form-component" type="text" id="groupid" name="groupid" placeholder="Group ID"></input>
  
                    <input className="form-component submit-button" type="submit" value="Join"></input>
                </form>
            </section>
        </>
    );
}

export default JoinGroup;