import test from 'tape';

import { put, delay } from 'redux-saga/effects';
import { incrementAsync } from '../src/sagas';

test('incrementAsync Saga test' , (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(gen.next().value, delay(1000), 'Counter Saga must call delay(1000)');
  assert.deepEqual(gen.next().value, put({ type: 'INCREMENT' }), 'Counter Saga must dispatch an INCREMENT action');
  assert.deepEqual(gen.next(), { done: true, value: undefined }, 'Counter Saga must be done');

  assert.end();
});