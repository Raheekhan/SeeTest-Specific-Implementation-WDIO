describe('sms', () => {

    it('login_flow', () => {
      browser.switchContext("NATIVE_APP");

      $("//*[@id='usernameTextField']").waitForDisplayed(10000, false, "Could not find element", 2);

      $("//*[@id='usernameTextField']").addValue("company");
      $("//*[@id='passwordTextField']").addValue("company");
      $("//*[@name='loginButton']").click();
    });

  });
