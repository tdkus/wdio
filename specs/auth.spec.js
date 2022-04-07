describe('Auth', function() {
    it('Successful log in', async function() {
        await browser.url('/user/login');
        await expect($('.MuiButton-root'))
            .toBeEnabled();
        // .toBeDisabled();
        await $('[id="email"]')
            .setValue('ushakov.oa@gmail.com');
        await $('[id="password"]')
            .setValue('Amiral7753191');
        await expect($('.MuiButton-root'))
            .toBeEnabled();
        await $('.MuiButton-root')
            .click();
        await expect($('img[alt="Avatar"]'))
            .toBeDisplayed();
        //await browser.pause(3000);
    })
});