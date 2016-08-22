/*jshint esversion: 6 */

exports.CCAPIv1 = function() {

    function createClient() {

        const soap = require('soap');
        const url = 'http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/SearchCharitiesV1.asmx?wsdl';

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

    function operation(operationName, args) {

        /* 
        	For full list of method names & their args see:
        	http://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/DevGuideHome.aspx
        */

        const client = this.createClient();

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
        'createClient': createClient(),
        // Accepts multiple search criteria variables and returns a list of matching Charities.
        'GetCharities': operation('GetCharities', client, args),
        // Allows you to search charities by Keyword
        'GetCharitiesByKeyword': operation('GetCharitiesByKeyword', client, args),
        // Allows you to search charities by Name
        'GetCharitiesByName': operation('GetCharitiesByName', client, args),
        // Retrieves Account Listing data for a specific charity.
        'GetCharityAccountListing': operation('GetCharityAccountListing', client, args),
        // Retreives Annual Returns data for a specific charity.
        'GetCharityAnnualReturns': operation('GetCharityAnnualReturns', client, args),
        // Retrieves Areas of Operation for a specific charity.
        'GetCharityAreasOfOperation': operation('GetCharityAreasOfOperation', client, args),
        // Retrieves specific charity details.
        'GetCharityByRegisteredCharityNumber': operation('GetCharityByRegisteredCharityNumber', client, args),
        // Retrieves specific charity subsidiary details.
        'GetCharityByRegisteredCharityNumberAndSubsidiaryNumber': operation('GetCharityByRegisteredCharityNumberAndSubsidiaryNumber', client, args),
        // Retrieves chart data for charity assets, liabilities and people.
        'GetCharityChartAssetsLiabilitiesAndPeople': operation('GetCharityChartAssetsLiabilitiesAndPeople', client, args),
        // Retrieves chart data for charity charitable spending.
        'GetCharityChartCharitableSpending': operation('GetCharityChartCharitableSpending', client, args),
        // Retrieves chart data for charity compliance history.
        'GetCharityChartComplianceHistory': operation('GetCharityChartComplianceHistory', client, args),
        // Retrieves chart data for charity financial history.
        'GetCharityChartFinancialHistory': operation('GetCharityChartFinancialHistory', client, args),
        // Retrieves chart data for charity income.
        'GetCharityChartIncome': operation('GetCharityChartIncome', client, args),
        // Retrieves chart data for charity income and spending.
        'GetCharityChartIncomeAndSpending': operation('GetCharityChartIncomeAndSpending', client, args),
        // Retrieves chart data for charity spending.
        'GetCharityChartSpending': operation('GetCharityChartSpending', client, args),
        // Retrieves charity financial compliance data.
        'GetCharityFinancialComplianceTableData': operation('GetCharityFinancialComplianceTableData', client, args),
        // Retrieves charity latest filing information.
        'GetCharityLatestFiling': operation('GetCharityLatestFiling', client, args),
        // Retrieves charity numbers.
        'GetCharityNumbersChart': operation('GetCharityNumbersChart', client, args),
        // Retrieves charity published report.
        'GetCharityPublishedReport': operation('GetCharityPublishedReport', client, args),
        // Retrieves registration information for a specific charity.
        'GetCharityRegistrations': operation('GetCharityRegistrations', client, args),
        // Retrieves submission information for a specific charity.
        'GetCharitySubmissions': operation('GetCharitySubmissions', client, args),
        // Retrieves a list of subsidiaries for a specific charity.
        'GetCharitySubsidiaries': operation('GetCharitySubsidiaries', client, args),
        // Retrieves a list of Trustees for a specific charity.
        'GetCharityTrustees': operation('GetCharityTrustees', client, args),
        // Retrieves a list of Trustee related charities
        'GetTrusteeAndRelatedCharities': operation('GetTrusteeAndRelatedCharities', client, args)
    };

};

let result = CCAPIv1.createClient().then(GetCharities(client, args));
let result2 = CCAPIv1.GetCharities(args);