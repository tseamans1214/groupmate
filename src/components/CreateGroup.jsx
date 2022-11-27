import React from "react";
import {Link} from 'react-router-dom'
function CreateGroup() {
    return (
        <>
            <Link to="/account-home" className="back-button">&#8249;</Link>
            <section className="menu">
                <h1 className="menu-component menu-title">Groupmate</h1>
                <h2 className="menu-component menu-subtitle">Create Group</h2>
                <form className="create-group-form" action="/account-home">
                    <label className="form-component" for="group-name">Group Name:</label>
                    <input className="form-component" type="text" id="group-name" name="group-name" placeholder="Group Name"></input>
  
                    <input className="form-component submit-button" type="submit" value="Create"></input>
                </form>
            </section>
        </>
    );
}

export default CreateGroup;