import Base from '../Base';
class Navbar extends Base {
	get signInButton() {
		return $('#signin_button');
	}
	ClickSignIn() {
		this.signInButton.waitForExist();
		this.signInButton.click();
	}
	get settingButton() {
		return $('.icon-cog');
	}
	signInBtnVisible() {
		this.signInButton.waitForExist();
	}
	get helpButton() {
		return $('#help_link');
	}
	get searchBox() {
		return $('#searchTerm');
	}

	search(text) {
		this.searchBox.waitForExist();
		this.searchBox.setValue('text');
		browser.keys('Enter');
	}

	clickSetings() {
		this.settingButton.waitForExist();
		this.settingButton.click();
	}
	clickHelp() {
		this.helpButton.waitForExist();
		this.helpButton.click();
	}
}

export default new Navbar();
