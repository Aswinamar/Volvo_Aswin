const WebDriver = require('webdriver');
const { assert } = require('chai');
const { default: waitUntil } = require('webdriverio/build/commands/browser/waitUntil');
const ObjectRepository = require('../Object_Repository/ObjectRepository');
const data = require('../TestData/data');
const { config } = require('../wdio.conf');
const WdioImageComparisonService = require('wdio-image-comparison-service').default;


describe('Image Validation',  ()=> {
    it('Verify the fullpage image',  async ()=> {
      return new Promise( async(resolve, reject)  => {
        let result =null;
        await browser.url('');
        await browser.maximizeWindow();
        const popup = await $(ObjectRepository.LHomePage.LAccept);
        await popup.click();
        await new Promise(r => setTimeout(r, 3000));

        const a=await browser.checkFullPageScreen('Full', { /* some options */ });
        console.log(a+'is the output');
        if(a>0) {
          console.log('THere is a mismatch and check the diff folder to find the actual difference')
        }
       
        resolve();


      })
      .catch((error) => {
        console.log("Error");
      });
    })
  })
  
