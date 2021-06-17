const WebDriver = require('webdriver');
const { assert } = require('chai');
const { default: waitUntil } = require('webdriverio/build/commands/browser/waitUntil');
const ObjectRepository = require('../Object_Repository/ObjectRepository');
const data = require('../TestData/data');
const { config } = require('../wdio.conf');
const WdioImageComparisonService = require('wdio-image-comparison-service').default;


  describe('Image Validation',  ()=> {
    it.skip('Verify the tabbable options',  async ()=> {
      return new Promise( async(resolve, reject)  => {
        await browser.url('');
        await browser.maximizeWindow();
        const popup = await $(ObjectRepository.LHomePage.LAccept);
        await popup.click();
        await new Promise(r => setTimeout(r, 5000));


        const b=await browser.checkTabbablePage('check-tabbable', { /* some options */ });
        console.log(b+'is the output');
        if(b>0) {
          console.log('THere is a mismatch and check the diff folder to find the actual difference')
        }

        resolve();
      })
      .catch((error) => {
        console.log("Error");
      });
    })
  })