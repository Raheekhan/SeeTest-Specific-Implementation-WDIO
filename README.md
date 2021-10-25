# SeeTest-Specific-Implementation-WDIO

To get started with this project, first clone the project:

git clone https://github.com/Raheekhan/SeeTest-Specific-Implementation-WDIO.git

Run the following command to fetch all the necessary packages and dependencies:

npm install

Update the relevant properties in wdio.conf.js:

- Specs - Specify which file should be ran

    specs: [
        './test/specs/**/mockauthentication.js'
    ],

- 'experitest:accessKey' - Provide your Access Key
