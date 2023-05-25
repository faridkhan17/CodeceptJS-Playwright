Feature('login');

Scenario('User Login',  ({ I }) => {
    I.amOnPage('https://www.saucedemo.com/');
    I.fillField({name: 'user-name'}, 'standard_user');
    I.fillField({name: 'password'}, 'secret_sauce');
    I.click({id: 'login-button'});
    I.see('Products', '.title');
});
