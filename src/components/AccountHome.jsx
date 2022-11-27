import React from "react";
import {Link} from 'react-router-dom'
function AccountHome() {
    return (
        <>
            <Link to="/account-settings" className="back-button">Account Settings</Link>
            <section className="account-home">
                <h1 className="account-title">Welcome, Username</h1>
                <div className="account-groups">
                    <div className="account-groups-row">
                        <Link to="/create-group" className="account-groups-col1">+</Link>
                        <Link to="/create-group" className="account-groups-col2">Create Group</Link>
                    </div>
                    <div className="account-groups-row">
                        <Link to="/join-group" className="account-groups-col1">+</Link>
                        <Link to="/join-group" className="account-groups-col2">Join Group</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AccountHome;