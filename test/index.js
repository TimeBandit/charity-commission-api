/*jshint esversion: 6 */

ccAPI = require('../index');
var expect = require('chai').expect;

describe('charity-commission-api', function() {
    before(function() {
        setTimeout(function() {console.log(`waiting for client to initialize`);}, 10);
    });
    describe('API methods', function() {
        it('1. should have a property ccAPIUrl', function() {
            expect(ccAPI).to.have.property('ccAPIUrl');
        });
        it('2. should have a property createClient:', function() {
            expect(ccAPI).to.have.property('createClient');
        });
        it('3. should have a property GetCharityByRegisteredCharityNumber', function() {
            expect(ccAPI).to.have.property('GetCharityByRegisteredCharityNumber');
        });
        it('4. should have a property GetCharityByRegisteredCharityNumberAndSubsidiaryNumber', function() {
            expect(ccAPI).to.have.property('GetCharityByRegisteredCharityNumberAndSubsidiaryNumber');
        });
        it('5. should have a property GetCharities:', function() {
            expect(ccAPI).to.have.property('GetCharities');
        });
        it('6. should have a property GetCharitiesByKeyword', function() {
            expect(ccAPI).to.have.property('GetCharitiesByKeyword');
        });
        it('7. should have a property GetCharitiesByName', function() {
            expect(ccAPI).to.have.property('GetCharitiesByName');
        });
        it('8. should have a property GetCharityAccountListing', function() {
            expect(ccAPI).to.have.property('GetCharityAccountListing');
        });
        it('9. should have a property GetCharityAnnualReturns', function() {
            expect(ccAPI).to.have.property('GetCharityAnnualReturns');
        });
        it('10. should have a property GetCharityChartAssetsLiabilitiesAndPeople', function() {
            expect(ccAPI).to.have.property('GetCharityChartAssetsLiabilitiesAndPeople');
        });
        it('11. should have a property GetCharityChartCharitableSpending', function() {
            expect(ccAPI).to.have.property('GetCharityChartCharitableSpending');
        });
        it('12. should have a property GetCharityChartComplianceHistory', function() {
            expect(ccAPI).to.have.property('GetCharityChartComplianceHistory');
        });
    });
});
