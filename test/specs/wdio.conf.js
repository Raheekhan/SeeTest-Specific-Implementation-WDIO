exports.config = {

    hostname: 'uscloud.experitest.com',
    port: 443,
    path: '/wd/hub',
    protocol: 'https',

    specs: [
        './test/specs/**/simulatecapture.js'
    ],

    capabilities: [{
        'experitest:accessKey': 'eyJ4cC51Ijo3MzU0MjQsInhwLnAiOjIsInhwLm0iOiJNVFUzT0RZd016ZzFOek16TVEiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE4OTM5NjM4NTcsImlzcyI6ImNvbS5leHBlcml0ZXN0In0.GP0hK0o0j2WEKt-J0aXsVbu1tmt-PhWUryqluokszJk', // TODO: Provide your Access Key
        deviceQuery: "@os='ios'",
        platformName: 'iOS',
        automationName: 'XCUITest',
        app: 'cloud:com.experitest.ExperiBank',
        bundleId: 'com.experitest.ExperiBank',
        autoAcceptAlerts: true,
        instrumentApp: true,
        dontGoHomeOnQuit: true,
        // appiumVersion: '1.20.2',
    }],

    maxInstances: 10,
    bail: 0,
    // baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    }

}
