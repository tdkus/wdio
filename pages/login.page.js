import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('[id="email"]'); }
    get inputPassword() { return $('[id="password"]'); }
    get buttonSubmit() { return $('.MuiButton-root'); }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await expect(this.buttonSubmit).toBeEnabled();
        await this.buttonSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/user/login');
    }
}

export default new LoginPage();
