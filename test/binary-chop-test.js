var assert = require('assert');
var bc = require('../binary-chop');

describe('binary-bc.chop', () => {
  it('should work', () => {
     assert.equal(-1, bc.chop(3, []));
     assert.equal(-1, bc.chop(3, [1]));
     assert.equal(0,  bc.chop(1, [1]));

    assert.equal(0,  bc.chop(1, [1, 3, 5]));
    assert.equal(1,  bc.chop(3, [1, 3, 5]));
    assert.equal(2,  bc.chop(5, [1, 3, 5]));
    assert.equal(-1, bc.chop(0, [1, 3, 5]));
    assert.equal(-1, bc.chop(2, [1, 3, 5]));
    assert.equal(-1, bc.chop(4, [1, 3, 5]));
    assert.equal(-1, bc.chop(6, [1, 3, 5]));

    assert.equal(0,  bc.chop(1, [1, 3, 5, 7]));
    assert.equal(1,  bc.chop(3, [1, 3, 5, 7]));
     assert.equal(2,  bc.chop(5, [1, 3, 5, 7]));
     assert.equal(3,  bc.chop(7, [1, 3, 5, 7]));
    assert.equal(-1, bc.chop(0, [1, 3, 5, 7]));
    assert.equal(-1, bc.chop(2, [1, 3, 5, 7]));
    assert.equal(-1, bc.chop(4, [1, 3, 5, 7]));
    assert.equal(-1, bc.chop(6, [1, 3, 5, 7]));
    assert.equal(-1, bc.chop(8, [1, 3, 5, 7]));
    })
})


