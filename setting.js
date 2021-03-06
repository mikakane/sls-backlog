"use strict"

const loadenv = require("node-env-file");
loadenv("./.env")

module.exports = {
    SLACK_TOKEN: process.env.SLACK_TOKEN,
    SLACK_ICONEMOJI: ":aim:",
    SLACK_USERNAME: "Amy"
};
