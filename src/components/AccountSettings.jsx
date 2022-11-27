import React from "react";
import {Link} from 'react-router-dom'
function AccountSettings() {
    return (
        <>
            <Link to="/account-home" className="back-button">&#8249;</Link>
            <section className="account-home">
                <h1 className="account-title">Account Settings</h1>
                <div className="account-groups">
                    <div className="account-groups-row">
                        <div className="account-groups-col">ID:</div>
                        <div  className="account-groups-col">Account ID</div>
                    </div>
                    <div className="account-groups-row">
                    <div className="account-groups-col">Username:</div>
                    <div className="account-groups-col">Account Username</div>
                    </div>
                    <div className="account-groups-row">
                        <div className="account-groups-col">Created Groups:</div>
                        <div className="account-groups-col">List of Groups</div>
                    </div>
                    <div className="account-groups-row">
                        <div className="account-groups-col">Joined Groups:</div>
                        <div className="account-groups-col">List of Groups</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AccountSettings;