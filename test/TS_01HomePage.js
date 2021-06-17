const WebDriver = require('webdriver');
const { assert } = require('chai');
const { default: waitUntil } = require('webdriverio/build/commands/browser/waitUntil');
const ObjectRepository = require('../Object_Repository/ObjectRepository');
const data = require('../TestData/data');
const { config } = require('../wdio.conf');


describe('Home Page Validation',  ()=> {

    it('Verify the URL launch of the volvo cars website',  async ()=> {
      
      return new Promise( async(resolve, reject)  => {
        await browser.url('');
        await browser.maximizeWindow();
        resolve();
      })
      .catch((error) => {
        console.log("Error");
      });
    })

    it('Verify the browser title of the opened URL',  async ()=> {
      return new Promise(async (resolve, reject) => {
      const title =await browser.getTitle();
       assert.equal(title,data.StringValues.DHeader);
       resolve();

    })
    .catch((error) => {
      console.log("Error");
    });
  })
      it('Verify the popup and accept the same',  async ()=> {
        return new Promise( async(resolve, reject)  => {
      const popup = await $(ObjectRepository.LHomePage.LAccept);
      await popup.click();
      resolve();
    })
    .catch((error) => {
      console.log("Error");
    });
  })
    it('Verify if any element is loaded in the home page',  async ()=> {
      return new Promise( async(resolve, reject)  => {
         let obj =await $(ObjectRepository.LHomePage.LHomeH2);
         let val = data.StringValues.DHomeH2;
         console.log("step1");
        assert.equal(await obj.getText(),val);
        console.log("step2");
    resolve();
  })
  .catch((error) => {
    console.log("Error");
  });
})
  it('Verify the footer options in the home page',  async ()=> {
    return new Promise( async(resolve, reject)  => {
    let testValue = data.ArrayValues.footerData;
    let value=null;
    let footerbt =null;
    let testObj = ObjectRepository.LHomePage.LFooter;

    footerbt = await $(testObj+'a[1]');
     value = await footerbt.getText();
     assert.equal(value,testValue[0]);

     footerbt = await $(testObj+'a[2]');
     value = await footerbt.getText();
     assert.equal(value,testValue[1]);

     footerbt = await $(testObj+'a[3]');
     value = await footerbt.getText();
     assert.equal(value,testValue[2]);

     footerbt = await $(testObj+'a[4]');
     value = await footerbt.getText();
     assert.equal(value,testValue[3]);
     resolve();
    })
    .catch((error) => {
      console.log("Error");
    });
  })

})
describe('Hamburger Validation',  ()=> {
  it('Verify the Menus available in hamburger',  async ()=> {
    return new Promise( async(resolve, reject)  => {

    let testValue = data.ArrayValues.HambData;
    let value=null;
    let hambMenu =null;
    let testObj = ObjectRepository.LHamburger.LHambAllMenu;

        
        const hamburger = await $(ObjectRepository.LHamburger.LHamMenu);
        await hamburger.click();
        await new Promise(r => setTimeout(r, 2000));

        hambMenu = await $(testObj+'[1]');
        value = await hambMenu.getText();   
        assert.equal(value,testValue[0]);


        hambMenu = await $(testObj+'[2]');
        value = await hambMenu.getText();
        assert.equal(value,testValue[1]);

        hambMenu = await $(testObj+'[3]');
        value = await hambMenu.getText();
        assert.equal(value,testValue[2]);

        hambMenu = await $(testObj+'[4]');
        value = await hambMenu.getText();
        assert.equal(value,testValue[3]);

        hambMenu = await $(testObj+'[5]');
        value = await hambMenu.getText();
        assert.equal(value,testValue[4]);

        hambMenu = await $(ObjectRepository.LHamburger.LHambInternational);
        value = await hambMenu.getText();
        assert.equal(value,testValue[5]);

        
        
        resolve();
      })
      .catch((error) => {
        console.log("Error");
      });
    })
  
    
  
    it('Verify the subMenus available in Buy',  async ()=> {
      return new Promise( async(resolve, reject)  => {
  
      let testValue = data.ArrayValues.BuyData;
      let value=null;
      let hambMenu =null;
      let testObj = ObjectRepository.LHamburger.LHambAllMenu;
      let testObj1 = ObjectRepository.LHamburger.LsubMenu;

  
          hambMenu = await $(testObj+'[1]');
          await hambMenu.click();

          hambMenu = await $(testObj1+'[1]');
          value = await hambMenu.getText();
          assert.equal(value,testValue[0]);
          console.log(value +' '+ testValue[0]);

          hambMenu = await $(testObj1+'[2]');
          value = await hambMenu.getText();
          assert.equal(value,testValue[1]);
          console.log(value +' '+ testValue[1]);

          hambMenu = await $(testObj1+'[3]');
          value = await hambMenu.getText();
          assert.equal(value,testValue[2]);
          console.log(value +' '+ testValue[2]);

          hambMenu = await $(testObj1+'[4]');
          value = await hambMenu.getText();
          assert.equal(value,testValue[3]);
  
          hambMenu = await $(testObj1+'[5]');
          value = await hambMenu.getText();
          assert.equal(value,testValue[4]);
          
          value = await $(ObjectRepository.LHamburger.LHambGoBack)
          await value.click();
          resolve();
        })
        .catch((error) => {
          console.log("Error");
        });
      })
      it('Verify the subMenus available in Own',  async ()=> {
        return new Promise( async(resolve, reject)  => {
    
        let testValue = data.ArrayValues.OwnData;
        let value=null;
        let hambMenu =null;
        let testObj = ObjectRepository.LHamburger.LHambAllMenu;
        let testObj1 = ObjectRepository.LHamburger.LsubMenu;
  
    
            hambMenu = await $(testObj+'[2]');
            await hambMenu.click();
  
            hambMenu = await $(testObj1+'[1]');
            value = await hambMenu.getText();
            assert.equal(value,testValue[0]);
            console.log(value +' '+ testValue[0]);
  
            hambMenu = await $(testObj1+'[2]');
            value = await hambMenu.getText();
            assert.equal(value,testValue[1]);
            console.log(value +' '+ testValue[1]);
  
            hambMenu = await $(testObj1+'[3]');
            value = await hambMenu.getText();
            assert.equal(value,testValue[2]);
            console.log(value +' '+ testValue[2]);
  
            hambMenu = await $(testObj1+'[4]');
            value = await hambMenu.getText();
            assert.equal(value,testValue[3]);
    
            hambMenu = await $(testObj1+'[5]');
            value = await hambMenu.getText();
            assert.equal(value,testValue[4]);

            hambMenu = await $(testObj1+'[6]');
            value = await hambMenu.getText();
            assert.equal(value,testValue[5]);
            
            value = await $(ObjectRepository.LHamburger.LHambGoBack)
            await value.click();
            resolve();
          })
          .catch((error) => {
            console.log("Error");
          });
        })

        it('Verify the subMenus available in why volvo',  async ()=> {
          return new Promise( async(resolve, reject)  => {
      
          let testValue = data.ArrayValues.whyVolvoData;
          let value=null;
          let hambMenu =null;
          let testObj = ObjectRepository.LHamburger.LHambAllMenu;
          let testObj1 = ObjectRepository.LHamburger.LsubMenu;
    
      
              hambMenu = await $(testObj+'[3]');
              await hambMenu.click();
    
              hambMenu = await $(testObj1+'[1]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[0]);
              console.log(value +' '+ testValue[0]);
    
              hambMenu = await $(testObj1+'[2]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[1]);
              console.log(value +' '+ testValue[1]);
    
              hambMenu = await $(testObj1+'[3]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[2]);
              console.log(value +' '+ testValue[2]);
    
              hambMenu = await $(testObj1+'[4]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[3]);
      
              hambMenu = await $(testObj1+'[5]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[4]);
  
              hambMenu = await $(testObj1+'[6]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[5]);

              hambMenu = await $(testObj1+'[7]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[6]);

              hambMenu = await $(testObj1+'[8]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[7]);

              hambMenu = await $(testObj1+'[9]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[8]);

              hambMenu = await $(testObj1+'[10]');
              value = await hambMenu.getText();
              assert.equal(value,testValue[9]);

              value = await $(ObjectRepository.LHamburger.LHambGoBack)
              await value.click();
              resolve();
            })
            .catch((error) => {
              console.log("Error");
            });
          })
          it('Verify the subMenus available in Explore',  async ()=> {
            return new Promise( async(resolve, reject)  => {
        
            let testValue = data.ArrayValues.ExploreData ;
            let value=null;
            let hambMenu =null;
            let testObj = ObjectRepository.LHamburger.LHambAllMenu;
            let testObj1 = ObjectRepository.LHamburger.LsubMenu;
      
              
                hambMenu = await $(testObj+'[4]');
                await hambMenu.click();
      
                hambMenu = await $(testObj1+'[1]');
                value = await hambMenu.getText();
                assert.equal(value,testValue[0]);
                console.log(value +' '+ testValue[0]);
      
                hambMenu = await $(testObj1+'[2]');
                value = await hambMenu.getText();
                assert.equal(value,testValue[1]);
                console.log(value +' '+ testValue[1]);
      
                hambMenu = await $(testObj1+'[3]');
                value = await hambMenu.getText();
                assert.equal(value,testValue[2]);
                console.log(value +' '+ testValue[2]);
      
                hambMenu = await $(testObj1+'[4]');
                value = await hambMenu.getText();
                assert.equal(value,testValue[3]);
        
                
                value = await $(ObjectRepository.LHamburger.LHambGoBack)
                await value.click();
                resolve();
              })
              .catch((error) => {
                console.log("Error");
              });
            })

            it('Verify the subMenus available in More',  async ()=> {
              return new Promise( async(resolve, reject)  => {
          
              let testValue = data.ArrayValues.MoreData ;
              let value=null;
              let hambMenu =null;
              let testObj = ObjectRepository.LHamburger.LHambAllMenu;
              let testObj1 = ObjectRepository.LHamburger.LsubMenu;
        
          
                  hambMenu = await $(testObj+'[5]');
                  await hambMenu.click();
        
                  hambMenu = await $(testObj1+'[1]');
                  value = await hambMenu.getText();
                  assert.equal(value,testValue[0]);
                  console.log(value +' '+ testValue[0]);
        
                  hambMenu = await $(testObj1+'[2]');
                  value = await hambMenu.getText();
                  assert.equal(value,testValue[1]);
                  console.log(value +' '+ testValue[1]);
        
                  hambMenu = await $(testObj1+'[3]');
                  value = await hambMenu.getText();
                  assert.equal(value,testValue[2]);
                  console.log(value +' '+ testValue[2]);
        
                  hambMenu = await $(testObj1+'[4]');
                  value = await hambMenu.getText();
                  assert.equal(value,testValue[3]);

                  hambMenu = await $(testObj1+'[5]');
                  value = await hambMenu.getText();
                  assert.equal(value,testValue[4]);

                  hambMenu = await $(testObj1+'[6]');
                  value = await hambMenu.getText();
                  assert.equal(value,testValue[5]);

                  hambMenu = await $(testObj1+'[7]');
                  value = await hambMenu.getText();
                  assert.equal(value,testValue[6]);
          
                  
                  value = await $(ObjectRepository.LHamburger.LHambGoBack)
                  await value.click();
                  value = await $(ObjectRepository.LHamburger.LCloseMenu)
                  await value.click();
                  
                  resolve();
                })
                .catch((error) => {
                  console.log("Error");
                });
              })
})


