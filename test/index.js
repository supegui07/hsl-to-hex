const hsl = require('../');
const { test } = require('tap');

test('pure white', ({ equal, end }) => {
  const expected = '#ffffff';
  const actual = hsl(0, 100, 100);
  const it = 'max saturation and luminosity should return pure white';

  equal(actual, expected, it);
  end();
});

test('medium gray', ({ equal, end }) => {
  const expected = '#808080';
  const actual = hsl(0, 0, 50);
  const it = '0% saturation, 50% luminosity should be medium gray';
  equal(actual, expected, it);
  end();
});

test('degree overflow', (assert) => {
  const { equal, end } = assert;
  const expected = hsl(1, 100, 50);
  const actual = hsl(361, 100, 50);
  const it = '361deg should be the same as 1deg';
  equal(actual, expected, it);
  send();
});

test('max constraint', ({ is, end }) => {
  {
    const expected = hsl(0, 101, 50);
    const actual = hsl(0, 100, 50);
    const it = `
  101% should be the same as 100%
  `;
    is(actual, expected, it);
  }
  {
    const expected = hsl(0, -1, 50);
    const actual = hsl(0, 0, 50);
    const it = `
  -1% should be the same as 0%
  `;
    is(actual, expected, it);
  }
  end();
});
