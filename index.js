"use strict";

const Stream = require("stream");

class StreamEmitter extends Promise {
	constructor(executor) {
		super(executor);
		Stream.call(this);
	}
}

const EventEmitterPrototype = Object.getPrototypeOf(Stream.prototype);
Object.assign(StreamEmitter.prototype, EventEmitterPrototype, Stream.prototype);

module.exports = StreamEmitter;
