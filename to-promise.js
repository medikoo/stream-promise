"use strict";

const toShortString = require("es5-ext/to-short-string-representation")
    , isStream      = require("is-stream");

module.exports = stream => {
	if (!isStream(stream)) throw new TypeError(`${ toShortString(stream) } is not a stream`);
	if (!isStream.readable(stream) && !isStream.writable(stream)) {
		throw new TypeError(
			`${ toShortString(stream) } stream is recognized neither as readable nor writeable`
		);
	}
	return new Promise((resolve, reject) => {
		stream.on("error", reject);

		let result = null;
		if (isStream.readable(stream)) {
			if (stream._readableState.objectMode) {
				result = [];
				stream.on("data", data => result.push(data));
			} else {
				stream.on("data", data => {
					if (typeof data === "string") {
						if (!result) {
							result = data;
						} else if (Buffer.isBuffer(data)) {
							result = Buffer.concat([data, Buffer.from(data)]);
						} else {
							result += data;
						}
					} else if (!result) {
						result = data;
					} else if (Buffer.isBuffer(result)) {
						result = Buffer.concat([result, data]);
					} else {
						result = Buffer.concat([Buffer.from(result), data]);
					}
				});
			}
			stream.on("end", () => resolve(result));
		} else {
			stream.on("finish", () => resolve(result));
		}
	});
};
