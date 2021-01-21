import { RECEIVE_CONFIGURATION, ON_ERROR, UPDATE_CURRENT_SECTION_NUMBER } from '../actions/configuration';

const initialState = {
  configuration: {},
  error: null,
};

function configurationReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CONFIGURATION:
      return {
        ...state,
        configuration: action.payload && action.payload.data
      };
    case UPDATE_CURRENT_SECTION_NUMBER:
      return {
        ...state,
        currentSectionNumber: action.payload && action.payload
      };
    case ON_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}

export default configurationReducer;