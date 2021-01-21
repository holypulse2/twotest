import reducer from '../configuration';
import * as actions from '../../actions/configuration';
import { CONFIGURATION } from '../../../__mocks__/fixtures/configuration';
 
const initialState = {
	configuration: {},
	error: null,
  };

describe('Reducers', () => { 
	describe('Configuration', () => { 
		it('returns the initial state', () => {
			expect(reducer(undefined, {})).toEqual(initialState);
		});

		it('handles GET_CONFIGURATION', () => {
			expect(reducer(initialState, actions.getConfiguration(CONFIGURATION))).toEqual({ configuration: CONFIGURATION.data, error: null });
		});

		it('handles ON_ERROR', () => {
			expect(reducer(undefined, actions.onError())).toEqual({...initialState, error: true});
		});
	});
});
