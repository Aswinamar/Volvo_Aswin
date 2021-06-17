const WebDriver = require('webdriver');
const { assert } = require('chai');
const { default: waitUntil } = require('webdriverio/build/commands/browser/waitUntil');
const ObjectRepository = require('../Object_Repository/ObjectRepository');
const data = require('../TestData/data');
const { config } = require('../wdio.conf');

describe('LinkValidation',  ()=> {
    it('Verify the Learn more hyperlink',  async ()=> {
      return new Promise( async(resolve, reject)  => {
        await browser.url('');
        await browser.maximizeWindow();
        const popup = await $(ObjectRepository.LHomePage.LAccept);
        await popup.click();

        await new Promise(r => setTimeout(r, 2000));
        const val =await $(ObjectRepository.LHomePage.LlearnMore);
        console.log("Step1");
        await val.scrollIntoView();
        console.log("Scroll success");
        let res = await val.isDisplayed();
        console.log(res+"is the result")
        assert.equal(res,true);
        
        resolve();
                  })
                  .catch((error) => {
                    console.log("Error");
                  });
                })
    it('Verify the Innovation LearnMoreButton',  async ()=> {
      return new Promise( async(resolve, reject)  => {
        
        const val =await $(ObjectRepository.LHomePage.LlearnMoreInnovation);
        await new Promise(r => setTimeout(r, 2000));
        let res = await val.isClickable();
        assert.equal(res,true);
        
        resolve();
                  })
                  .catch((error) => {
                    console.log("Error");
                  });
                })
     it('Verify the learn button in Explore more models',  async ()=> {
                  return new Promise( async(resolve, reject)  => {
                    
                    const val =await $(ObjectRepository.LHomePage.LlearnModels);
                    await new Promise(r => setTimeout(r, 2000));
                    let res = await val.isClickable();
                    assert.equal(res,true);
                    
                    resolve();
                              })
                              .catch((error) => {
                                console.log("Error");
                              });
    })
    it('Verify the shop button in Explore more models',  async ()=> {
      return new Promise( async(resolve, reject)  => {
        
        const val =await $(ObjectRepository.LHomePage.LshopModels);
        await new Promise(r => setTimeout(r, 2000));

        let res = await val.isClickable();
        assert.equal(res,true);
        
        resolve();
                  })
                  .catch((error) => {
                    console.log("Error");
                  });
})
it('Verify the Recharge button in Explore more models',  async ()=> {
  return new Promise( async(resolve, reject)  => {
    
    const val =await $(ObjectRepository.LHomePage.LRechargeModels);
    let res = await val.isClickable();
    assert.equal(res,true);
    
    resolve();
              })
              .catch((error) => {
                console.log("Error");
              });
})
it('Verify the Recharge button in Explore more models',  async ()=> {
  return new Promise( async(resolve, reject)  => {
    
    const val =await $(ObjectRepository.LHomePage.LRechargeModels);
    let res = await val.isClickable();
    assert.equal(res,true);
    
    resolve();
              })
              .catch((error) => {
                console.log("Error");
              });
})
it('Verify the Mild Hybrid Cars button in Explore more models',  async ()=> {
  return new Promise( async(resolve, reject)  => {
    
    const val =await $(ObjectRepository.LHomePage.LMildHybridCarsModels);
    await new Promise(r => setTimeout(r, 2000));

    let res = await val.isClickable();
    assert.equal(res,true);
    
    resolve();
              })
              .catch((error) => {
                console.log("Error");
              });
})    
it('Verify the Cookies hyperlink button in the footer',  async ()=> {
  return new Promise( async(resolve, reject)  => {
    let testObj = ObjectRepository.LHomePage.LFooter;

    footerbt = await $(testObj+'a[1]');
    await new Promise(r => setTimeout(r, 2000));

    let res = await footerbt.isClickable();
    assert.equal(res,true);
    
    resolve();
              })
              .catch((error) => {
                console.log("Error");
              });
})  
it('Verify the Legal hyperlink button in the footer',  async ()=> {
  return new Promise( async(resolve, reject)  => {
    let testObj = ObjectRepository.LHomePage.LFooter;

    footerbt = await $(testObj+'a[2]');
    let res = await footerbt.isClickable();
    assert.equal(res,true);
    
    resolve();
              })
              .catch((error) => {
                console.log("Error");
              });
})  
it('Verify the Privacy hyperlink button in the footer',  async ()=> {
  return new Promise( async(resolve, reject)  => {
    let testObj = ObjectRepository.LHomePage.LFooter;

    footerbt = await $(testObj+'a[3]');
    let res = await footerbt.isClickable();
    assert.equal(res,true);
    
    resolve();
              })
              .catch((error) => {
                console.log("Error");
              });
}) 
it('Verify the SOcial Media hyperlink button in the footer',  async ()=> {
  return new Promise( async(resolve, reject)  => {
    let testObj = ObjectRepository.LHomePage.LFooter;

    footerbt = await $(testObj+'a[4]');
    await new Promise(r => setTimeout(r, 2000));
    let res = await footerbt.isDisplayed();
    assert.equal(res,true);
    
    resolve();
              })
              .catch((error) => {
                console.log("Error");
              });
})         
    })
    