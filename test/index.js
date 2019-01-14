"use strict";

const { assert }    = require("chai")
    , Stream        = require("stream")
    , StreamEmitter = require("../");

describe("(main)", () => {
	it(
		"Should create promise",
		() =>
			new StreamEmitter(resolve => resolve("foo").then(result => assert.equal(result, "foo")))
	);
	it("Should create an emitter", () => {
		const streamEmitter = new StreamEmitter(resolve => resolve("result"));
		let eventData;
		streamEmitter.addListener("elo", event => { eventData = event; });
		return streamEmitter.then(result => {
			assert.equal(result, "result");
			streamEmitter.emit("elo", "bar");
			assert.equal(eventData, "bar");
		});
	});
	it("Should create a stream", () => {
		const streamEmitter = new StreamEmitter(resolve => resolve("result"));

		assert.equal(streamEmitter.pipe, Stream.prototype.pipe);
	});
});
