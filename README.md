[![*nix build status][nix-build-image]][nix-build-url]
[![Windows build status][win-build-image]][win-build-url]
[![Tests coverage][cov-image]][cov-url]
![Transpilation status][transpilation-image]

# stream-promise

## Promise that's a also a Node.js [Stream](https://nodejs.org/api/stream.html#stream_stream)

Useful when we want to serve both a [`Stream`](https://nodejs.org/api/stream.html#stream_stream) instance and a `Promise` instance as one object

### Installation

```bash
npm install stream-promise
```

# Usage

```javascript
const StreamPromise = require("stream-promise");

const streamPromise = new StreamPromise((resolve, reject) => {
	...
});

streamPromise.addListener("someevent", event => {
	...
});
streamPromise.emit("someevent", { ... });

stream.pipe(otherStream);
```

### Tests

```bash
npm test
```

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/stream-promise/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/stream-promise
[win-build-image]: https://ci.appveyor.com/api/projects/status/2ihsys269r29l2ol?svg=true
[win-build-url]: https://ci.appveyor.com/api/project/medikoo/stream-promise
[cov-image]: https://img.shields.io/codecov/c/github/medikoo/stream-promise.svg
[cov-url]: https://codecov.io/gh/medikoo/stream-promise
[transpilation-image]: https://img.shields.io/badge/transpilation-free-brightgreen.svg
[npm-image]: https://img.shields.io/npm/v/stream-promise.svg
