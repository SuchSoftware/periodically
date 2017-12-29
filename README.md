# periodically

Because sometimes you need to do something periodically

## Installtion

`npm install --save periodically`

or

`yarn add periodically`

## Use

```
const periodically = require('../periodically')


function someFuncThatEvenUsesAPromise() {
  return new Promise(resolve => {
    resolve(true)
  })
}

// Run it every second
const checker = periodically(someFuncThatEvenUsesAPromise, 1000);

// Start it going
checker.start()

// Stop it if you need to
checker.stop()
```
