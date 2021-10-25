describe('github_login', () => {

    it('invalid_credentials_validation', () => {

      for (let i = 0; i < 10; i++) {
        browser.url('https://github.com/login');

        $("#login_field").waitForDisplayed(10000, false, "Could not find element", 2);

        $('#login_field').addValue("dummyuser");
        $('#password').addValue("dummyuser");
        $('[name="commit"]').click();

        browser.pause(10000);
      }

    });

  });
