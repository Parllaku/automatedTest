import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';
import findTransactions from '..//page-objects/pages/findTransactions';

describe('find transactions', () => {
	it('should log in with valid crudentials', () => {
		App.openLoginPage();
		LoginPage.login('username', 'password');
		LoginPage.homePageLoged();
	});

	it('should find a transaction', () => {
		// $('#account_activity_tab').click();
		// $('#all_transactions_for_account').waitForExist();
		// $('#tabs > ul > li:nth-child(2) > a').click();
		findTransactions.searchTransactions();
		// $('#aa_description').setValue('OFFICE SUPPLY');
		// $('#aa_fromDate').setValue('2012-09-02');
		// browser.keys('Tab');
		// $('#aa_toDate').setValue('2012-09-05');
		// browser.keys('Tab');
		// const typeOfTransaction = $('#aa_type');
		// typeOfTransaction.selectByAttribute('value', 'WITHDRAWAL');
		// $('#find_transactions_form > div.pull-right > button').click();
		findTransactions.fillForm('OFFICE SUPPLY', '2012-09-02', '2012-09-05');
		// expect(
		// 	$(
		// 		'#filtered_transactions_for_account > table > tbody > tr > td:nth-child(2)'
		// 	)
		// ).toHaveText('OFFICE SUPPLY');
		findTransactions.results('OFFICE SUPPLY');
	});
});
