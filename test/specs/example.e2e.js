const LoginPage = require('../page-object/pageobjects/login.page');
const SecurePage = require('../page-object/pageobjects/secure.page');

describe('My Login application', () => {
	it('should login with valid credentials', () => {
		LoginPage.open();

		LoginPage.login('tomsmith', 'SuperSecretPassword!');
		expect(SecurePage.flashAlert).toBeExisting();
		expect(SecurePage.flashAlert).toHaveTextContaining(
			'You logged into a secure area!'
		);
	});
});
