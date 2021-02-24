import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';

describe('pay test', () => {
	it('should log in with valid crudentials', () => {
		App.openLoginPage();
		LoginPage.login('username', 'password');
		LoginPage.homePageLoged();
	});

	it('should pay a payee', () => {
		$('#pay_bills_tab').click();
		$('#pay_saved_payees').waitForExist();
		const payee = $('#sp_payee');
		payee.click();
		payee.selectByAttribute('value', 'apple');
		const account = $('#sp_account');
		account.selectByVisibleText('Loan');
		$('#sp_amount').setValue('1000');
		$('#sp_date').setValue('2021-02-05');
		browser.keys('Tab');
		$('#sp_description').setValue('lending money to a friend');
		$('#sp_description').waitForExist();

		$('#pay_saved_payees').click();
		$('#alert_content').waitForExist();
		expect($('#alert_content')).toHaveText(
			'The payment was successfully submitted.'
		);
		browser.pause(2000);
	});
});
