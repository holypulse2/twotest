import { config } from '../configuration';
import * as api from '../axios';
 
describe('Configuration', () => { 
	const getSpy = jest.spyOn(api, 'get');

	afterEach(() => {
		getSpy.mockClear();
	});

	it('is called correctly', async () => {	 
		config('en')
		expect(getSpy).toHaveBeenCalledTimes(1);
	});
});
