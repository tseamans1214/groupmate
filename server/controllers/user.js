const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const users = [];

exports.hello = (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
};

exports.postUser = (req, res, next) => {
    const user = new User({
        userName: req.body.susername,
        email: req.body.email,
        password: req.body.password,
      });
    users.push(user);
    console.log(users);
    res.redirect("/account-home");
}

exports.getUser = (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (req.email === users[i].email && req.password === users[i].password) {
            res.json(users[i]);
        }
    }
    res.redirect("/account-home");
}