import App from '..//page-objects/App';
import Navbar from '../page-objects/components/Navbar';

describe('Search button', () => {
	it('should load home page', () => {
		//browser.url('http://zero.webappsecurity.com/index.html');
		App.openHomePage();
		// $('#searchTerm').waitForExist();
	});
	it('should submit searchbox', () => {
		// $('#searchTerm').setValue('Hello world');
		// browser.keys('Enter');
		Navbar.search('hello world');
		const result = $('h2');
		result.waitForExist();
		expect(result).toHaveText('Search Results:');
	});
});
