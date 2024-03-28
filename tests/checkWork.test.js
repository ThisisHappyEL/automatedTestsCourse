import { strict as assert } from 'node:assert';
import indexOfCheck from '../src/checkWork.js';

assert.equal(indexOfCheck(['a', 'b', 'a', 'c', 'b'], 'b'), 1);
assert.equal(indexOfCheck([], 'b'), -1);
assert.equal(indexOfCheck(['a', 'b', 'a', 'c', 'b'], 'b', 2), 4);
assert.equal(indexOfCheck(['a', 'b', 'a', 'c', 'b'], 66), -1);
assert.equal(indexOfCheck(['a', 'b', 'a', 'c', 'b'], 'c', -2), 3);