const userSchema = require("../schema/userSchema");
const bcrypt = require("bcrypt");

exports.createUser = (req, res, next) => {
  const { name, phone, location, email, password, department } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      userSchema.create({
        name,
        phone,
        location,
        email,
        password: hash,
        department,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getUsers = (req, res, next) => {
  userSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
};

exports.userLogin = (req, res, next) => {
  const { email, password } = req.body;
  userSchema.findOne({ email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          return res.status(200).json({
            success: true,
            message: "You have logged in successfully",
          });
        } else {
          return res.json({ message: "Password is incorrect!!!" });
        }
      });
    } else {
      res.status(404).json({ success: false, message: "No record found" });
    }
  });
};
