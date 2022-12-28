import React from "react";
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
function AccountHome() {
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
          setUser(data);
        }
      );
      //console.log(groups[0]);
      //groupSections = [];
    }, []);

    for (let i=0; i<groups.length; i++) {
        groupSections.push(
            <div key={groups[i]._id} className="account-groups-row">
                        <Link to={"/group"} className="account-groups-col1">pic</Link>
                        <Link to={"/group/" + groups[i]._id} className="account-groups-col2">{groups[i].groupName}</Link>
            </div>
        )
        console.log("group added");
      }
    return (
        <>
            <Link to="/account-settings" className="back-button">Account Settings</Link>
            <section className="account-home">
                <h1 className="account-title">Welcome, {user ? user.email : "Username"}</h1>
                <div className="account-groups">
                    <div className="account-groups-row">
                        <Link to="/create-group" className="account-groups-col1">+</Link>
                        <Link to="/create-group" className="account-groups-col2">Create Group</Link>
                    </div>
                    <div className="account-groups-row">
                        <Link to="/join-group" className="account-groups-col1">+</Link>
                        <Link to="/join-group" className="account-groups-col2">Join Group</Link>
                    </div>
                    {groupSections}
                </div>
            </section>
        </>
    );
}

export default AccountHome;