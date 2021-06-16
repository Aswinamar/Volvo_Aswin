var lib = require('../Utils/lib');
const WebDriver = require('webdriver');
const { assert } = require('chai');
const { default: waitUntil } = require('webdriverio/build/commands/browser/waitUntil');
const ObjectRepository = require('../Object_Repository/ObjectRepository');
const data = require('../TestData/data');


describe('Volvo Test Validation',  ()=> {

    it('Login Website',  async ()=> {
      await browser.url('');
      await browser.maximizeWindow();
    })

    it('Title Validation',  async ()=> {
      const title =await browser.getTitle();
      assert.equal(title,data.StringValues.DHeader);
    })
      it('PopUp Closing',  async ()=> {
      const popup = await $(ObjectRepository.LHomePage.LAccept);
      await popup.click();
    })
    it('Home Page Navigation check',  async ()=> {
      await browser.waitUntil(
        () => $(ObjectRepository.LHomePage.LHomeH2).getText() === data.StringValues.DHomeH2,
        {
            timeout: 8000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );
  })
  it('Footer Validation',  async ()=> {
    let testValue = data.ArrayValues.footerData;
    let value=null;
    let footerbt =null;
    footerbt = await $(ObjectRepository.LHomePage.LFooter+'a[1]');
     value = await footerbt.getText();
     assert.equal(value,testValue[0]);

     footerbt = await $(ObjectRepository.LHomePage.LFooter+'a[2]');
     value = await footerbt.getText();
     assert.equal(value,testValue[1]);

     footerbt = await $(ObjectRepository.LHomePage.LFooter+'a[3]');
     value = await footerbt.getText();
     assert.equal(value,testValue[2]);

     footerbt = await $(ObjectRepository.LHomePage.LFooter+'a[4]');
     value = await footerbt.getText();
     assert.equal(value,testValue[3]);
})

})
describe('Hamburger Validation',  ()=> {
  it('Hamburger SubMenu Validation',  async ()=> {
        const hamburger = await $('//button[@id="sitenav-v2-sidenav-toggle"]');
        await hamburger.click();
        const menu1 = await $('//div[@data-autoid="nav:sideNavLinksMenu"]/button[1]');
        const value = await menu1.getText();
        assert.equal(value,'Buy');
  
        const menu2 = await $('//div[@data-autoid="nav:sideNavLinksMenu"]/button[2]');
        const value1 = await menu2.getText();
        assert.equal(value1,'Own');
  
        const menu3 = await $('//div[@data-autoid="nav:sideNavLinksMenu"]/button[3]');
        const value2 = await menu3.getText();
        assert.equal(value2,'Why Volvo');
  
        const menu4 = await $('//div[@data-autoid="nav:sideNavLinksMenu"]/button[4]');
        const value3 = await menu4.getText();
        assert.equal(value3,'Explore');
  
        const menu5 = await $('//div[@data-autoid="nav:sideNavLinksMenu"]/button[5]');
        const value4 = await menu5.getText();
        assert.equal(value4,'More');
  
        const menu6 = await $('//button[@data-autoid="nav:sideNavMarketContainer"]');
        const value5 = await menu6.getText();
        assert.equal(value5,'International');
        
  })
})