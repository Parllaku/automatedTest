import App from '../page-objects/App';
import feedbackPage from '../page-objects/pages/feedbackPage';
describe('e2e feedback test', () => {
	it('opens feedback page', () => {
		//browser.url('http://zero.webappsecurity.com/index.html');
		// App.openHomePage();
		// $('.brand').waitForExist();
		// $('#feedback').click();
		App.openFeedback();
		feedbackPage.feedbackVisible();
	});
	it('fills form and send', () => {
		// $('#name').setValue('user');
		// $('#email').setValue('email');
		// $('#subject').setValue('subject');
		// $('#comment').setValue('comment');

		//$('.btn-primary').click();
		//same as above
		// $('input[type="submit"]').click();
		// browser.pause(2000);
		// $('.brand').waitForExist();
		feedbackPage.fillForm('sam', 'lyffy', 'zoro');

		expect($('#feedback-title')).toHaveText('Feedback');
	});
});
