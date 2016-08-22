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
        'GetCharities': operation('GetCharities', args),
        // Allows you to search charities by Keyword
        'GetCharitiesByKeyword': operation('GetCharitiesByKeyword', args),
        // Allows you to search charities by Name
        'GetCharitiesByName': operation('GetCharitiesByName', args),
        // Retrieves Account Listing data for a specific charity.
        'GetCharityAccountListing': operation('GetCharityAccountListing', args),
        // Retreives Annual Returns data for a specific charity.
        'GetCharityAnnualReturns': operation('GetCharityAnnualReturns', args),
        // Retrieves Areas of Operation for a specific charity.
        'GetCharityAreasOfOperation': operation('GetCharityAreasOfOperation', args),
        // Retrieves specific charity details.
        'GetCharityByRegisteredCharityNumber': operation('GetCharityByRegisteredCharityNumber', args),
        // Retrieves specific charity subsidiary details.
        'GetCharityByRegisteredCharityNumberAndSubsidiaryNumber': operation('GetCharityByRegisteredCharityNumberAndSubsidiaryNumber', args),
        // Retrieves chart data for charity assets, liabilities and people.
        'GetCharityChartAssetsLiabilitiesAndPeople': operation('GetCharityChartAssetsLiabilitiesAndPeople', args),
        // Retrieves chart data for charity charitable spending.
        'GetCharityChartCharitableSpending': operation('GetCharityChartCharitableSpending', args),
        // Retrieves chart data for charity compliance history.
        'GetCharityChartComplianceHistory': operation('GetCharityChartComplianceHistory', args),
        // Retrieves chart data for charity financial history.
        'GetCharityChartFinancialHistory': operation('GetCharityChartFinancialHistory', args),
        // Retrieves chart data for charity income.
        'GetCharityChartIncome': operation('GetCharityChartIncome', args),
        // Retrieves chart data for charity income and spending.
        'GetCharityChartIncomeAndSpending': operation('GetCharityChartIncomeAndSpending', args),
        // Retrieves chart data for charity spending.
        'GetCharityChartSpending': operation('GetCharityChartSpending', args),
        // Retrieves charity financial compliance data.
        'GetCharityFinancialComplianceTableData': operation('GetCharityFinancialComplianceTableData', args),
        // Retrieves charity latest filing information.
        'GetCharityLatestFiling': operation('GetCharityLatestFiling', args),
        // Retrieves charity numbers.
        'GetCharityNumbersChart': operation('GetCharityNumbersChart', args),
        // Retrieves charity published report.
        'GetCharityPublishedReport': operation('GetCharityPublishedReport', args),
        // Retrieves registration information for a specific charity.
        'GetCharityRegistrations': operation('GetCharityRegistrations', args),
        // Retrieves submission information for a specific charity.
        'GetCharitySubmissions': operation('GetCharitySubmissions', args),
        // Retrieves a list of subsidiaries for a specific charity.
        'GetCharitySubsidiaries': operation('GetCharitySubsidiaries', args),
        // Retrieves a list of Trustees for a specific charity.
        'GetCharityTrustees': operation('GetCharityTrustees', args),
        // Retrieves a list of Trustee related charities
        'GetTrusteeAndRelatedCharities': operation('GetTrusteeAndRelatedCharities', args)
    };

};

// example usage
// const result = CCAPIv1.GetCharities(args);