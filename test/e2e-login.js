import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';
describe('E2E Tests -login logout flow', () => {
	it('should not log in with invalid credentials', () => {
		//browser.url('http://zero.webappsecurity.com/');
		App.openHomePage();
		// const button = $('signin_button');
		// button.waitForExist();
		//same as above but shorter
		// $('#signin_button').waitForExist();
		// $('#signin_button').click();
		Navbar.ClickSignIn();
		LoginPage.pauseShort();
		// $('#login_form').waitForExist();
		// $('#user_login').setValue('hello there');
		// $('#user_password').setValue('123456');
		// $('.btn-primary').click();
		LoginPage.formIsVisible();
		LoginPage.fillForm('invalid', 'invalid');
		LoginPage.submitForm();

		const error = LoginPage.error;
		expect(error).toHaveText('Login and/or password are wrong.');
	});
	it('should log in with valid crudentials', () => {
		browser.url('http://zero.webappsecurity.com/');
		// const button = $('signin_button');
		// button.waitForExist();
		//same as above but shorter
		// $('#signin_button').waitForExist();
		// $('#signin_button').click();
		Navbar.ClickSignIn();
		// $('#login_form').waitForExist();
		// $('#user_login').setValue('username');
		// $('#user_password').setValue('password');
		// $('.btn-primary').click();
		LoginPage.formIsVisible();
		LoginPage.fillForm('username', 'password');
		LoginPage.submitForm();
		//$('#account_summary_tab').waitForExist();
		LoginPage.homePageLoged();
	});
	it('should log out from app', () => {
		// $('.icon-user').waitForExist();
		// $('.icon-user').click();
		// browser.pause(2000);
		// $('#logout_link').waitForExist();
		// browser.pause(2000);
		// $('#logout_link').click();
		App.logout();
		//$('#signin_button').waitForExist();
		Navbar.signInBtnVisible();
	});
});
