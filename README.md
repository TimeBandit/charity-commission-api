![alt tag](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/organisation/logo/98/Home_page.jpg)

This is the **Unofficial** node package for the [Charity Commission's](https://www.gov.uk/government/organisations/charity-commission) API. It uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to wrap asynchronous calls around the API. With this API you can search the comissions data on all charites resgistered in the United Kingdom.  

**Note:** Before you begin will need to [register](http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/SearchCharitiesV1Home.aspx) as a developer to receive your API key.



To install locally:
```shell
npm install charity-commission-api --save
```

###General Syntax
```shell
const ccAPI = require('charity-commission-api');
const args = { APIKey: 'xx-xx-xx-x', strSearch: '<search term>' };

ccAPI.<API Method>(args).then(function(result) {

   console.log(result);
   
}).catch(function(err) {

   console.log(`Call to ${err.operationName} failed with error: ${err.err}`);
   
});
```
##Sample Usage
1. Create a new directory with `mkdir test`
2. Enter the directory with `cd test`. Then initialize it with `npm init`. You will be prompted to create a package.json file. Accept all the defaults.
3. Create an empty js file  `touch index.js`
4. Install the package with `npm install charity-commission-api --save` this will save the package version to the package.json file
5. Copy the following code into index.js and enter `node index.js` at the terminal to run. Remembering to substitute in you API key.
```shell
const ccAPI = require('charity-commission-api');
const args = { APIKey: 'xx-xx-xx-x', strSearch: 'happy' };

ccAPI.GetCharitiesByKeyword(args).then(function(result) {

   console.log(result);
   
}).catch(function(err) {

   console.log(`Call to ${err.operationName} failed with error: ${err.err}`);
   
});
```

##API 
###Supported Methods
**GetCharities** - Accepts multiple search criteria variables and returns a list of matching Charities.

**GetCharitiesByKeyword** - Allows you to search charities by Keyword

**GetCharitiesByName** - Allows you to search charities by Name

**GetCharityAccountListing** - Retrieves Account Listing data for a specific charity.

**GetCharityAnnualReturns** - Retreives Annual Returns data for a specific charity.

**GetCharityAreasOfOperation** - Retrieves Areas of Operation for a specific charity.

**GetCharityByRegisteredCharityNumber** - Retrieves specific charity details.

**GetCharityByRegisteredCharityNumberAndSubsidiaryNumber** - Retrieves specific charity subsidiary details.

**GetCharityChartAssetsLiabilitiesAndPeople** - Retrieves chart data for charity assets, liabilities and people.

**GetCharityChartCharitableSpending** - Retrieves chart data for charity charitable spending.

**GetCharityChartComplianceHistory** - Retrieves chart data for charity compliance history.

**GetCharityChartFinancialHistory** - Retrieves chart data for charity financial history.

**GetCharityChartIncome** - Retrieves chart data for charity income.

**GetCharityChartIncomeAndSpending** - Retrieves chart data for charity income and spending.

**GetCharityChartSpending** - Retrieves chart data for charity spending.

**GetCharityFinancialComplianceTableData** - Retrieves charity financial compliance data.

**GetCharityLatestFiling** - Retrieves charity latest filing information.

**GetCharityNumbersChart** - Retrieves charity numbers.

**GetCharityPublishedReport** - Retrieves charity published report.

**GetCharityRegistrations** - Retrieves registration information for a specific charity.

**GetCharitySubmissions** - Retrieves submission information for a specific charity.

**GetCharitySubsidiaries** - Retrieves a list of subsidiaries for a specific charity.

**GetCharityTrustees** - Retrieves a list of Trustees for a specific charity.

**GetTrusteeAndRelatedCharities** - Retrieves a list of Trustee related charities. 

Follow the [Developer Guidlines](http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/DevGuideHome.aspx) for more information.
