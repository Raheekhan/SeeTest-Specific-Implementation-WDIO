describe('debug_test', () => {

    it('check_deposit', () => {
        browser.switchContext("NATIVE_APP");

        $("//*[@id='usernameTextField']").waitForDisplayed(10000, false, "Could not find element", 2);

        $("//*[@id='usernameTextField']").addValue("company");
        $("//*[@id='passwordTextField']").addValue("company");
        $("//*[@name='loginButton']").click();

        $("(//*[@id='Advanced Actions'])[1]").waitForDisplayed(10000, false, "Could not find element", 2);
        $("(//*[@id='Advanced Actions'])[1]").click();

        $("(//*[@id='Scan Check'])[1]").waitForDisplayed(10000, false, "Could not find element", 2);
        $("(//*[@id='Scan Check'])[1]").click();

        $("(//*[@id='Scan check'])[1]").waitForDisplayed(10000, false, "Could not find element", 2);
        $("(//*[@id='Scan check'])[1]").click();

        browser.execute('seetest:client.simulateCapture(\"https://www.linkpicture.com/q/qr-code.jpeg\")');

        browser.pause(10000);
    });

  });
