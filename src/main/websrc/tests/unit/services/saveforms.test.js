describe('$$$ - Search Functions - $$$', function () {

    beforeEach(module('app.service.saveforms'));

    var SearchFactory;
    var $httpBackend;
    var $base64;

    var resp = {
        paperlogbook: {},
        fishoneform: {},
        landing: {},
    };

    var poe = 'saveforms';

    beforeEach(inject(function (_SaveFormsFactory_, _ApiUrl_, _$httpBackend_) {
        ApiUrl = _ApiUrl_;
        SearchFactory = _SaveFormsFactory_;
        $httpBackend = _$httpBackend_;
    }));

    // Paper Logbook

    describe('Reference :: paperlogbook ---------------------- */', function () {

        it('expects http POST to save paperlogbook', inject(function ($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/paperlogbook';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                "vesselPLN": "FR246",
                "vesselName": "Renown",
                "masterName": "Cheeseburger Terrace",
                "masterAddress": "RIVEIRA-LA CORUNA",
                "departureDate": "Tue, 11 Aug 2015 00:30:00 GMT",
                "departurePort": {
                    "areaId": 17,
                    "code": "GBCBT",
                    "port": "Ayr"
                },
                "returnDate": "Thu, 20 Aug 2015 16:30:00 GMT",
                "returnPort": {
                    "areaId": 22,
                    "code": "GBBDI",
                    "port": "Brodick"
                },
                "landingPort": null,
                "gears": [{
                    "gearId": 20,
                    "code": "HAR",
                    "meshSize": 56
                }],
                "fishingActivities": [{
                    "whenCarriedOut": "Tue, 11 Aug 2015 12:00:00 GMT",
                    "areaType": "faoArea",
                    "area": {
                        "faoArea": "27",
                        "faoSubArea": "1",
                        "faoSubDivision": null,
                        "faoDivision": "b",
                        "economicZone": {
                            "economicZoneId": 300,
                            "code": "GBR"
                        }
                    },
                    "gearsUsed": [{
                        "gearId": 20,
                        "code": "HAR",
                        "meshSize": 56
                    }],
                    "fishingActivitySpecies": [{
                        "speciesId": 25,
                        "speciesCode": "CAT",
                        "estimateQuantityKg": 567,
                        "presentations": null
                    }]
                }],
                "logbookNumbers": [{
                    "logbookNumber": "A1154920150668"
                }, {}]
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.paperlogbook;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            SearchFactory.paperlogbook(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.paperlogbook);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Fish One Form

    describe('Reference :: fishoneform ---------------------- */', function () {

        it('expects http POST to save fishoneform', inject(function ($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/fishoneform';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                "vesselPLN": "FR246",
                "vesselName": "Renown",
                "masterName": "Cheeseburger Terrace",
                "masterAddress": "RIVEIRA-LA CORUNA",
                "departureDate": "Tue, 11 Aug 2015 00:30:00 GMT",
                "departurePort": {
                    "areaId": 17,
                    "code": "GBCBT",
                    "port": "Ayr"
                },
                "returnDate": "Thu, 20 Aug 2015 16:30:00 GMT",
                "returnPort": {
                    "areaId": 22,
                    "code": "GBBDI",
                    "port": "Brodick"
                },
                "landingPort": null,
                "gears": [{
                    "gearId": 20,
                    "code": "HAR",
                    "meshSize": 56
                }],
                "fishingActivities": [{
                    "whenCarriedOut": "Tue, 11 Aug 2015 12:00:00 GMT",
                    "areaType": "faoArea",
                    "area": {
                        "faoArea": "27",
                        "faoSubArea": "1",
                        "faoSubDivision": null,
                        "faoDivision": "b",
                        "economicZone": {
                            "economicZoneId": 300,
                            "code": "GBR"
                        }
                    },
                    "gearsUsed": [{
                        "gearId": 20,
                        "code": "HAR",
                        "meshSize": 56
                    }],
                    "fishingActivitySpecies": [{
                        "speciesId": 25,
                        "speciesCode": "CAT",
                        "estimateQuantityKg": 567,
                        "presentations": null
                    }]
                }],
                "logbookNumbers": [{
                    "logbookNumber": "A1154920150668"
                }, {}]
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.fishoneform;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            SearchFactory.fishoneform(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.fishoneform);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Landing Declaration

    describe('Reference :: landing ---------------------- */', function () {

        it('expects http POST to save landing', inject(function ($http, $httpBackend) {

            var url = ApiUrl.connect() + 'manualforms/lan';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                "vesselPLN": "FR246",
                "vesselName": "Renown",
                "masterName": "Cheeseburger Terrace",
                "masterAddress": "RIVEIRA-LA CORUNA",
                "departureDate": "Tue, 11 Aug 2015 00:30:00 GMT",
                "departurePort": {
                    "areaId": 17,
                    "code": "GBCBT",
                    "port": "Ayr"
                },
                "returnDate": "Thu, 20 Aug 2015 16:30:00 GMT",
                "returnPort": {
                    "areaId": 22,
                    "code": "GBBDI",
                    "port": "Brodick"
                },
                "landingPort": null,
                "gears": [{
                    "gearId": 20,
                    "code": "HAR",
                    "meshSize": 56
                }],
                "fishingActivities": [{
                    "whenCarriedOut": "Tue, 11 Aug 2015 12:00:00 GMT",
                    "areaType": "faoArea",
                    "area": {
                        "faoArea": "27",
                        "faoSubArea": "1",
                        "faoSubDivision": null,
                        "faoDivision": "b",
                        "economicZone": {
                            "economicZoneId": 300,
                            "code": "GBR"
                        }
                    },
                    "gearsUsed": [{
                        "gearId": 20,
                        "code": "HAR",
                        "meshSize": 56
                    }],
                    "fishingActivitySpecies": [{
                        "speciesId": 25,
                        "speciesCode": "CAT",
                        "estimateQuantityKg": 567,
                        "presentations": null
                    }]
                }],
                "logbookNumbers": [{
                    "logbookNumber": "A1154920150668"
                }, {}]
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.landing;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            SearchFactory.landing(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.landing);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

});
