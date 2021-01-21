import axios from 'axios';
import { get } from '../axios';
import { CONFIGURATION } from '../../../__mocks__/fixtures/configuration';
 
jest.mock('axios');
 
describe('Axios', () => { 
	const url = 'url';

	it('calls axios with correct url', async () => {
		get(url);

		expect(axios.get).toHaveBeenCalledWith(url);
	});

	it('fetches successfully data from an API', async () => {	 
		axios.get.mockImplementationOnce(() => Promise.resolve(CONFIGURATION));
	 
		await expect(get(url)).resolves.toEqual(CONFIGURATION);
	});
});
