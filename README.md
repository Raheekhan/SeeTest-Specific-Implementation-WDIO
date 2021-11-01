# SeeTest-Specific-Implementation-WDIO

To get started with this project, first clone the project:

git clone https://github.com/Raheekhan/SeeTest-Specific-Implementation-WDIO.git

Run the following command to fetch all the necessary packages and dependencies:

```
npm install
```

Update the relevant properties in **wdio.conf.js**:

- Specs - Specify which file should be ran

```
    specs: [
        './test/specs/**/mockauthentication.js'
    ]
```    

- 'experitest:accessKey' - Provide your Access Key

To run the project, run the following command:

```
wdio wdio.conf.js
```

## Parallel Testing

In order to achieve Parallel Tests, I have used the npm package "**npm-run-all**":
https://www.npmjs.com/package/npm-run-all

And under package.json, I have defined the following section:

```
"scripts": {
  "one": "wdio wdio.conf.js",
  "two": "wdio wdio.conf.js",
  "all": "./node_modules/.bin/npm-run-all --parallel one two"
}
```

What we are doing here is creating two separate instances called "**one**" and "**two**".
Under "**all**" I am referencing **npm-run-all** and passing on a parameter called **--parallel**, telling it
to run both "**one**" and "**two**" in parallel.

By running the command "**npm run all**", it will trigger the **wdio.conf.js** twice in parallel.
