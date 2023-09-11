const { parentPort, workerData } = require('worker_threads');

function workerfunc() {
  let counter = 0;
  for (let i = 0; i < 10000000000000; i++) {
    counter++;
  }
  parentPort.postMessage(counter);
}

workerfunc();
