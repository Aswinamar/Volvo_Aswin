const WebDriver = require('webdriver');
const { assert } = require('chai');
const { default: waitUntil } = require('webdriverio/build/commands/browser/waitUntil');
const ObjectRepository = require('../Object_Repository/ObjectRepository');
const data = require('../TestData/data');
const { config } = require('../wdio.conf');

describe('Cars Validation',  ()=> {
    it('Verify the car types available in our cars',  async ()=> {
      return new Promise( async(resolve, reject)  => {
        await browser.url('');
        await browser.maximizeWindow();
        const popup = await $(ObjectRepository.LHomePage.LAccept);
        await popup.click();
        let value=null;
        let CT =null;

        let testValue = data.ArrayValues.carTypes ;
        let a =await $(ObjectRepository.LHomePage.LOurCars);
        await a.click();
        await new Promise(r => setTimeout(r, 2000));

        let testObj1 = ObjectRepository.LHomePage.LCarType;

        CT = await $(testObj1+'[1]');
        value = await CT.getText();
        assert.equal(value,testValue[0]);
        


        CT = await $(testObj1+'[2]');
        value = await CT.getText();
        assert.equal(value,testValue[1]);

        CT = await $(testObj1+'[3]');
        value = await CT.getText();
        assert.equal(value,testValue[2]);
          resolve();
        })
        .catch((error) => {
          console.log("Error");
        });
      })
      it('Verify the hybrid car types available in our cars',  async ()=> {
        return new Promise( async(resolve, reject)  => {
            let value=null;
          let CT =null;
          let testObj1 = ObjectRepository.LHomePage.LSubCars;
          let testValue = data.ArrayValues.hybridCars ;

          CT = await $(testObj1+'[3]');
          value = await CT.getText();
          assert.equal(value,testValue[0]);
          
  
  
          CT = await $(testObj1+'[4]');
          value = await CT.getText();
          assert.equal(value,testValue[1]);
  
          CT = await $(testObj1+'[5]');
          value = await CT.getText();
          assert.equal(value,testValue[2]);

          CT = await $(testObj1+'[6]');
          value = await CT.getText();
          assert.equal(value,testValue[3]);

          CT = await $(testObj1+'[7]');
          value = await CT.getText();
          assert.equal(value,testValue[4]);

          CT = await $(testObj1+'[8]');
          value = await CT.getText();
          assert.equal(value,testValue[5]);

          CT = await $(testObj1+'[9]');
          value = await CT.getText();
          assert.equal(value,testValue[6]);

          let testObj2 = ObjectRepository.LHomePage.LCarType;
        CT = await $(testObj2+'[1]');
            await CT.click();

            resolve();
          })
          .catch((error) => {
            console.log("Error");
          });
        })
        it('Verify the electric car types available in our cars',  async ()=> {
            return new Promise( async(resolve, reject)  => {
                let value=null;
              let CT =null;
              let testObj1 = ObjectRepository.LHomePage.LSubCars;
              let testValue = data.ArrayValues.electricCars ;
    
              CT = await $(testObj1+'[1]');
              value = await CT.getText();
              assert.equal(value,testValue[0]);
              
      
      
              CT = await $(testObj1+'[2]');
              value = await CT.getText();
              assert.equal(value,testValue[1]);
      
             

              let testObj2 = ObjectRepository.LHomePage.LCarType;
              CT = await $(testObj2+'[3]');
                  await CT.click();

                resolve();
              })
              .catch((error) => {
                console.log("Error");
              });
            })
            it('Verify the mild hybrids car types available in our cars',  async ()=> {
                return new Promise( async(resolve, reject)  => {
                    let value=null;
                  let CT =null;
                  let testObj1 = ObjectRepository.LHomePage.LSubCars;
                  let testValue = data.ArrayValues.MildHybridsCars ;
        
                  CT = await $(testObj1+'[10]');
                  value = await CT.getText();
                  assert.equal(value,testValue[0]);
                  
          
          
                  CT = await $(testObj1+'[11]');
                  value = await CT.getText();
                  assert.equal(value,testValue[1]);
          
                  CT = await $(testObj1+'[12]');
                  value = await CT.getText();
                  assert.equal(value,testValue[2]);
        
                  CT = await $(testObj1+'[13]');
                  value = await CT.getText();
                  assert.equal(value,testValue[3]);
        
                  CT = await $(testObj1+'[14]');
                  value = await CT.getText();
                  assert.equal(value,testValue[4]);
        
                  CT = await $(testObj1+'[15]');
                  value = await CT.getText();
                  assert.equal(value,testValue[5]);
        
                  CT = await $(testObj1+'[16]');
                  value = await CT.getText();
                  assert.equal(value,testValue[6]);

                  
                    resolve();
                  })
                  .catch((error) => {
                    console.log("Error");
                  });
                })
    })