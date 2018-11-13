const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const firefox = require('selenium-webdriver/firefox');

describe('Google Search', function() {
  let driver;

  before(function() {
    let options = new firefox.Options()
    options.setPreference("media.navigator.streams.fake", true);
    driver = new Builder()
              .forBrowser('firefox')
              .setFirefoxOptions(options)
              .build();
  });

  // it('example', function theTestFunction() {
  //   driver.get('http://www.google.com/ncr');                          // (1)
  //   driver.findElement(By.name('q')).sendKeys('webdriver');           // (2)
  //   driver.findElement(By.name('btnK')).click();                      // (3)
  //   driver.wait(until.titleIs('webdriver - Google Search'), 1000);    // (4)
  // });

  it('webRTC page', function theTestFunction() {
    driver.get('http://localhost:8080');                          // (1)
  });

  after(function() {
    // driver.quit();
  });
});
