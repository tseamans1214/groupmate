import React from "react";
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
function AccountSettings() {
    const [user, setUser] = useState(null);
    const [groups, setGroups] = useState([{}]);
    const groupSections = [];
    useEffect(() => {
        fetch("/api/group/getGroups").then(
          response => response.json()
        ).then(
          data => {
            setGroups(data);
          }
        );
        fetch("/api/user/login").then(
          response => response.json()
        ).then(
          data => {
            console.log("User Set");
            setUser(data);
          }
        );
        //console.log(groups[0]);
        //groupSections = [];
      }, []);
    return (
        <>
            <Link to="/account-home" className="back-button">&#8249;</Link>
            <section className="account-home">
                <h1 className="account-title">Account Settings</h1>
                <div className="account-groups">
                    <div className="account-groups-row">
                        <div className="account-groups-col">ID:</div>
                        <div  className="account-groups-col">{user ? user._id : "Account ID"}</div>
                    </div>
                    <div className="account-groups-row">
                    <div className="account-groups-col">Username:</div>
                    <div className="account-groups-col">{user ? user.username : "Username"}</div>
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