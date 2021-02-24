import Base from '../Base';

class feedbackPage extends Base {
	get feedbackTitle() {
		return $('#feedback-title');
	}
	get name() {
		return $('#name');
	}
	get email() {
		return $('#email');
	}
	get subject() {
		return $('#subject');
	}
	get comment() {
		return $('#comment');
	}
	get submit() {
		return $('input[type="submit"]');
	}

	feedbackVisible() {
		this.feedbackTitle.waitForExist();
	}

	fillForm(name, email, comment) {
		this.name.setValue(name);
		this.email.setValue(email);
		this.comment.setValue(comment);
		this.submit.click();
	}
}

export default new feedbackPage();
