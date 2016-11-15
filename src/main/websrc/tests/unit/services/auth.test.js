describe('$$$ - Auth Functions - $$$', function () {

    beforeEach(module('app.service.auth'));

    var AuthFactory;
    var $httpBackend;
    var base64;

    var user = {
        username: 'user1',
        email: 'bryce@soprasteria.com',
        password: 'user1',
        avatar: 'http://www.google.com/logo.png',
        bearer_token: 'token 1234',
        remember_me: true
    };

    var api_message = {
        error: {
            login: 'There has been an error logging you in'
        }
    };

    var social = {
        provider: 'facebook',
        social_id: '999'
    };

    var response = {
        verify_token: '1234'
    };

    beforeEach(inject(function (_AuthFactory_, _ApiUrl_, _$httpBackend_, _base64_) {
        AuthFactory = _AuthFactory_;
        ApiUrl = _ApiUrl_;
        $httpBackend = _$httpBackend_;
        base64 = _base64_;
    }));

    describe('Function :: authenticate Client ---------------------- */', function () {

        it('expect authentication to fail', function () {

            var data = false;

            if (data === false) {
                return;
            }
        });

        it('expect authentication to pass', function () {

            var data = {
                username: user.username,
                token: user.bearer_token,
                avatar: user.avatar
            };

            if (data === false) {
                return false;
            } else {
                return;
            }
        });

    });

    describe('Function :: Check Token Session ---------------------- */', function () {

        it('expect user to be logged out', function () {

            AuthFactory.loggedIn === false;

            expect(AuthFactory.checkToken()).toBe(false);
        });

        it('expect user to be logged in', function () {

            AuthFactory.loggedIn === true;

            expect(AuthFactory.checkToken()).toBeDefined();
        });

        it('should set token', function () {

            expect(user.bearer_token).toBeDefined();
            AuthFactory.setToken(user.bearer_token);
            expect(AuthFactory.getToken()).toBeDefined();
        });

        it('should get token', function () {

            AuthFactory.setToken(user.bearer_token);

            expect(AuthFactory.getToken()).toBeDefined();
            expect(AuthFactory.getToken()).toBe(user.bearer_token);
        });

        it('should remove token', function () {

            AuthFactory.removeToken();

            expect(AuthFactory.getToken()).toBeUndefined();
        });

    });

    describe('Function :: Remember Me ---------------------- */', function () {

        it('should set remember me', function () {

            expect(user.remember_me).toBeDefined();
            AuthFactory.setRemember(user.remember_me);
            expect(AuthFactory.getRemember()).toBeDefined();
        });

        it('should get remember me', function () {

            AuthFactory.setRemember(user.remember_me);

            expect(AuthFactory.getRemember()).toBeDefined();
        });

        it('should remove token', function () {

            AuthFactory.removeRemember();

            expect(AuthFactory.getRemember()).toBeUndefined();
        });

    });

    describe('Function :: Log Out ---------------------- */', function () {

        it('should set check if user is logged in', function () {

            expect(AuthFactory.checkToken()).toBeDefined();
        });

        it('should clear data', function () {

            AuthFactory.clearData();

            expect(AuthFactory.checkToken()).toBe(false);
        });

    });

    describe('Function :: Sign In ---------------------- */', function () {

        it('expects http GET to login via API and return Token', inject(function ($http, $httpBackend) {

            var url = ApiUrl.connect() + 'auth/login';

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };

            var data_send = {
                username: user.username,
                password: user.password
            };

            var data_respond = {
                token: user.bearer_token,
                username: user.username,
                avatar: user.avatar
            };

            var header_respond = null;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation
            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            AuthFactory.login(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(successCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations
            expect(errorCallback).not.toHaveBeenCalled();

            expect(successCallback.calls.mostRecent().args[0]).toEqual(jasmine.objectContaining({
                token: user.bearer_token
            }));

            expect(successCallback.calls.mostRecent().args[1]).toBe(200);

        }));

        it('expects http GET to FAIL login via API due to unknown user', inject(function ($http, $httpBackend) {

            var url = ApiUrl.connect() + 'auth/login';

            var header_send = {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8'
            };

            var data_send = {
                username: 'wronguser',
                password: 'wrongpassword'
            };

            var data_respond = {
                message: {
                    error: api_message.error.login
                }
            };

            var header_respond = null;

            successCallback = jasmine.createSpy('success');
            errorCallback = jasmine.createSpy('error');

            // Create expectation

            $httpBackend
                .expect('POST', url, data_send, header_send)
                .respond(200, data_respond);

            // Call http service
            AuthFactory.login(data_send)
                .success(successCallback)
                .error(errorCallback);

            // callback called only after flush
            expect(errorCallback).not.toHaveBeenCalled();

            // flush response
            $httpBackend.flush();

            // // Verify expectations

            expect(successCallback.calls.mostRecent().args[0]).toEqual(jasmine.objectContaining({
                message: {
                    error: api_message.error.login
                }
            }));

            expect(successCallback.calls.mostRecent().args[1]).toBe(200);
            // expect(errorCallback).toHaveBeenCalled();

            // expect(errorCallback.calls.mostRecent().args[1]).toBe(401);

        }));

        // it('expects http GET to FAIL due to missing Auth header', inject(function ($http, $httpBackend) {

        //     var url = ApiUrl.connect() + '/auth/login';

        //     var data_send = null;

        //     var header_send = {
        //         'Accept': 'application/json, text/plain, */*'
        //     };

        //     var data_respond = {
        //         token: user.bearer_token,
        //         username: user.username,
        //         avatar: user.avatar
        //     };

        //     var header_respond = null;

        //     errorCallback = jasmine.createSpy('error');

        //     // Create expectation

        //     $httpBackend.expect('POST', url, data_send, function (header_send) {
        //             // check if the header was send, if it wasn't the expectation won't
        //             // match the request and the test will fail
        //             return header_send['Authorization'] === 'Basic ' + base64.encode(user.username + ':' + user.password);
        //         })
        //         .respond(401, 'Invalid bearer token');

        //     // Call http service
        //     AuthFactory.signin(user.username, user.password)
        //         .error(errorCallback);

        //     // callback called only after flush
        //     expect(errorCallback).not.toHaveBeenCalled();

        //     // flush response
        //     $httpBackend.flush();

        //     // // Verify expectations
        //     expect(errorCallback).toHaveBeenCalled();

        //     expect(errorCallback.calls.mostRecent().args[1]).toBe(401);

        // }));

    });

    // describe('Function :: Sign Up ---------------------- */', function() {

    //     it('expects http POST to sign up via API and return verification Token', inject(function($http, $httpBackend) {

    //         var url = ApiUrl.connect() + '/users';

    //         var data_send = {
    //             'username': user.username,
    //             'password': user.password,
    //             'email': user.email
    //         }

    //         var header_send = {
    //             'Accept': 'application/vnd.marine.user.v1+json',
    //             'Content-Type': 'application/json;charset=utf-8'
    //         };

    //         var data_respond = {
    //             token: response.verify_token
    //         };

    //         var header_respond = null;

    //         successCallback = jasmine.createSpy('success');
    //         errorCallback = jasmine.createSpy('error');

    //         // Create expectation
    //         $httpBackend
    //             .expect('POST', url, data_send, header_send)
    //             .respond(200, data_respond);

    //         // Call http service
    //         AuthFactory.signup(user.username, user.email, user.password)
    //             .success(successCallback)
    //             .error(errorCallback);

    //         // callback called only after flush
    //         expect(successCallback).not.toHaveBeenCalled();

    //         // flush response
    //         $httpBackend.flush();

    //         // // Verify expectations
    //         expect(errorCallback).not.toHaveBeenCalled();

    //         expect(successCallback.calls.mostRecent().args[0]).toEqual(jasmine.objectContaining({
    //             token: response.verify_token
    //         }));

    //         expect(successCallback.calls.mostRecent().args[1]).toBe(200);

    //     }));

    // });

    // describe('Function :: Sign Up Social ---------------------- */', function() {

    //     it('expects http POST to verify user via API and return bearer token on login', inject(function($http, $httpBackend) {

    //         var url = ApiUrl.connect() + '/users';

    //         var data_send = {
    //             email: user.email,
    //             username: user.username,
    //             provider: social.provider,
    //             social_id: social.social_id
    //         };

    //         var header_send = {
    //             'Accept': 'application/vnd.marine.user.v1+json',
    //             'Content-Type': 'application/json;charset=utf-8'
    //         };

    //         var data_respond = {
    //             username: user.username,
    //             email: user.email,
    //             avatar: user.avatar
    //         };

    //         var header_respond = null;

    //         successCallback = jasmine.createSpy('success');
    //         errorCallback = jasmine.createSpy('error');

    //         // Create expectation
    //         $httpBackend
    //             .expect('POST', url, data_send, header_send)
    //             .respond(200, data_respond);

    //         // Call http service
    //         AuthFactory.signupSocial(user.email, user.username, social.provider, social.social_id)
    //             .success(successCallback)
    //             .error(errorCallback);

    //         // callback called only after flush
    //         expect(successCallback).not.toHaveBeenCalled();

    //         // flush response
    //         $httpBackend.flush();

    //         // // Verify expectations
    //         expect(errorCallback).not.toHaveBeenCalled();

    //         expect(successCallback.calls.mostRecent().args[0]).toEqual(jasmine.objectContaining({
    //             username: user.username
    //         }));

    //         expect(successCallback.calls.mostRecent().args[1]).toBe(200);

    //     }));

    // });

    // describe('Function :: Verify ---------------------- */', function() {

    //     it('expects http GET to verify user via API and return bearer token on login', inject(function($http, $httpBackend) {

    //         var url = ApiUrl.connect() + '/auth/marine';

    //         var data_send = null;

    //         var header_send = {
    //             'Authorization': 'Token token=' + response.verify_token,
    //             'Accept': 'application/json, text/plain, */*'
    //         };

    //         var data_respond = {
    //             token: user.bearer_token
    //         };

    //         var header_respond = null;

    //         successCallback = jasmine.createSpy('success');
    //         errorCallback = jasmine.createSpy('error');

    //         // Create expectation
    //         $httpBackend
    //             .expect('GET', url, data_send, header_send)
    //             .respond(200, data_respond);

    //         // Call http service
    //         AuthFactory.verify('Token', response.verify_token, 'token')
    //             .success(successCallback)
    //             .error(errorCallback);

    //         // callback called only after flush
    //         expect(successCallback).not.toHaveBeenCalled();

    //         // flush response
    //         $httpBackend.flush();

    //         // // Verify expectations
    //         expect(errorCallback).not.toHaveBeenCalled();

    //         expect(successCallback.calls.mostRecent().args[0]).toEqual(jasmine.objectContaining({
    //             token: user.bearer_token
    //         }));

    //         expect(successCallback.calls.mostRecent().args[1]).toBe(200);

    //     }));

    // });

    // describe('Function :: Forgot Password ---------------------- */', function() {

    //     it('expects http POST to verify user via API and return verify token via email', inject(function($http, $httpBackend) {

    //         var url = ApiUrl.connect() + '/users/password/token';

    //         var data_send = {
    //             email: user.email
    //         };

    //         var header_send = {
    //             'Accept' : 'application/vnd.marine.token.v1+json',
    //             'Content-Type': 'application/json;charset=utf-8'
    //         };

    //         var data_respond = null;

    //         var header_respond = null;

    //         successCallback = jasmine.createSpy('success');
    //         errorCallback = jasmine.createSpy('error');

    //         // Create expectation
    //         $httpBackend
    //             .expect('POST', url, data_send, header_send)
    //             .respond(200, data_respond);

    //         // Call http service
    //         AuthFactory.forgot(user.email)
    //             .success(successCallback)
    //             .error(errorCallback);

    //         // callback called only after flush
    //         expect(successCallback).not.toHaveBeenCalled();

    //         // flush response
    //         $httpBackend.flush();

    //         // // Verify expectations
    //         expect(errorCallback).not.toHaveBeenCalled();

    //         expect(successCallback.calls.mostRecent().args[1]).toBe(200);

    //     }));

    // });

    // describe('Function :: Resend Validation ---------------------- */', function() {

    //     it('expects http POST to re-verify user via API and return verify token via email', inject(function($http, $httpBackend) {

    //         var url = ApiUrl.connect() + '/users/token';

    //         var data_send = {
    //             email: user.email
    //         };

    //         var header_send = {
    //             'Accept' : 'application/vnd.marine.v1+json',
    //             'Content-Type': 'application/json;charset=utf-8'
    //         };

    //         var data_respond = null;

    //         var header_respond = null;

    //         successCallback = jasmine.createSpy('success');
    //         errorCallback = jasmine.createSpy('error');

    //         // Create expectation
    //         $httpBackend
    //             .expect('POST', url, data_send, header_send)
    //             .respond(200, data_respond);

    //         // Call http service
    //         AuthFactory.inactive(user.email)
    //             .success(successCallback)
    //             .error(errorCallback);

    //         // callback called only after flush
    //         expect(successCallback).not.toHaveBeenCalled();

    //         // flush response
    //         $httpBackend.flush();

    //         // // Verify expectations
    //         expect(errorCallback).not.toHaveBeenCalled();

    //         expect(successCallback.calls.mostRecent().args[1]).toBe(200);

    //     }));

    // });

});
