var launchURL = async function (URL) {
    browser.url(URL).then(()=>{
        console.log("The URL " + URL.toString() + " has been successfully launched");
        return new Promise((resolve,reject)=>resolve(true));
    }, function(err){
        console.log("Not able to launch the URL " +  URL.toString() + " because " + err);
        fail(err);
        return new Promise((resolve,reject)=>reject(false));

    });
	
   // CreateReport.logReport("The URL " + URL.toString() + " has been successfully launched");
	return true;
}
var getTitle = async ()=> {
    lbltext =  browser.getTitle()
    lbltext.then(function(text){
      
         console.log("Text from " + browser.getTitle() +" >>> " + text);
       
        return new Promise((resolve,reject)=>resolve(true));
     }, function(err){
             console.log(err);
             fail(err);
             return new Promise((resolve,reject)=>reject(false));
     });
    
 }


module.exports.launchURL = launchURL;
module.exports.getTitle = getTitle;

