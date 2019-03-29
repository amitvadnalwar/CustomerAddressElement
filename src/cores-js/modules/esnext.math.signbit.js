// `Math.signbit` method
// https://github.com/tc39/proposal-Math.signbit
require('../internals/export')({ target: 'Math', stat: true }, { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });
