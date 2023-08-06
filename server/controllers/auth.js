const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

exports.getLogin = (req, res) => {
  if (req.user) {
    //res.json(req.user);
    //console.log(req.user);
    return res.json(req.user);
    //return res.redirect(`/account-home?=${req.user._id}`);
    //return res.redirect("/account-home");
  }
  res.redirect("/login");
  // res.render("login", {
  //   title: "Login",
  // });
};

exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email)){
    console.log("Please enter a valid email address");
    validationErrors.push({ msg: "Please enter a valid email address." });
  }
  if (validator.isEmpty(req.body.password)) {
    console.log("Password cannot be blank");
    validationErrors.push({ msg: "Password cannot be blank." });
  }
  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("Authentication failed");
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      console.log("Success! User logged in.");
      res.redirect(req.session.returnTo || "/account-home");
      console.log("After redirect to account-home");
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/account-home");
  }
  res.redirect("/signup");
  // res.render("signup", {
  //   title: "Create Account",
  // });
};

exports.postSignup = async (req, res, next) => {
  console.log("Post Signup");
  const validationErrors = [];
  if (!validator.isEmail(req.body.semail)) {
    console.log("Invalid email");
    validationErrors.push({ msg: "Please enter a valid email address." });
  }
  if (!validator.isLength(req.body.spassword, { min: 8 })) {
    console.log("Password not 8 characters");
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  }
  if (req.body.spassword !== req.body.scpassword) {
    console.log("Passwords do not match");
    validationErrors.push({ msg: "Passwords do not match" });
  }
  if (validationErrors.length) {
    console.log("validation errors");
    req.flash("errors", validationErrors);
    return res.redirect("/signup");
  }
  req.body.semail = validator.normalizeEmail(req.body.semail, {
    gmail_remove_dots: false,
  });

  const user = new User({
    username: req.body.susername,
    email: req.body.semail,
    password: req.body.spassword,
  });

  existingUser = await User.findOne({email: req.body.semail}).exec();

  if (existingUser) {
      console.log(`Account with that email ${existingUser.email} already exists`);
        req.flash("errors", {
          msg: "Account with that email address already exists.",
        });
      return res.redirect("/signup");
  }
  user.save((err) => {
          if (err) {
            return next(err);
          }
          req.logIn(user, (err) => {
            if (err) {
              return next(err);
            }
            console.log("signup successfull");
            res.redirect("/account-home");
          });
  });
  // User.findOne(
  //   { $or: [{ email: req.body.semail }, { userName: req.body.suserName }] },
  //   (err, existingUser) => {
  //     if (err) {
  //       return next(err);
  //     }
  //     if (existingUser) {
  //       console.log(`Account with that email ${existingUser.email} already exists`);
  //       req.flash("errors", {
  //         msg: "Account with that email address or username already exists.",
  //       });
  //       return res.redirect("/signup");
  //     }
  //     user.save((err) => {
  //       if (err) {
  //         return next(err);
  //       }
  //       req.logIn(user, (err) => {
  //         if (err) {
  //           return next(err);
  //         }
  //         console.log("signup successfull");
  //         res.redirect("/account-home");
  //       });
  //     });
  //   }
  // );
};