// setup throttle reference
const throttle = require('./index')

const THROTTLE_INTERVAL = 3000
const THROTTLE_LIMIT    = 5



async function trigger (payload) {
  return console.log('Hey! It is payload:', payload)
}

const my_simple_throttler = throttle.simple(THROTTLE_INTERVAL, trigger)

my_simple_throttler('key_custom')
my_simple_throttler({ key: 'key_read' })
my_simple_throttler([{ key: 'val' }])
my_simple_throttler('key_x')