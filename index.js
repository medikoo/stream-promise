"use strict";

const Stream = require("stream");

class StreamEmitter extends Promise {
	constructor(executor) {
		super(executor);
		Stream.call(this);
	}
}

Object.assign(StreamEmitter.prototype, Object.getPrototypeOf(Stream.prototype)); // EventEmitter
Object.assign(StreamEmitter.prototype, Stream.prototype);

module.exports = StreamEmitter;
