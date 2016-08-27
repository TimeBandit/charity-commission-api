/*jshint esversion: 6 */

/* 
    For full list of method names & their args see:.
    http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/DevGuideHome.aspx
*/

const ccAPIUrl = 'http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/SearchCharitiesV1.asmx?wsdl';

const operationNames = [
    "GetCharityByRegisteredCharityNumber",
    "GetCharityByRegisteredCharityNumberAndSubsidiaryNumber",
    "GetCharities",
    "GetCharitiesByKeyword",
    "GetCharitiesByName",
    "GetCharityAccountListing",
    "GetCharityAnnualReturns",
    "GetCharityChartAssetsLiabilitiesAndPeople",
    "GetCharityChartCharitableSpending",
    "GetCharityChartComplianceHistory",
    "GetCharityChartFinancialHistory",
    "GetCharityChartIncome",
    "GetCharityChartSpending",
    "GetCharityChartIncomeAndSpending",
    "GetCharityNumbersChart",
    "GetCharityFinancialComplianceTableData",
    "GetCharityLatestFiling",
    "GetCharityAreasOfOperation",
    "GetCharityPublishedReport",
    "GetCharityRegistrations",
    "GetCharitySubmissions",
    "GetCharitySubsidiaries",
    "GetCharityTrustees",
    "GetTrusteeAndRelatedCharities",
];

const createClient = function(url) {
    const soap = require('soap');
    return new Promise(function(resolve, reject) {
        soap.createClient(url, function(err, client) {
            if (err) {
                console.log(`→ \t Client creation failed with error: ${err}`);
                console.log(`→ \t Check your network connection`);
                reject(err);
            } else {
                resolve(client);
            }
        });
    });
};

const operation = function(operationName, client, args) {
    if (!client) {
        return Promise.reject('Please supply a valid client object using the createClient operation');
    }
    return new Promise(function(resolve, reject) {
        client[operationName](args, function(err, result) {
            if (err) {
                reject({ operationName, err });
            } else {
                resolve(result);
            }
        });
    });
};

const toExport = {
    ccAPIUrl,
    createClient
};

// iterate through the operation name and create method return a promise
operationNames.forEach(function(e, i, a) {
    toExport[e] = function(args) {
        return new Promise(function(resolve, reject) {
            createClient(ccAPIUrl).then(function(client) {
                resolve(operation(e, client, args));

            });
        });
    };
});

module.exports = toExport;

// const ccAPI = require('charity-commission-gov-uk');
// const args = { APIKey: 'xx-xx-xx-x', strSearch: 'happy' };

// ccAPI.GetCharitiesByKeyword(args).then(function(value) {
//     console.log(value);
// }).catch(function(err) {
//     console.log(`Call to ${err.operationName} failed with error: ${err.err}`);
// });