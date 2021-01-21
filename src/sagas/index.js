import { fork, all } from 'redux-saga/effects';
import { getConfiguration } from './configuration';

export default function* root() {
  yield all([
    fork(getConfiguration),
  ]);
}
