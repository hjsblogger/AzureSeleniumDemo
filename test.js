/*
    LambdaTest selenium automation sample example
    Configuration
    ----------
    username: Username can be found at automation dashboard
    accessKey:  AccessKey can be generated from automation dashboard or profile section
 
    Result
    -------
    Execute NodeJS Automation Tests on LambdaTest Distributed Selenium Grid
*/
const webdriver = require('selenium-webdriver');
var assert = require('assert'); 
/*
    Setup remote driver
    Params
    ----------
    platform : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7,  macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)
    browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge, Safari)
    version :  Supported list of version can be found at https://www.lambdatest.com/capabilities-generator/
*/
 
// username: Username can be found at automation dashboard
const USERNAME = 'himanshu.sheth';
 
// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = 'fbI6kxucn5iRzwt5GWYiNvaPb4Olu9R8lwBsXWTSaIOebXn4x9';
 
// gridUrl: gridUrl can be found at automation dashboard
const GRID_HOST = 'hub.lambdatest.com/wd/hub';
 
function searchTextOnGoogle() {
    // Setup Input capabilities
    const capabilities = {
        platform: 'windows 10',
        browserName: 'chrome',
        version: '87.0',
        resolution: '1280x800',
        network: true,
        visual: true,
        console: true,
        video: true,
        //tunnel: true,
        name: 'Azure JavaScript Demo on LambdaTest', // name of the test
        build: 'Azure JavaScript Demo on LambdaTest' // name of the build
    }
 
    // URL: https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
 
    // setup and build selenium driver object
    const driver = new webdriver.Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();
 
    // navigate to a url, search for a text and get title of page
    driver.get('https://lambdatest.github.io/sample-todo-app/').then(function() {
            driver.getTitle().then(function(title) {
            setTimeout(function() {
                console.log(title);
                assert.strictEqual(title, "Sample page - lambdatest.com");
                driver.executeScript('lambda-status=passed');
                driver.quit();
            }, 5000);
        });
        
    }).catch(function(error){
        console.log("test failed with reason "+ error)
        driver.executeScript('lambda-status=failed');
        driver.quit();
    });
}
searchTextOnGoogle();
