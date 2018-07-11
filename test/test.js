var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-float-power');

describe('next/floatPower', function () {

  it('nx.floatPower 0.01 -> 100', function () {
    var rs1 = nx.floatPower(0.01);
    assert.equal(rs1, 100);
  });

  it('nx.floatPower 10.01 -> 100', function () {
    var rs1 = nx.floatPower(10.01);
    assert.equal(rs1, 100);
  });

  it('nx.floatPower 0.2 -> 10', function () {
    var rs1 = nx.floatPower(0.2);
    assert.equal(rs1, 10);
  });

});
