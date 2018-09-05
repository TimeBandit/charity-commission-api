/* 
    For full list of method names & their args see:.
    http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/DevGuideHome.aspx
*/

const soap = require('soap')

function stripOutSoapTextFromErrorMessages(message) {
  const asciiArrow = '--->'
  
  const hasAsciiArrow = message.includes(asciiArrow)
  if (!hasAsciiArrow) {
    return message
  }
  
  const indexOfArrow = message.indexOf(asciiArrow)
  const textAfterArrow = message.substring(indexOfArrow + asciiArrow.length).trim()
  
  return stripOutSoapTextFromErrorMessages(textAfterArrow)
}

const CHARITY_COMMISSION_API_URL = 'http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/SearchCharitiesV1.asmx?wsdl'

const operationNames = [
  'GetCharityByRegisteredCharityNumber',
  'GetCharityByRegisteredCharityNumberAndSubsidiaryNumber',
  'GetCharities',
  'GetCharitiesByKeyword',
  'GetCharitiesByName',
  'GetCharityAccountListing',
  'GetCharityAnnualReturns',
  'GetCharityChartAssetsLiabilitiesAndPeople',
  'GetCharityChartCharitableSpending',
  'GetCharityChartComplianceHistory',
  'GetCharityChartFinancialHistory',
  'GetCharityChartIncome',
  'GetCharityChartSpending',
  'GetCharityChartIncomeAndSpending',
  'GetCharityNumbersChart',
  'GetCharityFinancialComplianceTableData',
  'GetCharityLatestFiling',
  'GetCharityAreasOfOperation',
  'GetCharityPublishedReport',
  'GetCharityRegistrations',
  'GetCharitySubmissions',
  'GetCharitySubsidiaries',
  'GetCharityTrustees',
  'GetTrusteeAndRelatedCharities'
]

function createSoapClientForOperation(operationName, args, { apiKey, timeout, keepAlive }) {
  return soap.createClientAsync(CHARITY_COMMISSION_API_URL).then((client) => {
    const argsWithApiKey = Object.assign({ APIKey: apiKey }, args)  
    
    const options = {}
    if (timeout) options.timeout = timeout
    if (keepAlive) options.forever = keepAlive
    
    return new Promise((resolve, reject) => {
      client[operationName](argsWithApiKey, (err, results) => {
        if (results === null) {
          return reject(new Error('No results found'))
        }

        return resolve(results[`${operationName}Result`])
      }, options)
    })
  }).catch(err => {
    throw new Error(stripOutSoapTextFromErrorMessages(err.message))
  })
}

class charityCommissionAPI {
  constructor({ apiKey, timeout, keepAlive }) {
    this.apiKey = apiKey
    this.timeout = timeout
    this.keepAlive = keepAlive
  }
}

// iterate through the operation name and create a method on the charityCommisionAPI class
operationNames.forEach((operationName) => {
  const newOperationFunction = function(args) {
    return createSoapClientForOperation(operationName, args, this)
  }
  
  charityCommissionAPI.prototype[operationName] = newOperationFunction
})

module.exports = charityCommissionAPI
