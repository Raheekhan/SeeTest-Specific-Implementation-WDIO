/**

=================================
=             READ ME           =
=================================

  This approach / concept is also applicable for Android. Same exact code may not work as the
  Application Flow in Android is different.

  The Continuous Testing platform has the ability to automate TouchID / FaceID scenarios.
  For an example, as a user, I want to validate how the Application responds when different
  authentation types are sent to the Application.

  Prerequisites:

  - The Device itself needs to be enabled with TouchID / FaceID physically (On SaaS environments we enable this by default)
  - instrumentApp needs to be sent as part of the Capabilities
  - Switch to 'NATIVE_APP' context before interacting with elements (see code below)

  The following code snippet is used to mock different behaviors:

  browser.execute('seetest:client.setAuthenticationReply(\"AuthenticationFailedError\", 1000)');

  The different authentication types can be found here:

  https://docs.experitest.com/display/TE/SetAuthenticationReply

*/

describe('mock_authentication', () => {

    it('mock_authentication_test', () => {

      browser.switchContext("NATIVE_APP");

      $("//*[@id='usernameTextField']").waitForDisplayed(10000, false, "Could not find element", 2);

      $("//*[@id='usernameTextField']").addValue("company");
      $("//*[@id='passwordTextField']").addValue("company");
      $("//*[@name='loginButton']").click();

      $("(//*[@id='Advanced Actions'])[1]").waitForDisplayed(10000, false, "Could not find element", 2);
      $("(//*[@id='Advanced Actions'])[1]").click();

      browser.execute('seetest:client.setAuthenticationReply(\"Success\", 1000)');

      $("//XCUIElementTypeButton[@id='Account Info']").waitForDisplayed(10000, false, "Could not find element", 2);
      $("//XCUIElementTypeButton[@id='Account Info']").click();

      browser.pause(5000);

      $("//*[@id='Back']").waitForDisplayed(10000, false, "Could not find element", 2);
      $("//*[@id='Back']").click();

      browser.execute('seetest:client.setAuthenticationReply(\"AuthenticationFailedError\", 1000)');

      $("//XCUIElementTypeButton[@id='Account Info']").waitForDisplayed(10000, false, "Could not find element", 2);
      $("//XCUIElementTypeButton[@id='Account Info']").click();

      browser.pause(5000);
    });

  });
