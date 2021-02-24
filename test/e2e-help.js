import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';
import helpPage from '../page-objects/pages/helpPage';
describe('hepl section', () => {
	it('should log in with valid crudentials', () => {
		App.openLoginPage();
		LoginPage.login('username', 'password');
		LoginPage.homePageLoged();
	});
	it('should load the help content', () => {
		//$('.icon-cog').click();
		Navbar.clickSetings();
		// $('#help_link').waitForExist();
		// $('#help_link').click();
		Navbar.clickHelp();
		const title = helpPage.help; // describes the child of the class
		expect(title).toHaveText('How do I log into my account?');
		// $('*=transfer funds?').click(); //finds th text and if it is uniue than it clicks it
		helpPage.clickOnTransferFunds();
		expect(title).toHaveText('How do I transfer funds?');
		// $('*=pay bills?').click();
		helpPage.clickOnPayBills();
		expect(title).toHaveText('How do I pay bills?');
	});
});
