describe('$$$ - Search Functions - $$$', function() {

    beforeEach(module('app.service.search'));

    var SearchFactory;
    var $httpBackend;
    var $base64;

    var resp = {
        vessels: [{
            "fisheryAdministrationId": 3,
            "adminPortName": "Plymouth",
            "creekId": 27
        }],
        vesselsSummary: {},
        voyages: [{
            "logbookNo": "A1154920150666",
            "vesselName": "Renown",
            "vesselPLN": "FR246",
            "rssNumber": "A11549",
            "cfrNumber": null,
            "departureDate": 1440032460000,
            "departurePort": "Scrabster",
            "returnDate": null,
            "returnPort": null,
            "returnReason": null,
            "landingActivityId": null,
            "voyageSummary": null
        }, {
            "logbookNo": "A11549COMPLEXFAR",
            "vesselName": "Renown",
            "vesselPLN": "FR246",
            "rssNumber": "A11549",
            "cfrNumber": null,
            "departureDate": 1440594177000,
            "departurePort": "Fraserburgh",
            "returnDate": null,
            "returnPort": null,
            "returnReason": null,
            "landingActivityId": null,
            "voyageSummary": null
        }, {
            "logbookNo": "A11549COMPLEXFAR2",
            "vesselName": "Renown",
            "vesselPLN": "FR246",
            "rssNumber": "A11549",
            "cfrNumber": null,
            "departureDate": 1440594177000,
            "departurePort": "Fraserburgh",
            "returnDate": null,
            "returnPort": null,
            "returnReason": null,
            "landingActivityId": null,
            "voyageSummary": null
        }, {
            "logbookNo": "A11549COMPLEXFAR3",
            "vesselName": "Renown",
            "vesselPLN": "FR246",
            "rssNumber": "A11549",
            "cfrNumber": null,
            "departureDate": 1440594177000,
            "departurePort": "Fraserburgh",
            "returnDate": null,
            "returnPort": null,
            "returnReason": null,
            "landingActivityId": null,
            "voyageSummary": null
        }, {
            "logbookNo": "A11549COMPLEXFAR4",
            "vesselName": "Renown",
            "vesselPLN": "FR246",
            "rssNumber": "A11549",
            "cfrNumber": null,
            "departureDate": 1440594177000,
            "departurePort": "Fraserburgh",
            "returnDate": null,
            "returnPort": null,
            "returnReason": null,
            "landingActivityId": null,
            "voyageSummary": null
        }],
        voyagesSummary: {},
        salesnotes: [{
            "referenceNumber": "",
            "registrationNumber": "",
            "name": "",
            "companyName": "",
            "vesselName": "",
            "vesselPLN": "",
            "landingDate": "",
            "saleDate": "",
            "type": "",
            "status": "",
            "validFrom": ""
        }],
        salesnotesSummary: {}
    };

    var poe = 'search';

    beforeEach(inject(function(_SearchFactory_, _ApiUrl_, _$httpBackend_) {
        ApiUrl = _ApiUrl_;
        SearchFactory = _SearchFactory_;
        $httpBackend = _$httpBackend_;
    }));

    // Search Vessels

    describe('Reference :: vessels ---------------------- */', function() {

        it('expects http POST to return vessels', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/vessels';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                "vesselName": "Chewy",
                "adminPort": "",
                "flagState": "NOR",
                "fishingAdmin": "",
                "activeState": ""
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.vessels;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            SearchFactory.vessels(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.vessels);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });


    // Vessels Summary

    describe('Reference :: vesselsSummary ---------------------- */', function() {

        it('expects http POST to return vessels', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/vessels/summary';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                "vesselName": "Chewy",
                "adminPort": "",
                "flagState": "NOR",
                "fishingAdmin": "",
                "activeState": ""
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.vesselsSummary;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            SearchFactory.vesselsSummary(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.vesselsSummary);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Search Voyages

    describe('Reference :: voyages ---------------------- */', function() {

        it('expects http POST to return voyages', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/voyages';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                "vessel_id": "Departure",
                "rtpReason": null,
                "flagState": null,
                "adminPort": null,
                "returnPort": null,
                "depPort": null,
                "dateFrom": "2015-08-02T23:00:00.000Z",
                "dateTo": null
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.voyages;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            SearchFactory.voyages(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.voyages);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Voyages Summary

    describe('Reference :: voyagesSummary ---------------------- */', function() {

        it('expects http POST to return voyages', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/voyages/summary/1234';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = '1234';

            //Respond

            var header_respond = null;
            var data_respond = resp.voyagesSummary;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            SearchFactory.voyagesSummary(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.voyagesSummary);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Search Salesnotes

    describe('Reference :: salesnotes ---------------------- */', function() {

        it('expects http POST to return salesnotes', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/salesnotes';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                referenceNumber: "123",
                type: "123",
                dateFrom: "123",
                dateTo: "123",
                status: "123",
                authority: "123",
                portOfLanding: "213",
                registrationNumber: "123",
                buyerSellerName: "123",
                companyName: "123"
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.salesnotes;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            SearchFactory.sales(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.salesnotes);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Salesnotes Summary

    describe('Reference :: salesnotesSummary ---------------------- */', function() {

        it('expects http POST to return salesnotes', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/salesnotes/summary/1234';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = '1234';

            //Respond

            var header_respond = null;
            var data_respond = resp.salesnotesSummary;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            SearchFactory.salesSummary(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.salesnotesSummary);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

});
