import assert from 'assert';
import { suite } from 'uvu';

const tests = suite('assert bug');

tests('Test 0', () => {
  // assert.fail('Fail 0');
});

tests('Successful deepStrictEqual does not block suite', () => {
  assert.deepStrictEqual(['a'], ['a']);
})

/**
 * When uncommented, each line in this test prevents this test and subsequent ones from running
 */
tests('Test 1', () => {
  // assert.deepStrictEqual(['a'], ['b']);
  // assert.strictEqual(['a'], ['b']);
  assert.strictEqual(['a'], ['a']);
});

tests('Test 2', () => {
  // assert.fail('Fail 2');
});

tests('Test 3', () => {
  // assert.fail('Fail 3');
});

tests.run();
