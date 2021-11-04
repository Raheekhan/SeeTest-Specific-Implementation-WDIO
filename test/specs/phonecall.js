/**

=================================
=             READ ME           =
=================================

  This approach / concept is also applicable for Android. Same exact code may not work as the
  Application Flow in Android is different.

  It is possible to automate flows related to Phone Calls, it could be in regards to scenarios such as:

      - Answer / Decline Calls
      - Perform inputs from the Num Pad

  Since we are able to identify objects and elements from System Applications, we can easily
  identify objects such as incoming calls, or open the Phone Application to perform
  different type of validations.

  There is a folder under /specs/ called 'images_for_sms_phone' with an example of
  an image named 'Incoming_Call_Object_spy.png' to show how objects are displayed.

  In below example we will look at a simple code that does the following:

      - Awaits for an incoming Phone Call
      - Answers the Call
      - Waits for some time
      - Ends the Call

  This example will work given:

    - The device is set up with a valid Sim Card
    - There is an incoming call

*/

describe('phone_call', () => {

    it('phone_call_test', () => {
      const answerCall = $("//*[@text='Answer call']");

      answerCall.waitForDisplayed(20000, false, "Could not find element", 2);
      answerCall.click();

      browser.pause(10000);

      const endCall = $("//*[@text='End call']");
      endCall.waitForDisplayed(20000, false, "Could not find element", 2);
      endCall.click();
    });

  });
