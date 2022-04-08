import Page from './page';

class ProfilePage extends Page {
   get iconUser() { return $('img[alt="Avatar"]'); }
}

export default new ProfilePage();
