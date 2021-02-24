import Base from '../Base';

class LoginPage extends Base {
	get LoginForm() {
		return $('#login_form');
	}

	get usernameInput() {
		return $('#user_login');
	}

	get passwordInput() {
		return $('#user_password');
	}

	get submitButton() {
		return $('.btn-primary');
	}

	get error() {
		return $('.alert-error');
	}

	get homePageLogedIn() {
		return $('#account_summary_tab');
	}

	homePageLoged() {
		this.homePageLogedIn.waitForExist();
	}

	formIsVisible() {
		this.LoginForm.waitForExist();
	}

	fillForm(username, password) {
		this.usernameInput.setValue(username);
		this.passwordInput.setValue(password);
	}
	submitForm() {
		this.submitButton.click();
	}
	login(username, password) {
		this.usernameInput.setValue(username);
		this.passwordInput.setValue(password);
		this.submitButton.click();
		this.homePageLogedIn.waitForExist();
	}
}
export default new LoginPage();
