/**

=================================
=             READ ME           =
=================================

  This approach / concept is also applicable for Android. Same exact code may not work as the
  Application Flow in Android is different.

  It is possible to automate flows related to SMS, it could be in regards to scenarios such as:

      - Regular sms
      - OTP
      - Two Factor

  Since we are able to identify objects and elements from System Applications, we can easily
  identify objects such as SMS notifications, or open the Message Application to perform
  different type of validations.

  There is a folder under /specs/ called 'images_for_sms_phone' with an example of
  an image named 'SMS_Notification_ObjectSpy.png' to show how objects are displayed.

  In below example we will look at a simple code that does the following:

      - Awaits for an SMS Notification to appear
      - Gets the Text from the Notification
      - Clicks on the Notification
      - Verify user is on the Messages Application

  This example will work given:

      - The device is set up with a valid Sim Card
      - There is an sms notification

*/

describe('sms', () => {

    it('sms_test', () => {
      const smsNotification = $("//*[@id='NotificationShortLookView']");

      smsNotification.waitForDisplayed(20000, false, "Could not find element", 2);
      var text = smsNotification.getText();
      smsNotification.click();

      $("//*[@id='CKChat']").waitForDisplayed(10000, false, "Could not find element", 2);
    });

  });
