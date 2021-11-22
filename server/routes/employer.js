const express = require("express");
const employerRoute = express.Router();

const postJob = require("../functions/postJob.js");
const getJob = require("../functions/getJob.js");
const viewApplied = require("../functions/viewApplied.js");
const status = require("../functions/status.js");

employerRoute.post("/post-job", postJob);

employerRoute.get("/get-job", getJob);

employerRoute.get("/view-applied", viewApplied);

employerRoute.post("/status", status);

module.exports = employerRoute;
