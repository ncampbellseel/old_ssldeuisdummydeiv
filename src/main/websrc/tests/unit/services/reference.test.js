describe('$$$ - Reference Functions - $$$', function() {

    beforeEach(module('app.service.reference'));

    var ReferenceFactory;
    var $httpBackend;
    var $base64;

    var resp = {
        port: [{
            "fisheryAdministrationId": 3,
            "adminPortName": "Plymouth",
            "creekId": 27
        }],
        species: [{
            "speciesId": 34,
            "name": "European lobster",
            "code": "LBE"
        }],
        targetSpecies: [{
            "name": "DEM",
            "value": "Demersal"
        }, {
            "name": "PEL",
            "value": "Pelagic"
        }, {
            "name": "SCA",
            "value": "Scallops"
        }, {
            "name": "CRA",
            "value": "Crabs"
        }, {
            "name": "HER",
            "value": "Herring"
        }, {
            "name": "SAL",
            "value": "Salmon"
        }],
        faoAreas: [{
            "faoArea": "27",
            "name": "Northeast Atlantic",
            "order": 1
        }],
        faoSubAreas: [{
            "faoArea": "21",
            "faoSubArea": "0",
            "order": 58
        }],
        faoDivisions: [{
            "faoSubArea": "2",
            "faoDivision": "G",
            "order": 66
        }],
        faoSubDivisions: [{
            "faoSubArea": "2",
            "faoDivision": "G",
            "order": 66
        }],
        economicZones: [{
            "areaId": 397,
            "name": "Guadeloupe",
            "zone": "GLP"
        }],
        rtpreason: [{
            "name": "SHE",
            "value": "Sheltering"
        }, {
            "name": "LAN",
            "value": "Landing"
        }, {
            "name": "LND",
            "value": "Landed"
        }, {
            "name": "REF",
            "value": "Refueling"
        }, {
            "name": "REP",
            "value": "Repair"
        }, {
            "name": "RES",
            "value": "Resting"
        }, {
            "name": "ECY",
            "value": "Emergency"
        }, {
            "name": "TRA",
            "value": "Transhipment in Port"
        }, {
            "name": "SCR",
            "value": "Return from Scientific Research"
        }, {
            "name": "GRD",
            "value": "Return from Guardship duty"
        }, {
            "name": "OTH",
            "value": "Other"
        }],
        gears: [{
            "gearId": 27,
            "name": "Longlines (not specified)",
            "code": "LL",
            "hasMesh": true,
            "reportHookCount": false,
            "reportNetDimensions": false,
            "reportFishingDepth": false,
            "meshSize": 0,
            "hookCount": 0,
            "fishingDepth": 0,
            "netDimensions": null
        }],
        freshnessGrades: ["A", "B", "E", "V", "SO - not applicable"],
        sizeGrades: ["1", "2", "3", "4", "4a", "4b", "4c", "5", "6", "7", "7a", "7b", "8"],
        states: [{
            "code": "Fresh",
            "description": "FRE"
        }],
        presentations: [{
            "presentationId": 1,
            "name": "Whole",
            "code": "WHL"
        }],
        activeStates: [{
            "vesselActiveState": false
        }, {
            "vesselActiveState": true
        }],
        disposals: [{
            "name": "Human Consumption",
            "code": "HCN"
        }, {
            "name": "Waste",
            "code": "WST"
        }, {
            "name": "Unknown",
            "code": "UKN"
        }, {
            "name": "Bait",
            "code": "BAI"
        }, {
            "name": "Animal Feed",
            "code": "ANF"
        }, {
            "name": "Carry Over",
            "code": "COV"
        }, {
            "name": "Withdrawn",
            "code": "WDR"
        }, {
            "name": "Industrial Uses",
            "code": "IND"
        }],
        destinationsOfWithdrawnProduct: [{
            "name": "P.O. Fishmeal",
            "poCode": "FSM"
        }, {
            "name": "P.O. bait or lure",
            "poCode": "BOL"
        }, {
            "name": "P.O. Other ",
            "poCode": "OTH"
        }, {
            "name": "P.O. Gift",
            "poCode": "GIF"
        }, {
            "name": "P.O. Fish Fodder",
            "poCode": "FFD"
        }],
        salesNoteStatus: [{
            "name": "SAVED",
            "value": "Saved"
        }, {
            "name": "REJECTED",
            "value": "Rejected"
        }, {
            "name": "APPROVED",
            "value": "Approved"
        }, {
            "name": "SUBMITTED_MODIFIED",
            "value": "Submitted/Modified"
        }],
        logbookSource: [{
            "name": "Paper"
        }, {
            "name": "XML",
        }],
        auctionCentres: [{
            "name": "Aberdeen Harbour Fish Market",
            "auctionCentreId": "20"
        }, {
            "name": "Fraserburgh Fish Market",
            "auctionCentreId": "44"
        }, {
            "name": "Peterhead Fish Market",
            "auctionCentreId": "45"
        }, {
            "name": "Eyemouth Harbour Trust",
            "auctionCentreId": "43"
        }],
        relocation: [{
            "name": "KNE",
            "value": "Keep Nets"
        }, {
            "name": "CGE",
            "value": "Cages"
        }, {
            "name": "BRG",
            "value": "Barge"
        }, {
            "name": "HUL",
            "value": "Hull"
        }],
        continueVoyageMessages: [{
            "name": "RLC",
            "value": "Relocation Message"
        }, {
            "name": "COE",
            "value": "Catch on Entry Message"
        }, {
            "name": "COX",
            "value": "Catch on Exit Message"
        }, {
            "name": "GBRCON",
            "value": "Control Point Message"
        }, {
            "name": "RTP",
            "value": "Return To Port Message"
        }, {
            "name": "EOF",
            "value": "End of Fishing Message"
        }, {
            "name": "FAR",
            "value": "Fishing Activity Report"
        }, {
            "name": "PNO",
            "value": "Prior Notification"
        }],
        ukAdminPorts: {
            "ABERDEEN31": {
                "fisheryAdministrationId": 1,
                "adminPortName": "Aberdeen",
                "creekId": 3
            },
            "ANSTRUTHER21": {
                "fisheryAdministrationId": 1,
                "adminPortName": "Anstruther",
                "creekId": 2
            },
            "AYR171": {
                "fisheryAdministrationId": 1,
                "adminPortName": "Ayr",
                "creekId": 17
            }
        },
        areaDetails: {
            "faoSubArea": "2",
            "faoDivision": "G",
            "order": 66
        },
        vesselNames: ["Vessel I", "OSPREY", "SMILING MORN", "SILVER STAR", "Argosy", "GIRL LIZZIE", "MY BOYS", "Renown", "OCEAN TRUST", "GOOD HOPE", "KARINYA", "MIZPAH", "SWIFT", "Heather K", "Research", "REBEL", "NORDIC BRIDE", "Vessel V", "SADIE JOAN", "DELTA DAWN", "Ocean Challenge", "HOPE III", "Vessel VI", "ALTAIR", "DOLPHIN", "EXCEL", "Test 14a", "Vessel III", "EL-SHADDAI", "NIMROD", "GANNET", "Adorne II ", "Vessel IV", "SEA GULL", "Acorn", "GUIDE US", "SEA STAR", "HOPEFUL", "Atlantic Challenge", "BRIGHT RAY 11", "MARANDA MAY", "GIRL LYNNE", "ELONA", "TRUST", "AMAZING GRACE", "FAITH EMILY", "Vessel VII", "LEONA JANE", "Dunan Star", "Noronya", "BOUNTIFUL", "SURMOUNT", "CAPELLA", "HEATHER BELLE", "RESOLUTE", "Vessel II", "ADORN"],
        vesselDetails: ["Vessel I", "OSPREY", "SMILING MORN", "SILVER STAR", "Argosy", "GIRL LIZZIE", "MY BOYS", "Renown", "OCEAN TRUST", "GOOD HOPE", "KARINYA", "MIZPAH", "SWIFT", "Heather K", "Research", "REBEL", "NORDIC BRIDE", "Vessel V", "SADIE JOAN", "DELTA DAWN", "Ocean Challenge", "HOPE III", "Vessel VI", "ALTAIR", "DOLPHIN", "EXCEL", "Test 14a", "Vessel III", "EL-SHADDAI", "NIMROD", "GANNET", "Adorne II ", "Vessel IV", "SEA GULL", "Acorn", "GUIDE US", "SEA STAR", "HOPEFUL", "Atlantic Challenge", "BRIGHT RAY 11", "MARANDA MAY", "GIRL LYNNE", "ELONA", "TRUST", "AMAZING GRACE", "FAITH EMILY", "Vessel VII", "LEONA JANE", "Dunan Star", "Noronya", "BOUNTIFUL", "SURMOUNT", "CAPELLA", "HEATHER BELLE", "RESOLUTE", "Vessel II", "ADORN"]
    };

    var poe = 'reference';

    beforeEach(inject(function(_ReferenceFactory_, _ApiUrl_, _$httpBackend_) {
        ApiUrl = _ApiUrl_;
        ReferenceFactory = _ReferenceFactory_;
        $httpBackend = _$httpBackend_;
    }));

    //-------------------------------------------------------------------------------------------------------------------------------------------

    // ** GET Requests

    //-------------------------------------------------------------------------------------------------------------------------------------------


    // continueVoyageMessages

    describe('Reference :: continueVoyageMessages ---------------------- */', function() {

        it('expects http GET to return continueVoyageMessages', inject(function($http, $httpBackend) {

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = '11BA';

            //Respond

            var header_respond = null;
            var data_respond = resp.continueVoyageMessages;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            var url = ApiUrl.connect() + poe + '/continueVoyageMessages/' + data_send;

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.continueVoyageMessages(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.continueVoyageMessages);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });


    // salesNoteStatus

    describe('Reference :: salesNoteStatus ---------------------- */', function() {

        it('expects http GET to return logbook source', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/salesNoteStatus';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.salesNoteStatus;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.salesNoteStatus(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.salesNoteStatus);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });


    // Logbook Source

    describe('Reference :: logbookSource ---------------------- */', function() {

        it('expects http GET to return logbook source', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/logbookSource';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.logbookSource;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.logbookSource(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.logbookSource);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });


    // Target Species

    describe('Reference :: targetSpecies ---------------------- */', function() {

        it('expects http GET to return target species', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/targetSpecies';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.targetSpecies;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.targetSpecies(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.targetSpecies);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Species

    describe('Reference :: species ---------------------- */', function() {

        it('expects http GET to return species', inject(function($http, $httpBackend) {

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = 'CO';

            var url = ApiUrl.connect() + poe + '/species/' + data_send;

            //Respond

            var header_respond = null;
            var data_respond = resp.species;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.species(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.species);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // FAO Areas

    describe('Reference :: faoAreas ---------------------- */', function() {

        it('expects http GET to return faoAreas', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/faoAreas';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.faoAreas;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.faoAreas(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.faoAreas);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Economic Zones

    describe('Reference :: economicZones ---------------------- */', function() {

        it('expects http GET to return economicZones', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/economicZones';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.economicZones;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.economicZones(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.economicZones);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Return To Port Reason

    describe('Reference :: rtpreason ---------------------- */', function() {

        it('expects http GET to return rtpreason', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/rtpreason';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.rtpreason;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.rtpreason(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.rtpreason);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Gears

    describe('Reference :: gears ---------------------- */', function() {

        it('expects http GET to return gears', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/gears';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.gears;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.gears(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.gears);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Freshness Grades

    describe('Reference :: freshnessGrades ---------------------- */', function() {

        it('expects http GET to return freshnessGrades', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/freshnessGrades';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.freshnessGrades;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.freshnessGrades(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.freshnessGrades);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Size Grades

    describe('Reference :: sizeGrades ---------------------- */', function() {

        it('expects http GET to return sizeGrades', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/sizeGrades';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.sizeGrades;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.sizeGrades(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.sizeGrades);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Ices Nafo Zones

    describe('Reference :: icesNafoZones ---------------------- */', function() {

        it('expects http GET to return icesNafoZones', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/icesNafoZones/27';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = '27';

            //Respond

            var header_respond = null;
            var data_respond = resp.icesNafoZones;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.icesNafoZones(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.icesNafoZones);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    //Active States

    describe('Reference :: activeStates ---------------------- */', function() {

        it('expects http GET to return activeStates', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/activeStates';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.activeStates;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.activeStates(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.activeStates);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Disposals

    describe('Reference :: disposals ---------------------- */', function() {

        it('expects http GET to return disposals', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/disposals';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.disposals;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.disposals(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.disposals);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Destinations Of Withdrawn Product

    describe('Reference :: destinationsOfWithdrawnProduct ---------------------- */', function() {

        it('expects http GET to return destinationsOfWithdrawnProduct', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/destinationsOfWithdrawnProduct';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.destinationsOfWithdrawnProduct;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.destinationsOfWithdrawnProduct(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.destinationsOfWithdrawnProduct);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    //auctionCentres

    describe('Reference :: auctionCentres ---------------------- */', function() {

        it('expects http GET to return auctionCentres', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/auctionCentres';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.auctionCentres;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.auctionCentres(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.auctionCentres);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    //Relocation

    describe('Reference :: relocation ---------------------- */', function() {

        it('expects http GET to return relocation', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/relocation';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.relocation;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.relocation(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.relocation);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    //-------------------------------------------------------------------------------------------------------------------------------------------

    // ** POST Requests

    //-------------------------------------------------------------------------------------------------------------------------------------------

    // Landing Ports

    describe('Reference :: landingports ---------------------- */', function() {

        it('expects http POST to return landingports', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/landingports';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                "adminPortName": "Aberdeen"
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.landingports;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.landingports(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.landingports);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Vessel Details

    describe('Reference :: vesselDetails ---------------------- */', function() {

        it('expects http POST to return vesselDetails', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/vesselDetails';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                "vesselName": "OSPREY"
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.vesselDetails;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.vesselDetails(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.vesselDetails);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // FAO Divisions

    describe('Reference :: faoDivisions ---------------------- */', function() {

        it('expects http POST to return faoDivisions', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/faoDivisions';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                'fisheryAdministrationId': 1
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.faoDivisions;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.faoDivisions(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.faoDivisions);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // FAO Sub Divisions

    describe('Reference :: faoSubDivisions ---------------------- */', function() {

        it('expects http POST to return faoSubDivisions', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/faoSubDivisions';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                'faoDivisionId': 1
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.faoSubDivisions;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.faoSubDivisions(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.faoSubDivisions);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // FAO Sub Areas

    describe('Reference :: faoSubAreas ---------------------- */', function() {

        it('expects http POST to return faoSubDivisions', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/faoSubAreas';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                'faoSubDivisionId': 1
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.faoSubAreas;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.faoSubAreas(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.faoSubAreas);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // States

    describe('Reference :: states ---------------------- */', function() {

        it('expects http POST to return states', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/states';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                'speciesId': 1
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.states;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.states(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.states);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Presentations

    describe('Reference :: presentations ---------------------- */', function() {

        it('expects http POST to return presentations', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/presentations';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = {
                'speciesId': 1
            };

            //Respond

            var header_respond = null;
            var data_respond = resp.presentations;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.presentations(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.presentations);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Flag States

    describe('Reference :: ukAdminPorts ---------------------- */', function() {

        it('expects http GET to return ukAdminPorts', inject(function($http, $httpBackend) {

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = 'ABE';

            //Respond

            var header_respond = null;
            var data_respond = resp.ukAdminPorts;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            var url = ApiUrl.connect() + poe + '/ukAdminPorts/' + data_send;

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.ukAdminPorts(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.ukAdminPorts);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Area Details

    describe('Reference :: areaDetails ---------------------- */', function() {

        it('expects http GET to return areaDetails', inject(function($http, $httpBackend) {

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = '11BA';

            //Respond

            var header_respond = null;
            var data_respond = resp.areaDetails;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            var url = ApiUrl.connect() + poe + '/areaDetails/' + data_send;

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.areaDetails(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.areaDetails);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Flag States

    describe('Reference :: flagStates ---------------------- */', function() {

        it('expects http GET to return flag states', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/flagStates';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.flagStates;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.flagStates(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.flagStates);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

    // Fishing Admins

    describe('Reference :: fishingAdmins ---------------------- */', function() {

        it('expects http GET to return fishing admins', inject(function($http, $httpBackend) {

            var url = ApiUrl.connect() + poe + '/fishingAdmins';

            //Send

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };
            var data_send = null;

            //Respond

            var header_respond = null;
            var data_respond = resp.fishingAdmins;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('GET', url)
                .respond(200, data_respond);

            // Call http service
            ReferenceFactory.fishingAdmins(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();
            expect(successCallback.calls.mostRecent().args[0]).toEqual(resp.fishingAdmins);
            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

    });

});
