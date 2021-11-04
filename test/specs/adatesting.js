/**

=================================
=             READ ME           =
=================================

  This approach / concept is also applicable for Android. Same exact code may not work as the
  Application Flow in Android is different.

  In this section, we will look at two different topics, and see how to combine both.

  When we are doing Accessibility Testing from a Manual Perspective, here's a sample user flow:

    1. Enable VoiceOver (iOS) / Talkback (Android) on the phone
    2. Perform multi gesture operations to mimic an operation (Such as tapping on object, moving to next object)
    3. Listen to the audio output, and based on the output, perform our next operation

  If we want to automate this, we need to break this down into two parts:

    1. Being able to send multi gesture commands from script
    2. Being able to capture the audio being sent from the phone

  ============================
  == Multi Gesture commands ==
  ============================

  We have developed a command called "sendKeysWithBT", allowing us to send keyboard
  operations from automation script, to mimic Accessibility Users.

  A full list of supported operations can be found here:
  https://docs.experitest.com/display/LT/Keyboard+shortcuts+for+VoiceOver+and+Talkback

  Here's how we can use the command from script:

    browser.execute('seetest:client.sendKeysWithBT', "\uE014");

  In this example, I am sending the "Right Arrow" operation using Unicode reference, based on this:
  https://selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/Keys.html

  ====================
  == Audio commands ==
  ====================

  We have developed few commands for Audio:

    1. startAudioRecording - Allows us to start an audio recording from the device
    2. stopAudioRecording - To stop the recording of the audio
    3. startAudioPlay - Allows us to play back audio to the phone with a pre-recorded audio file
    4. stopAudioPlay - To stop the playback of the audio

  We need to take into consideration that this does not work with local files.
  We need to utilize the in built "File Repository" which allows us to upload / download files to a repository in the SeeTest Cloud.

  Here's a full list of APIs available for the File Repository:
  https://docs.experitest.com/display/PM/File+Repository+Rest+API

  Let's look at an example:

    browser.execute('seetest:client.startAudioRecording', 'cloud:login_2.wav');
    browser.execute('seetest:client.sendKeysWithBT', "\uE014");
    browser.execute('seetest:client.stopAudioRecording');

  What we are doing here is to start the Audio Recording, telling it to store in the "cloud:"
  and passing in a name that we want to store it as.

  We are then performing a gesture operation through VoiceOver / TalkBack.

  And finally, stopping the audio recording.

  This Audio file is now available in the File Repository, which can be fetched using the following API(s):

    GET /api/v1/files
    GET /api/v1/files/<fileId>

  We can choose to download the file to our local machine by running the following API:

    GET /api/v1/files/<fileId>/download

*/

var unirest = require('unirest');
var fs = require('fs');

const accessKey = '';

const audioFileName = 'login.wav';

describe('ada', () => {

    before('setup', () => {
      browser.execute('seetest:client.startAudioRecording', `cloud:${audioFileName}`);
    });

    after('teardown', () => {
      browser.execute('seetest:client.stopAudioRecording');
    });

    it('ada_test', () => {
        sendKeysWithBT("\uE014", "Sending Right Arrow");
        browser.pause(5000);
        sendKeysWithBT("\uE014", "Sending Right Arrow");
        browser.pause(5000);
        sendKeysWithBT("\uE014", "Sending Right Arrow");
        browser.pause(5000);
    });

    // it('download_file', () => {
    //     // downloadFile2('2864553');
    //     // getFiles();
    //     df('2864553');
    // });

  });

function sendKeysWithBT(unicodeKey, customMessage) {
  browser.execute('seetest:client.sendKeysWithBT', unicodeKey);
  browser.execute(`seetest:client.report(\"${customMessage}\", \"true\")`);
}

function getFiles() {
  var request = unirest('GET', 'https://uscloud.experitest.com/api/v1/files')
    .headers({
      'content-type': 'application/json',
      'Authorization': `Bearer ${accessKey}`
    })
    .end((res) => {
      if (res.error) throw new Error(res.error);
      console.log(res.raw_body);
    });
}

function deleteFile(fileId) {
  var request = unirest('DELETE', `https://uscloud.experitest.com/api/v1/files/${fileId}`)
    .headers({
      'content-type': 'application/json',
      'Authorization': `Bearer ${accessKey}`
    })
    .end((res) => {
      if (res.error) throw new Error(res.error);
      console.log(res.raw_body);
    });
}

function downloadFile(fileId) {
  var request = unirest('GET', `https://uscloud.experitest.com/api/v1/files/${fileId}/download`)
    .headers({
      'content-type': 'application/json',
      'Authorization': `Bearer ${accessKey}`
    })
    .end((res) => {
      if (res.error) throw new Error(res.error);
      console.log(res.raw_body);
    });
}
