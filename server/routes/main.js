const express = require("express");
const route = express.Router();

const employeeRoute = require("./employee.js");
const employerRoute = require("./employer.js");

const { getConnection } = require("../data/getConnection.js");
const login = require("../functions/login.js");
const signup = require("../functions/signup.js");
const logout = require("../functions/logout.js");
const createCompany = require("../functions/createCompany.js");

route.post("/login", login);

route.post("/signup", signup);

route.post("/create-company", createCompany);

route.get("/logout", logout);

route.use("/employee", employeeRoute);

route.use("/employer", employerRoute);

module.exports = route;
