const users = [];

exports.hello = (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
};

exports.postUser = (req, res) => {
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
    users.push(user);
    console.log("user added");
    res.redirect("localhost:3000/account-home");
}

exports.getUser = (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (req.email === users[i].email && req.password === users[i].password) {
            res.json(users[i]);
        }
    }
    console.log("User not found");
    res.redirect("localhost:3000/");
}