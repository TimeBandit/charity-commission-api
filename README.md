![alt tag](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/organisation/logo/98/Home_page.jpg)

This is the **Unofficial** node package for the [Charity Commission's](https://www.gov.uk/government/organisations/charity-commission) API. It uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
This package is a wrapper for V1 of the UK Charity Commission's API. This package allows you to search the comissions data on all charites resgistered within the United Kingdom. 

**Note:** Before you begin will need to [register](http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/SearchCharitiesV1Home.aspx) as a developer to receive your API key.



To install locally:
```shell
npm install charity-commission-api --save
```

##Sample Usage

1. Create a new directory `mkdir test`
2. Enter the directory and initialize `cd test` `npm init`. This will prompt you to create a package.json file. Accept all the defaults.
3. Create an empty js file `touch test.js`
4. Install the package `npm install charity-commission-api --save` this will save the package version into the package.json file
5. Copy the following code into test.js and enter `npm test.js` from the terminal to run the code.
```shell
const ccAPI = require('charity-commission-api');
const args = { APIKey: 'xx-xx-xx-x', strSearch: 'happy' };

ccAPI.GetCharitiesByKeyword(args).then(function(value) {
   console.log(value);
}).catch(function(err) {
   console.log(`Call to ${err.operationName} failed with error: ${err.err}`);
});
```

##API 
Follow the [Developer Guidlines](http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/DevGuideHome.aspx)








