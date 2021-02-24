import Base from '../Base';

class transactions extends Base {
	get AccountActivity1() {
		return $('#account_activity_tab');
	}
	get findTransactions() {
		return $('#tabs > ul > li:nth-child(2) > a');
	}
	get description() {
		return $('#aa_description');
	}
	get keyboardTap() {
		return browser.keys('Tab');
	}
	get dateFrom() {
		return $('#aa_fromDate');
	}
	get dateTo() {
		return $('#aa_toDate');
	}
	get typeOfTransaction() {
		return $('#aa_type');
	}
	get outcome() {
		return $(
			'#filtered_transactions_for_account > table > tbody > tr > td:nth-child(2)'
		);
	}
	get findForm() {
		return $('#find_transactions_form > div.pull-right > button');
	}

	searchTransactions() {
		this.AccountActivity1.click();
		this.findTransactions.waitForExist();
		this.findTransactions.click();
	}
	fillForm(desc, fDate, sDate) {
		this.description.setValue(desc);
		this.dateFrom.setValue(fDate);
		browser.keys('Tab');
		this.dateTo.setValue(sDate);
		browser.keys('Tab');
		this.typeOfTransaction.selectByAttribute('value', 'WITHDRAWAL');
		this.findForm.click();
	}
	results(outcome) {
		expect(this.outcome).toHaveText(outcome);
	}
}

export default new transactions();
