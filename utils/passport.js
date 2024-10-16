const passport = require("passport");
const pwd = require("./password.js");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.initialize();

passport.use(
  new localStrategy(async function (username, password, done) {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    try {
      if (!user) {
        return done(null, false, {
          message: "نام کاربری و یا کلمه عبور اشتباه است",
        });
      }

      if (!pwd.validate(password, user.password)) {
        return done(null, false, {
          message: "نام کاربری و یا کلمه عبور اشتباه است",
        });
      }

      return done(null, user);
    } catch (error) {
      done(error);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});