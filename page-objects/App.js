class App {
	openHomePage() {
		browser.url('http://zero.webappsecurity.com/');
	}
	logout() {
		browser.url('http://zero.webappsecurity.com/logout.html');
	}
	openLoginPage() {
		browser.url('http://zero.webappsecurity.com/login.html');
	}
	openFeedback() {
		browser.url('http://zero.webappsecurity.com/feedback.html');
	}
}

export default new App();
