import Base from '../Base';

class exchangePage extends Base {
	get payBills() {
		return $('#pay_bills_tab');
	}
	get foreignCurrency() {
		return $('#tabs > ul > li:nth-child(3) > a');
	}
	get selectCurrency1() {
		return $('#pc_currency');
	}
	get amount() {
		return $('#pc_amount');
	}
	get selectCurrency2() {
		return $(
			'#pc_purchase_currency_form > div.board > div > article > fieldset > div:nth-child(3) > div > label:nth-child(3)'
		);
	}
	get purchase() {
		return $('#purchase_cash');
	}
	get alert() {
		return $('#alert_content');
	}

	openCurrency() {
		this.payBills.waitForExist();
		this.payBills.click();
		this.foreignCurrency.waitForExist();
		this.foreignCurrency.click();
	}
	selectCurrency() {
		this.selectCurrency1.waitForExist();
		this.selectCurrency1.click();
		this.selectCurrency1.selectByAttribute('value', 'GBP');
	}
	selectAmount(amount) {
		this.amount.setValue(amount);
	}

	purchaseCash() {
		this.selectCurrency2.click();
		this.purchase.click();
	}

	alertMsg() {
		this.alert.waitForExist();
		expect($(this.alert)).toHaveText(
			'Foreign currency cash was successfully purchased.'
		);
	}
}
export default new exchangePage();
