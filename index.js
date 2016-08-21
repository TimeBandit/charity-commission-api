/*jshint esversion: 6 */

exports.CCAPIv1 = function() {

    function createClient(url) {

        const soap = require('soap');

        return new Promise(function(fullfill, reject) {

            soap.createClient(url, function(err, client) {

                if (err) {

                    console.log('Client creattion failed with error: ${err}');
                    reject(err);
                } else {

                    fullfill(client);
                }
            });
        });
    }

    function operation(operationName, client, args) {

        /* 
        	For full list of method names & their args see:
        	http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/DevGuideHome.aspx
        */

        if (!client) {

            return Promise.reject('Please supply a valid client object using the createClient operation');
        }

        return new Promise(function(fullfill, reject) {

            client[operationName](args, function(err, result) {

                if (err) {

                    console.log('${operationName} call failed with error: ${err}');
                    reject(err);

                } else {

                    fullfill(result);
                }
            });
        });
    }

    // Adapter Pattern
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

    return {
        'createClient': createClient(url),
        // Accepts multiple search criteria variables and returns a list of matching Charities.
        'GetCharities': method('GetCharities', client, args),
        // Allows you to search charities by Keyword
        'GetCharitiesByKeyword': method('GetCharitiesByKeyword', client, args),
        // Allows you to search charities by Name
        'GetCharitiesByName': method('GetCharitiesByName', client, args),
        // Retrieves Account Listing data for a specific charity.
        'GetCharityAccountListing': method('GetCharityAccountListing', client, args),
        // Retreives Annual Returns data for a specific charity.
        'GetCharityAnnualReturns': method('GetCharityAnnualReturns', client, args),
        // Retrieves Areas of Operation for a specific charity.
        'GetCharityAreasOfOperation': method('GetCharityAreasOfOperation', client, args),
        // Retrieves specific charity details.
        'GetCharityByRegisteredCharityNumber': method('GetCharityByRegisteredCharityNumber', client, args),
        // Retrieves specific charity subsidiary details.
        'GetCharityByRegisteredCharityNumberAndSubsidiaryNumber': method('GetCharityByRegisteredCharityNumberAndSubsidiaryNumber', client, args),
        // Retrieves chart data for charity assets, liabilities and people.
        'GetCharityChartAssetsLiabilitiesAndPeople': method('GetCharityChartAssetsLiabilitiesAndPeople', client, args),
        // Retrieves chart data for charity charitable spending.
        'GetCharityChartCharitableSpending': method('GetCharityChartCharitableSpending', client, args),
        // Retrieves chart data for charity compliance history.
        'GetCharityChartComplianceHistory': method('GetCharityChartComplianceHistory', client, args),
        // Retrieves chart data for charity financial history.
        'GetCharityChartFinancialHistory': method('GetCharityChartFinancialHistory', client, args),
        // Retrieves chart data for charity income.
        'GetCharityChartIncome': method('GetCharityChartIncome', client, args),
        // Retrieves chart data for charity income and spending.
        'GetCharityChartIncomeAndSpending': method('GetCharityChartIncomeAndSpending', client, args),
        // Retrieves chart data for charity spending.
        'GetCharityChartSpending': method('GetCharityChartSpending', client, args),
        // Retrieves charity financial compliance data.
        'GetCharityFinancialComplianceTableData': method('GetCharityFinancialComplianceTableData', client, args),
        // Retrieves charity latest filing information.
        'GetCharityLatestFiling': method('GetCharityLatestFiling', client, args),
        // Retrieves charity numbers.
        'GetCharityNumbersChart': method('GetCharityNumbersChart', client, args),
        // Retrieves charity published report.
        'GetCharityPublishedReport': method('GetCharityPublishedReport', client, args),
        // Retrieves registration information for a specific charity.
        'GetCharityRegistrations': method('GetCharityRegistrations', client, args),
        // Retrieves submission information for a specific charity.
        'GetCharitySubmissions': method('GetCharitySubmissions', client, args),
        // Retrieves a list of subsidiaries for a specific charity.
        'GetCharitySubsidiaries': method('GetCharitySubsidiaries', client, args),
        // Retrieves a list of Trustees for a specific charity.
        'GetCharityTrustees': method('GetCharityTrustees', client, args),
        // Retrieves a list of Trustee related charities
        'GetTrusteeAndRelatedCharities': method('GetTrusteeAndRelatedCharities', client, args)
    };

}
