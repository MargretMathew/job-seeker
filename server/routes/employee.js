const express = require("express");
const employeeRoute = express.Router();

const { getConnection } = require("../data/getConnection.js");
const viewJobs = require("../functions/viewJobs.js");
const getNotifications = require("../functions/getNotifications.js");
const applyJob = require("../functions/applyJob.js");

employeeRoute.get("/jobs", viewJobs);

employeeRoute.get("/notifications", getNotifications);

employeeRoute.post("/apply", applyJob);

module.exports = employeeRoute;
