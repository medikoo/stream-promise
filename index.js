"use strict";

const toThenable = require("2-thenable")
    , toPromise  = require("./to-promise");

module.exports = stream => toThenable(stream, toPromise(stream));
