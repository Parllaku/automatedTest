import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';
import exchangePage from '../page-objects/pages/exchangePage';

describe('e2e currency exchange', () => {
	it('should log in with valid crudentials', () => {
		//browser.url('http://zero.webappsecurity.com/');
		App.openLoginPage();
		// LoginPage.formIsVisible();
		// LoginPage.fillForm('username', 'password');
		// LoginPage.submitForm();
		LoginPage.login('username', 'password');
		LoginPage.homePageLoged();
	});
	it('should make currency exhange', () => {
		// $('#pay_bills_tab').waitForExist();
		// $('#pay_bills_tab').click();
		// $('#tabs > ul > li:nth-child(3) > a').waitForExist();
		// $('#tabs > ul > li:nth-child(3) > a').click();
		exchangePage.openCurrency();
		// const selectCurrency = $('#pc_currency');
		// selectCurrency.waitForExist();
		// selectCurrency.click();
		//const currency = selectCurrency.getValue();
		//selectCurrency.selectByAttribute('value', 'GBP');
		exchangePage.selectCurrency();
		//$('#pc_amount').setValue('1327');
		exchangePage.selectAmount('1234');
		// $(
		// 	'#pc_purchase_currency_form > div.board > div > article > fieldset > div:nth-child(3) > div > label:nth-child(3)'
		// ).click();
		// $('#pc_calculate_costs').click();
		// $('#purchase_cash').click();
		exchangePage.purchaseCash();
		// $('#alert_content').waitForExist();
		// expect($('#alert_content')).toHaveText(
		// 	'Foreign currency cash was successfully purchased.'
		// );
		exchangePage.alertMsg();

		exchangePage.pauseShort();
	});
});
