![alt tag](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/organisation/logo/98/Home_page.jpg)

This is the **Unofficial** node package for the [Charity Commission's](https://www.gov.uk/government/organisations/charity-commission) API. It uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to wrap asynchronous calls around the API. With this API you can search the comissions data on all charities registered in the United Kingdom.  

**Note:** Before you begin will need to [register](http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/SearchCharitiesV1Home.aspx) as a developer to receive your API key.

## Installation

To install locally:

```bash
npm install charity-commission-api --save
```

### Example

```js
const charityCommissionAPI = require('charity-commission-api')

const charityCommissionAPIClient = new charityCommissionAPI({
  apiKey: process.env.API_KEY,
  timeout: 5000,
  keepAlive: true
})

const args = { registeredCharityNumber: '1100649' }
charityCommissionAPIClient.GetCharityByRegisteredCharityNumber(args)
  .then((value) => {
    console.log(value);
  }).catch((err) => {
    console.error(err.message)
  })
```

## API 
### Supported Methods

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

Follow the [Developer Guidelines](http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/DevGuideHome.aspx) for more information.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.
