describe('$$$ - API Connection - $$$', function () {

    beforeEach(module('app.service.api'));

    var ApiUrl;

    beforeEach(inject(function (_ApiUrl_) {
        ApiUrl = _ApiUrl_;
    }));

    describe('Function :: API Connection ---------------------- */', function () {

        beforeEach(function () {
            ApiUrl.connect();
        });

        fit('should connect', function () {

            expect(ApiUrl).toBeDefined();
        });

        fit('should connect hard coded API Url', function () {

            var apiPath = '/api/';

            expect(ApiUrl.connect()).toBe(apiPath);
        });

    });
});
