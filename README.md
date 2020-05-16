# Yet another throttler

### Throttle: As long as it proceeds to be invoked/called, execute on every interval or specific circumstances

## Installation
Install via NPM:

```bash
npm install light-throttler

```

## Usage

#### javascript

```javascript

// You can pass any kind of arguments to the trigger to be bounced with simple-throttler.
const my_simple_throttler = debounce.simple(BOUNCE_INTERVAL, trigger)

// You can group each series of tiggers with a same key to be bounced during a specific interval with timer-throttler.
const my_timer_throttler = debounce.timer(BOUNCE_INTERVAL, trigger)

// You can group each series of tiggers with a same key to be bounced during over the specific limit with counter-throttler.
const my_counter_throttler = debounce.counter(BOUNCE_LIMIT, trigger)

// You can group each series of tiggers with a same key to be bounced over the mixed circumstances with mixed-throttler.
const my_mixed_throttler = debounce.mixed(BOUNCE_INTERVAL, BOUNCE_LIMIT, trigger)

// You can group each series of customized-tiggers with a same key to be bounced over the mixed circumstances with convoy-throttler.
const my_convoy_throttler = debounce.convoy(BOUNCE_INTERVAL, BOUNCE_LIMIT, trigger)


```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).