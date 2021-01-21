export const GET_CONFIGURATION = 'GET_CONFIGURATION';
export const RECEIVE_CONFIGURATION = 'RECEIVE_CONFIGURATION';
export const ON_ERROR = 'ON_ERROR';
export const UPDATE_CURRENT_SECTION_NUMBER = 'UPDATE_CURRENT_SECTION_NUMBER';

export function getConfiguration(payload) {
  return {
    type: GET_CONFIGURATION,
    payload,
  };
}

export function updateSectionPageNumber(payload) {
  return {
    type: UPDATE_CURRENT_SECTION_NUMBER,
    payload,
  };
}

export function receiveConfiguration(payload) {
  return {
    type: RECEIVE_CONFIGURATION,
    payload,
  };
}

export function onError() {
  return {
    type: ON_ERROR,
  };
}