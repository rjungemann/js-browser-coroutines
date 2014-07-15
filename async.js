// brew unlink node
// brew install node --HEAD
// npm install --save bluebird
//
// node --harmony async.js

var Promise = require('bluebird');

function wait(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms);
  });
}

var work = Promise.coroutine(function* () {
  yield wait(250);
  console.log('a');

  yield wait(500);
  console.log('b');

  yield wait(500);
  console.log('c');
});

var moreWork = Promise.coroutine(function* () {
  console.log(1);

  yield wait(500);
  console.log(2);

  yield wait(500);
  console.log(3);
});

work();
moreWork();

// Output:
//
//   1
//   a
//   2
//   b
//   3
//   c
