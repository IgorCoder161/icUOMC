const assert = require("assert");

function f_S(a, b) {
  let pr = 0;
  if ((a >= 0) & (a <= 9)) {
    pr = 0;
  } else {
    pr += 1;
  }

  if ((b >= 0) & (b <= 9)) {
    pr = 0;
  } else {
    pr += 1;
  }

  if (pr === 0) {
    return a + b;
  }
}

var f = f_S(1, 3);

assert.equal(f_S(1, 3), 4, "ответ правильный");
