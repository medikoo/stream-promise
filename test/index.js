"use strict";

const isThenable    = require("es5-ext/object/is-thenable")
    , { assert }    = require("chai")
    , { Readable }  = require("stream")
    , streamPromise = require("../");

describe("(main)", () => {
	it("Should convert stream to promise", () => {
		const stream = Object.assign(new Readable(), { _read() { this.push(null); } });
		const result = streamPromise(stream);
		assert.equal(isThenable(result), true);
		assert.equal(result, stream);
		return result;
	});
});
