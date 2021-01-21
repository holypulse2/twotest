import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../redux/actions/configuration';
import { config } from '../services/api/configuration';
import { DEFAULT_LOCALE } from '../constants';

export function* callConfigurationApi(param) {
  try {
    const result = yield call(config, (param && param.payload) || DEFAULT_LOCALE);

    yield put(actions.receiveConfiguration(result));
  } catch(error) {
    yield put(actions.onError(error));
  }
}

export function* getConfiguration() {
  yield takeLatest(actions.GET_CONFIGURATION, callConfigurationApi);
}
