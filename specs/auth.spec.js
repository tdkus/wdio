import LoginPage from "../pages/login.page";
import ProfilePage from "../pages/profile.page";

describe('Auth', function() {
    it('Successful log in', async function() {
        await LoginPage.open();
        await expect(LoginPage.buttonSubmit).toBeEnabled();
        await LoginPage.login('ushakov.oa@gmail.com', 'Amiral7753191')
        await expect(ProfilePage.iconUser).toBeDisplayed();
        //await browser.url('/user/login');
        //await expect($('.MuiButton-root')).toBeEnabled();
        // .toBeDisabled();
        // await $('[id="email"]').setValue('ushakov.oa@gmail.com');
        // await $('[id="password"]').setValue('Amiral7753191');
        // await expect($('.MuiButton-root')).toBeEnabled();
        //  await $('.MuiButton-root').click();
        // await expect($('img[alt="Avatar"]')).toBeDisplayed();
        // await browser.pause(3000);
    })
});