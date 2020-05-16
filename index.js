const simple = (interval, trigger) => {
  let timeout = false;

  return function() {
    const context = this;
    const args    = arguments;

    if (!timeout) {
      trigger.apply(context, args)
      timeout = true;

      setTimeout(function() {
        timeout = false;
      }, interval)
    }
  }
}


module.exports = {
  simple
}