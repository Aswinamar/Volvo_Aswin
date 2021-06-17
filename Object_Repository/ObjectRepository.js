

'use strict';

module.exports = {
    GlobalHeader:{
        lblHeader       : '//span[@class="page-title"]',
    },
   
    LHomePage: {
        /* Dynamix Xpath -LHomeH2 */
        LAccept   : '//button[text()="Accept"]',
        LFooter       : '(//span[contains(@class, "SiteFooter")])[1]/',
        LHomeH2  : '//section[@data-autoid="ModelIntro"]/h2',
        LOurCars : '//span[text()="Our Cars"]/..',
        LCarType : '(//h2)',
        LSubCars : '(//em[@data-autoid="nav:carName"])',
        LCloseMenu1 : '//button[@data-autoid="nav:siteNavCloseIcon"]/div',
        LlearnMore : '//*[text()="Learn more about car safety"]',
        LlearnMoreInnovation : '//*[text()="Learn more"]',
        LlearnModels : '//*[text()="Learn"]',
        LshopModels : '//*[text()="Shop"]',
        LRechargeModels : '//*[text()="Recharge"]',
        LMildHybridCarsModels : '//*[text()="Mild hybrid cars"]',
        
        LCloseMenu1 : '//button[@data-autoid="nav:siteNavCloseIcon"]/div',
        
        
    },
    LHamburger: {
        /* Dynamix Xpath -LHambAllMenu,LsubMenu */
        LHamMenu   : '//button[@id="sitenav-v2-sidenav-toggle"]',
        LHambAllMenu : '//div[@data-autoid="nav:sideNavLinksMenu"]/button',
        LHambInternational : '//button[@data-autoid="nav:sideNavMarketContainer"]',
        LHambGoBack : '(//button[@aria-label="Go back in Site Navigation"])',
        LsubMenu : '(//a[@data-autoid="nav:sideNavLinksMenuItem"])',
        LCloseMenu : '//button[@data-autoid="nav:siteNavCloseIcon"]'
        
        
        
        
        
    },
    

  
   
};