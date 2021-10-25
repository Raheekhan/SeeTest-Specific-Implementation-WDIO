exports.config = {

    hostname: 'uscloud.experitest.com',
    port: 443,
    path: '/wd/hub',
    protocol: 'https',

    specs: [
        './test/specs/**/simulatecapture.js'
    ],

    capabilities: [{
        'experitest:accessKey': '', // TODO: Provide your Access Key
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
