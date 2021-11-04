/**

=================================
=             READ ME           =
=================================

  This approach / concept is also applicable for Android. Same exact code may not work as the
  Application Flow in Android is different.

  The Continuous Testing platform has the ability to automate Check Deposit / QR / Bar Code Scanning scenarios.
  For an example, as a user, I want to automate the flow of doing a deposit using a Check.

  Prerequisites:

  - instrumentApp needs to be sent as part of the Capabilities
  - Switch to 'NATIVE_APP' context before interacting with elements (see code below)
  - Android ONLY - the app must require and acquire the permission “android.permission.WRITE_EXTERNAL_STORAGE”

  The following code snippet is used to mock different behaviors:

  browser.execute('seetest:client.simulateCapture(\"<LINK_TO_URL>\")');

  https://docs.experitest.com/display/TE/SimulateCapture

*/

describe('check_deposit', () => {

    it('check_deposit_test', () => {
        browser.switchContext("NATIVE_APP");

        $("//*[@id='usernameTextField']").waitForDisplayed(10000, false, "Could not find element", 2);

        $("//*[@id='usernameTextField']").addValue("company");
        $("//*[@id='passwordTextField']").addValue("company");
        $("//*[@name='loginButton']").click();

        $("(//*[@id='Advanced Actions'])[1]").waitForDisplayed(10000, false, "Could not find element", 2);
        $("(//*[@id='Advanced Actions'])[1]").click();

        $("//XCUIElementTypeButton[@id='Scan Check']").waitForDisplayed(10000, false, "Could not find element", 2);
        $("//XCUIElementTypeButton[@id='Scan Check']").click();

        $("//XCUIElementTypeButton[@id='Scan check']").waitForDisplayed(10000, false, "Could not find element", 2);
        $("//XCUIElementTypeButton[@id='Scan check']").click();

        // browser.execute('seetest:client.simulateCapture(\"https://imagesforseetesttesting.s3.us-east-2.amazonaws.com/check.jpeg\")');

        browser.pause(10000);
    });

  });
